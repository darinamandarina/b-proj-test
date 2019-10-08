import React from 'react'

// material-ui components and methods
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

// react components
import TablePaginationActions from './TablePaginationActions'

// styles theme
import style from './purchaseHistoryTheme.js'


class PurchaseHistory extends React.Component {
  
  constructor(props){

    super(props)

    this.state={
      page: 0,
      rowsPerPage: 5,
      loading: false,
      data: []
    }
  }

  componentWillMount(){
    this.setState((state)=>{
      return {...state, loading: true }
    })

    fetch('data.json')
            .then(res=>res.json())
            .then((data)=>{
              this.setState((state)=>{
                return {...state, data: data.rows, loading: false }
              })
            })
  }

  handleChangePage = (event, newPage) => {
    this.setState({...this.state, page: newPage})

  }

  handleChangeRowsPerPage = event => {
    this.setState({...this.state, rowsPerPage: parseInt(event.target.value)})
  }

  renderCell(field, item){
    const { classes } = this.props

    const simpleValues = [ 'quantity', 'totalPrice', 'paymentType' ]
    let cell = null

    if (simpleValues.includes(field)){
        cell = <TableCell>{item[field]}</TableCell>
    } else{
      switch(field){
        case 'event':
            cell = <TableCell>
              <div className={classes.event}>
              <Typography variant="h6" className="event__name">{item.event.name}</Typography>
              <span className="event__type">{item.event.type}</span>
              </div>
              </TableCell>
        break
        
        case 'date':
            cell = <TableCell>
            <div className={classes.date}>
              <span className="date__time">{item.date.time}</span>
              <span className="date__date">{item.date.date}</span>
            </div>
          </TableCell>
        break

        case 'paymentStatus':

            let cellContent = Array.isArray(item.paymentStatus) ? 
                <div className={classes.status}>
                  <span className={classes.status__reciept}>{ item.paymentStatus[1] }</span>
                  <span className={classes.status__result}>{ item.paymentStatus[0] }</span>
                </div>
                :
                item.paymentStatus

            cell = <TableCell>{cellContent}</TableCell>
        break

        default: cell = null

      }
    }

    return cell
  }

  renderRows(data, rowsPerPage, page) {

    const schema = ['event', 'date', 'quantity', 'totalPrice', 'paymentType', 'paymentStatus']
    const { classes } = this.props

    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((d, i) => 
      (
        <TableRow className={classes.row} key = {i}>
          {schema.map(field => { return this.renderCell(field, d)})}
        </TableRow>
      ))
  }
  render(){
    const {page, data} = this.state
    let {rowsPerPage} = this.state
    const { classes } = this.props
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)
    return(
          // <Paper>
           <div className={classes.container}>
            <Typography variant="h4" component="h1" className={classes.h1} >Purchase history</Typography>
              <Table className={classes.table}>                
                <TableHead>
                  <TableRow className={classes.row}>
                  {['Event','Date', 'Quantity', 'Total price', 'Payment type', 'Payment status'].map(i=><TableCell>{i}</TableCell>)}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.renderRows(data, rowsPerPage, page)}
                  {emptyRows > 0 && (
                    <TableRow className={classes.row} style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                <TableFooter> 
                  <TableRow  colSpan={6}>
                  <TablePagination
                    align="right"
                    rowsPerPageOptions={[5, 10, 25]}
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          // </Paper>

    )
  }
  
}

  export default withStyles(style)(PurchaseHistory)