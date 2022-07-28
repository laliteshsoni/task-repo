import React from 'react'


// TodoItem.js
const ReceiptItem = ({receipt}) => {
  return (
    <div>
        <h4>{receipt.date}</h4>
        <h4>{receipt.amount}</h4>
        <h4>{receipt.payMode}</h4>
        <h4>{receipt.remarks}</h4>
      
    </div>
  )
}

export default ReceiptItem
