import React from 'react' 

import style from './cartTheme.js'
import { withStyles } from '@material-ui/styles'

import CartSelectedGood from './CartSelectedGood'



class Cart extends React.Component {

    state={
        selectedGoods:[]
    }

    render(){
        return(
            <CartSelectedGood/>
        )
    }
}

export default withStyles(style)(Cart)