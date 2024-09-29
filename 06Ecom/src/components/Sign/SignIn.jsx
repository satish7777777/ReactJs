import React from 'react'

function SignIn() {
  return (
    <div className='container border pb-4 pt-4 bg-dark-subtle' style={{width:"700px", height:"500px"}}>
        <form>
  <div class="form-group pb-5">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">Enter Your Email and Password</small>
  </div>
  <div class="form-group pb-5">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group form-check">
    
    <label class="form-check-label" for="exampleCheck1">Forget Password</label>
  </div>
  <button type="submit" class="btn btn-primary">Sign In</button>
</form>
    </div>
  )
}

export default SignIn