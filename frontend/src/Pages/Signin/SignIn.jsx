import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './signin.css';
import Loader from '../../Components/loader/Loader';
import Validation from '../../Components/validation/Validation'



export default function SignIn(props) {

  const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [errorMessage, setErrorMessage] = useState("");
      // const history = useHistory();
      const { setActiveUser, setLoggedIn } = props;
      const [errors, setErrors] = useState({});

      const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(Validation(email, password))
        const res = await axios.get(
          `http://localhost:1337/api/users-details?email=${email}&password=${password}`
        );
        if (res.data.length === 0) {
          setErrorMessage("Incorrect Email or password");
        } else {
          setActiveUser(res.data);
          setLoggedIn(true);
          // history.push("/");
        }
      };

  return (
    <div className="outer">
    <div className="inner">
    <form action="" onSubmit={(e) => handleSubmit(e)}>

    <h3>Log in</h3>

    <div className="form-group mt-3">
        <label>Email</label>
        <input type="email" 
        className="form-control" 
        placeholder="Enter email" 
        onChange={(e) => setEmail(e.target.value)}
        name="Email"/>
        {errors.email && <p className="error">{errors.email}</p>}
    </div>

    <div className="form-group mt-3">
        <label>Password</label>
        <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        onChange={(e) => setPassword(e.target.value)}
        name="Password" />
        {errors.password && <p className="error">{errors.password}</p>}
    </div>

    <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
    </p>

    <button  type="submit" className="btn ">
    <a href="/dash"> Login </a>
    </button>
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