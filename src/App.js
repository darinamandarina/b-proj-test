import React from 'react';
import './App.css';
import PurchaseHistory from'./PurchaseHistory'

class App extends React.Component {
  
  render(){
    return <div className="App">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <PurchaseHistory/>
            </div>
  
  }
}

export default App;
