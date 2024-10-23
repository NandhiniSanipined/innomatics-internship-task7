import React from 'react'

export default function Wallet() {
  return (
    <div class="col-md-10">

      <h5 style={{ marginLeft: '60%', paddingTop: '15%' }}>SignIn</h5>
      <h5 style={{ marginLeft: '50%' }}>To create account enter your mobile number</h5>
      <form>
        <div class="form-group" style={{ height: '40%', width: '40%', marginLeft: '50%' }}>
          <input type="mobile no" id="mobile no" class="form-control" placeholder="+91" required></input>
        </div>
      </form>
      <h6 style={{ marginLeft: '50%', paddingTop: "2%" }}>By accepting this you agree to ourTerms and conditions,<br></br>Privacy Policy&Content Policy</h6>
      <div className="venkata" style={{ marginLeft: '60%' }}><button type="button" class="btn btn-primary">Enter otp</button></div>


    </div>
  )
}
