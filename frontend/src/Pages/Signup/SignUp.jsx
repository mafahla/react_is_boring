import React, { Component } from "react";
import './signup.css';
import axios from "axios";
import { useState } from "react";
// import { useHistory } from "react-router";

export default function SignUp(props) {
    const [first_name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
    //   const history = useHistory()
      const { setActiveUser, setLoggedIn } = props;

      const handleSubmit = async (e) => {
        e.preventDefault();
        const reqBody = {
        data:{
          first_name,
          email,
          password,
        }
        };
        const res = await axios.post(
          "http://localhost:1337/api/user-details",
          reqBody
        );
        if (res.statusText === "OK") {
          setActiveUser(res.data);
          setLoggedIn(true);
        //   history.push('/')
        }
      };

        return (

            <div className="outer">
            <div className="inner">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
            <h3>Register</h3>

            <div className="form-group mt-3">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name"
                onChange={(e) => setName(e.target.value)}
                name="first_name" />
            </div>

            <div className="form-group mt-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}
                name="Email"/>
            </div>

            <div className="form-group mt-3 mb-3">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" 
                onChange={(e) => setPassword(e.target.value)}
                name="Password"/>
            </div>

            <button type="submit" className="btn "><a >Register </a></button>
            <p className="forgot-password text-center">
                Already registered <a href="/signin">Log in?</a>
            </p>
        </form>
        </div>
        </div>

        );
    }
