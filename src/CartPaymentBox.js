import React from 'react' 

import style from './cartPaymentTheme.js'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



class CartPaymentBox extends React.Component {
    

    render(){
        const { classes, totalPrices, total } = this.props
        return(
            <Paper className={classes.payment}>
                <div className="items">
                    <Typography variant="h6" className="payment_header">Details</Typography>
                    {
                        totalPrices.map((price,i)=>{                            
                            return <Typography variant="h5" className="payment_item">Item {i+1}: {price} $</Typography>
                        })
                    }
                    <Typography variant="h5" className="payment_total">Total: {total} $</Typography>

                </div>
                <form className={classes.form} noValidate>
                    <TextField
                        className={"form__cardname"}
                        label="card name"
                        variant="outlined"
                    />
                    <TextField
                        className={"form__cardnum"}
                        label="card number"
                        variant="outlined"
                    />
                    <div className="card__data">
                        <TextField
                            className={"form__cardexp"}
                            label="mm/yy"
                            variant="outlined"
                        />

                        <TextField
                            className={"form__cardcvv"}
                            label="cvv"
                            variant="outlined"
                        />
                    </div>
                </form>
                <div className="btn-grp">
                    <Button variant="outlined" className={classes.button}>cancel</Button>
                    <Button variant="outlined" className={classes.button}>pay</Button>    
                </div>    

            </Paper>
        )
    }
}

export default withStyles(style)(CartPaymentBox)