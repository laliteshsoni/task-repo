import React, { useState } from 'react'


// Addtodo.js

const ReceiptForm = ({ addReceipt }) => {

    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [paymode, setPaymode] = useState("Cash");
    const [remark, setRemark] = useState("");

    // document.onkeydown = e => {
    //     e.preventDefault();

    //     let charCode = String.fromCharCode(e.which).toLowerCase()

    //     if ((e.ctrlKey || e.metaKey) && charCode === 's') {
    //         // console.log('call here your submit function')
    //         submit(e);
    //     }
    //     if (e.key === "Escape") { 
    //         // console.log("call here cancel func") 
    //         close(e);
    //     }
    // }


    const close = (e) => {
        setDate("");
        setAmount("");
        setPaymode("");
        setRemark("");
    }

    const submit = (e) => {
        // page not reload
        e.preventDefault();
        // if(!date || !amount || !paymode || !remark){
        //     alert("Something is missing! Please Fill");
        // }
        addReceipt(date, amount, paymode, remark);

    }


    return (
        <div className='container'>
            <h5><ins>Receipt Details</ins></h5>
            <form onSubmit={submit}>
                <div className="row mb-3">
                    <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                    <div className="col-sm-3">
                        <input type="text" value={date} onChange={(e) => { setDate(e.target.value) }} className="form-control" id="date" placeholder="Enter Date" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="amount" className="col-sm-2 col-form-label">Amount</label>
                    <div className="col-sm">
                        <input type="text" value={amount} onChange={(e) => { setAmount(e.target.value) }} className="form-control" id="amount" placeholder="Enter Amount (in INR)" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="paymode" className="col-sm-2 col-form-label">Payment Mode</label>
                    <div className="col-sm-6">
                        <select className="form-select" value={paymode} onChange={(e) => { setPaymode(e.target.value) }} id="paymode" required>
                            <option value="Cash">Cash</option>
                            <option value="Online">Online</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="remark" className="col-sm-2 col-form-label">Remark</label>
                    <div className="col-sm">
                        <input type="text" value={remark} onChange={(e) => { setRemark(e.target.value) }} className="form-control" id="remark" placeholder="Enter Remark" />
                    </div>
                </div>
                <div className='d-grid gap-4 d-flex justify-content-md-end'>
                    <button type='button' className="btn btn-outline-danger" onClick={(e) => close(e)} >CANCEL <br /><ins>(Esc)</ins></button>
                    <button type="submit" className="btn btn-success">SUBMIT <br /><ins>( <img src='/command-symbol.png' height={15} width={15} alt="sorry" />   S)</ins></button>
                </div>
            </form>
        </div>
    )
}

export default ReceiptForm
