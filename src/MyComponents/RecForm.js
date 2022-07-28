import React from 'react'

const RecForm = () => {
    return (
        <div className='container'>
            <h5><ins>Receipt Details</ins></h5>
            <form> 
                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Date</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="colFormLabel" placeholder="Enter Date" required/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Amount</label>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="colFormLabel" placeholder="Enter Amount (in INR)" required />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Payment Mode</label>
                    <div class="col-sm-6">
                        <select class="form-select" id="specificSizeSelect" required>
                            <option selected>Cash</option>
                            <option value="1">Online</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Remark</label>
                    <div class="col-sm">
                        <input type="text" class="form-control" id="colFormLabel" placeholder="Enter Remark" />
                    </div>
                </div>
                <div className='d-grid gap-4 d-flex justify-content-md-end'>
                    <button type="submit" class="btn btn-outline-danger">Cancel (Esc)</button>
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RecForm
