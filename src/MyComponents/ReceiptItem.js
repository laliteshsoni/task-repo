import React from 'react'


// TodoItem.js
const ReceiptItem = ({ receipts }) => {
    return (
        <div>
            {/* <h4>{receipt.date}</h4>
            <h4>{receipt.amount}</h4>
            <h4>{receipt.payMode}</h4>
            <h4>{receipt.remarks}</h4> */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment Mode</th>
                        <th scope="col">Remark</th>
                    </tr>
                </thead>
                <tbody>
                    {receipts.map((receipt, index) => 

                        <tr key={index}>
                        <th scope="row">{receipt.date}</th>
                        <td>{receipt.amount}</td>
                        <td>{receipt.payMode}</td>
                        <td>{receipt.remarks}</td>
                    </tr>
                    )} 
                    
                </tbody>
            </table>
        </div>
    )
}

export default ReceiptItem
