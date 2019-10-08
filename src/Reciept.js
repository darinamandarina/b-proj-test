import React from 'react' 

import * as jsPDF from 'jspdf'
import html2canvas from "html2canvas"

import style from './recieptTheme.js'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class Reciept extends React.Component {

    state = {
        company:{},
        reciept:{
            data:[],
            recieptTotal: 0,    
        },
        customer:{},
        schema: [],
    }

    componentWillMount(){
        this.setState((state)=>{
            return {...state, loading: true }
          })
      
          fetch('recieptdata.json')
                  .then(res=>res.json())
                  .then((data)=>{
                    this.setState((state)=>{ 
                        let schema = data.reciept.data.map((r)=>Object.keys(r))[0]
                        let recieptPrices = data.reciept.data.map(r=>r.price)
                        let recieptQuantity = data.reciept.data.map(r=>r.quantity)
                        let amount = state.recieptAmounts
                        let recieptTotal = state.recieptTotal
                        
                        amount = recieptPrices.map(p=>recieptQuantity.map(q=>p*q))[0]
                        recieptTotal = amount.reduce((a,v)=>a+v)
                        let reciept =  data.reciept 
                        reciept = reciept.data.map(p => ({ ...p, amount: p.quantity*p.price}))                 
                        reciept = {...reciept, recieptTotal}
                        console.log(reciept)
                        return {...state, company: data.company, customer: data.customer, reciept, schema, loading: false }
                    })
                  })    
        
    }
    renderTable = () => {
        const {classes} = this.props
        const { company, customer, reciept, schema } = this.state
        const companyKeys = Object.keys(company)
        const customerKeys = Object.keys(customer)
        
        return <div className={`${classes.reciept} reciept`}>
        <div className="reciept__body">

            <div className="company">
            {
                companyKeys.map(k=>{
                    let div = null
                    if (k === 'companyName') {
                        div = <Typography variant="h3">{company.companyName}</Typography>
                    }else{
                        div = <Typography variant="h6">{company[k]}</Typography>
                    }
                    return div
                })                
                
            }

            </div>

            <div className="customer">

                {
                    customerKeys.map(k=>{
                        let div = <div className="customerInfo"> 
                            <Typography variant="h4">{k}</Typography>
                            <Typography variant="h6">{customer[k]}</Typography>
                        </div>
                        return div
                    })
                }

            </div>

        </div>

        <div className="reciept__table">

            <div className="table__header">
                {
                    schema.map(s=><Typography className={classes.tableItem} variant="h6">{s}</Typography>)
                }
                <Typography className={classes.tableItem} variant="h6">amount</Typography>
            </div>
            <div className="table__body">
                
                    {
                        Object.keys(reciept)
                        .map(e=>
                            typeof(reciept[e])==='object'?
                                Object.values(reciept[e])
                            : 
                                reciept[e]
                            )
                        .map(el=>
                            typeof(el) === 'object'?
                                <div className="body__element">
                                    {el.map((e)=><Typography className={classes.tableItem} variant="h6">{e}</Typography>)}
                                </div>
                            :<div className="body__total">   
                                <Typography className="totalAmount" variant="h6">Total:</Typography>
                                <Typography className="totalAmount" variant="h6">{el} $</Typography>
                            </div>
                            )
                                        
                    } 
            </div>
        </div>
    </div>

    }
    convertToPDF = (e) => {
        window.html2canvas = html2canvas;
        let doc = new jsPDF("l", "px", "a2")
        const source = document.querySelectorAll('.reciept')[0]
        html2canvas(source, { scale: 2 })
            .then(canvas => {
                var x = canvas.toDataURL("image/jpeg", 0.95)
                doc.addImage(x, "JPEG", 0, 50, 1200, 350 )
                doc.save("body.pdf")
          });
    }  

    render(){
        const {classes} = this.props
              
        return(
            <div>
                <div className="reciept__head">
                    <Typography variant="h4">Reciept</Typography>
                    <Button variant="outlined" className={classes.button} onClick={this.convertToPDF}>download pdf</Button>
                </div>

                {this.renderTable()}
                
            </div>       
        )
    }
}

export default withStyles(style)(Reciept)
