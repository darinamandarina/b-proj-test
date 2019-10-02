import React from 'react';

// material-ui components and methods
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// react components
import TablePaginationActions from './TablePaginationActions'



  class PurchaseHistoryTable extends React.Component {
    constructor(props){
      super(props)
      this.state={
        page:0,
        rowsPerPage:5
      }
      this.rows = [
        this.createData('Hiking in the Tatras', {time:'10:00', date:'25 May, 2019'}, 3, '120 $', 'Credit Card', 'In progress'),
        this.createData('Hiking in the Tatras', {time:'10:00', date:'25 May, 2019'}, 3, '120 $', 'Credit Card', ['Successfully', 'Receipt']),
        this.createData('Hiking in the Tatras', {time:'10:00', date:'25 May, 2019'}, 3, '120 $', 'Credit Card', 'Refunded'),
        this.createData('Hiking in the Tatras', {time:'10:00', date:'25 May, 2019'}, 3, '120 $', 'Credit Card', ['Successfully', 'Receipt']),
        this.createData('Hiking in the Tatras', {time:'10:00', date:'25 May, 2019'}, 3, '120 $', 'Credit Card', ['Successfully', 'Receipt']),
      ]
    }
    createData = (event, date, quantity, totalPrice, paymentType, paymentStatus) => {
      return { event, date, quantity, totalPrice, paymentType, paymentStatus };
    }
    handleChangePage = (event, newPage) => {
      this.setState({...this.state, page: newPage});

    }
  
    handleChangeRowsPerPage = event => {
      this.setState({...this.state, rowsPerPage: parseInt(event.target.value, 10)});
      this.setState({...this.state, page: 0});
      
    }
    render(){
      const {page, rowsPerPage} = this.state
      const emptyRows = rowsPerPage - Math.min(this.rowsPerPage, this.rows.length - this.page * this.rowsPerPage);
      return(
            <Paper>
              <div>
                <Table>                
                  <TableHead>
                    <TableRow>
                      <TableCell>Event</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Total price</TableCell>
                      <TableCell>Payment type</TableCell>
                      <TableCell>Payment status</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {this.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row=>(
                      <TableRow>
                        <TableCell component='th' scope='row'>
                          {row.event}
                        </TableCell>
                        <TableCell>
                          <div className='date'>
                            <span className='date__time'>{row.date.time}</span>
                            <span className='date__date'>{row.date.date}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {row.quantity}
                        </TableCell>
                        <TableCell>
                          {row.totalPrice}
                        </TableCell>
                        <TableCell>
                          {row.paymentType}
                        </TableCell>
                        <TableCell>                          
                          {
                            Array.isArray(row.paymentStatus) ? 
                            <div className='status'>
                              <span className='date__reciept'>{ row.paymentStatus[1] }</span>
                              <span className='status__result'>{ row.paymentStatus[0] }</span>
                            </div>
                            :
                            row.paymentStatus
                          }
                        </TableCell>
                      </TableRow>
                    ))}
                    
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>

                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={3}
                        count={this.rows.length}
                        rowsPerPage={this.rowsPerPage}
                        page={this.page}
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
            </Paper>

      )
    }
    
  }

  export default PurchaseHistoryTable;