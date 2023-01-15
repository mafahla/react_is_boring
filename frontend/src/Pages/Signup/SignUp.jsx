import React, { Component } from "react";
import './signup.css';

export default class SignUp extends Component {

    
    render() {
        return (

            <div className="outer">
            <div className="inner">
            <form>
            <h3>Register</h3>

            <div className="form-group mt-3">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group mt-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group mt-3 mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn ">Register</button>
            <p className="forgot-password text-center">
                Already registered <a href="/signin">Log in?</a>
            </p>
        </form>
        </div>
        </div>

        );
    }
}