import React from 'react';
import { Route } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'
import './App.css';

import PurchaseHistory from'./PurchaseHistory'
import Cart from'./Cart'
import Reciept from "./Reciept"



class App extends React.Component {
  
  render(){
    return <div  className="App"> 
            <HashRouter> 
              <ul>
                <li><Link to='/history'>History Screen</Link></li>
                <li><Link to='/reciept'>Reciept Screen</Link></li>
                <li><Link to='/cart'>Cart Screen</Link></li>
              </ul>
              
              

              <Route path='/history' component={PurchaseHistory}/>
              <Route path='/reciept' component={Reciept}/>
              <Route path='/cart' component={Cart} />
            </HashRouter>
           </div>
  
  }
}

export default App;
