import { useState } from 'react';
import './App.css';
import ReceiptForm  from "./MyComponents/ReceiptForm";
import Receipts from './MyComponents/Receipts';

function App() {

  const addReceipt = (date, amount, paymode, remark) => {
    console.log("I am adding this receipt", date, amount, paymode, remark);

    const myReceipt = {
      date: date,
      amount: amount,
      payMode: paymode,
      remarks: remark
    }
    setReceipts([...receipts, myReceipt]);
    console.log(myReceipt);
  }

  const [receipts, setReceipts] = useState([
    // {
    //   date: "28/07/22",
    //   amount: "350",
    //   payMode: "Cash",
    //   remarks: "this is remark"
    // },
    // {
    //   date: "2/07/22",
    //   amount: "50",
    //   payMode: "Cash",
    //   remarks: "here is remark"
    // }
  ]);
 
  return (
    <>
    <ReceiptForm addReceipt={addReceipt}/>
    <Receipts receipts={receipts}/>
    </>
  );
}

export default App;
