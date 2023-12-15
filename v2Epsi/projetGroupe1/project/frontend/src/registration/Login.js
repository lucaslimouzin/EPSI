import React, { useState } from "react";
import axios from 'axios';
import validation from "./LoginValidation.js"
import "../styles/Registration.css"
import {Link,useNavigate } from "react-router-dom"


function Login(){
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate ();
    const handleInput = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === undefined &&  errors.password === undefined) {
            axios.post('http://localhost:8080/login', values)
            .then(data => {
                if(data.data === "Success") {
                    navigate('/home');
                }else if(data.data.message === "Wrong email/password combination!") {
                    // add error message
                    setErrors({email: data.data.message});
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    };

    return(
        <form onSubmit={handleSubmit} className="formLog">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder="Email" onChange={handleInput} required />
                <span className="error">{errors.email}</span>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Password" onChange={handleInput} required/>
                <span className="error">{errors.password}</span>
            </div>
            <button type="submit" className="submit-btn">Login</button>
        
            <Link to="/signup">Don&apos;t have an account? Sign up</Link>
        </form>
    )
}
export default Login