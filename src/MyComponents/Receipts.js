import React from 'react'
import ReceiptItem from './ReceiptItem';


// Todos.js
const Receipts = (props) => {
  return (
    <div className='container'>
      <h5><ins>Receipts Table</ins></h5>
      {/* if no receipt is there */}
      {props.receipts.length === 0 ? "No Receipt to display" :
        props.receipts.map((receipt) => {
          return (
            <ReceiptItem receipt={receipt} key={receipt.date}/>
          )
        })}

    </div>
  )
}

export default Receipts
