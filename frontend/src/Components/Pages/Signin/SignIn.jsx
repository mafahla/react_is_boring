import React from 'react'
import './signin.css';

export default function SignIn() {
  return (
    <div className="outer">
    <div className="inner">
    <form>

    <h3>Log in</h3>

    <div className="form-group mt-3">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group mt-3">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
    </div>

    <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
    </p>

    <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
    <div className="mt-3">
     <p className="mb-0  text-center">
        Don't have an account?{" "}
        <a href="/signup" className="text-primary">Register</a> 
        </p> 
        </div>
   
</form>
</div>
</div>

  )
}
