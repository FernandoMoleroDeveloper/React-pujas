
import './App.css';
import BankAccount from './components/BankAccount/BankAccount';
import Bidder from './components/Bidder/Bidder';
import React from 'react';


function App() {

  const [bidderList, setBidderList] = React.useState ([100]);

  const addBidder = () => {
    const newBidderList = [...bidderList, parseInt(bidderList[bidderList.length-1]) +5]
    
    setBidderList(newBidderList);
  }

  return (
    <div className="app">
    
    <h2>Cuenta Bancaria:</h2>
      <BankAccount></BankAccount>
    <h2>Listado de pujas:</h2>

      <ul>
        {bidderList.map(bidder => <li key={bidder}>{bidder.toString()}</li>)} 
      </ul>

      <Bidder addBidder={addBidder} name="Pedro"></Bidder>
      <Bidder addBidder={addBidder} name="Gonzalo"></Bidder>
      <Bidder addBidder={addBidder} name="Edu"></Bidder>  

    </div>
  );
}

export default App;
