import React from 'react' 

import style from './cartGoodTheme.js'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import CartPaymentBox from './CartPaymentBox'

class CartSelectedGood extends React.Component {

    state = {
        data:[],
        totalPrices:[],
        total:0
    }
    componentWillMount(){
        this.setState((state)=>{
            return {...state, loading: true }
          })
      
          fetch('cartdata.json')
                  .then(res=>res.json())
                  .then((data)=>{
                    this.setState((state)=>{
                        let totalPrices = data.selectedGoods.map(good=>good.totalPrice),
                            total = totalPrices.reduce((a,v)=>Number(a)+Number(v))
                            console.log(total)
                        
                        return {...state, data: data.selectedGoods, totalPrices, total, loading: false }
                    })
                  })
        
    }
    renderText = (field, item) =>{
        
            let simpleText = ["time", "pricePerHour"],
                text = null
            if (simpleText.includes(field)){
                text = <Typography className={`about__${field} item`} variant={"subtitle1"}>{item[field]}</Typography>
            } else {  
            switch(field){
         
                case "title":
                    text = <Typography className={`about__${field}  item`} variant={"h5"}>{item.title}</Typography>
                    break
         
                case "eventType":
                    text =   <Typography   className={`about__${field}  item`} variant={"h6"}>{item.eventType}</Typography>
                    break
                
                case "imgsrc":    
                    text = <img src={item.imgsrc} className="about__imgsrc" alt="cart_img"/>  
                    break 

                case "totalPrice": 
                    text = <Typography className={`about__totalPrice`} align={"rigth"} display='inline' variant={"h6"}>{`Total: ${item.totalPrice}$`}</Typography>
                    break 

                default: text = null    
            }
        }
        return text
    }
         

    render(){
        const { classes } = this.props
        const { data } = this.state
        const schema = ["imgsrc", "title", "eventType", "time", "pricePerHour", "totalPrice"]

        return(
            <div className={classes.cart}>       
                <div className={classes.cartElement}>
                    <div className="cartElement__card">
                    <Typography className={classes.cartElement__name} variant={"h3"}>Cart</Typography>     
                        
                        {
                            data.map( (d) => 
                            <div className={classes.cartElement__about}>{schema.map(e=>{return this.renderText(e, d)})}</div> 
                            )
                        }
                    </div>     

                    <CartPaymentBox totalPrices={this.state.totalPrices} total = {this.state.total}/>
                </div>
                <div className="cartSystem">    
                        <Typography variant="h3" className="header">Payment systems</Typography>
                        <Button variant="outlined" className={classes.button}>First payment system</Button>
                        <Button variant="outlined" className={classes.button}>Second payment system</Button>
                </div>
            </div>
)
    }
}

export default withStyles(style)(CartSelectedGood)