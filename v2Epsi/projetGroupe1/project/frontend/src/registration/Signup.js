    import React, { useState } from 'react';
    import { Link, useNavigate  } from 'react-router-dom';
    import validSignup from './SignupValidation';
    import '../styles/Registration.css';
    import axios from 'axios';

    function Signup() {
        const [errors, setErrors] = useState({});
        const navigate = useNavigate ();
        const [values, setValues] = useState({
            email: '',
            nom: '',
            prenom : '',
            password: '',
            passwordConfirm: ''
        });

        const handleInput = (event) => {   
            setValues({...values, [event.target.name]: event.target.value});
        }
        
        const handleSubmit = (event) => {
            event.preventDefault();
            
            setErrors(validSignup(values));
            if(errors.email === undefined && errors.nom === undefined && errors.prenom === undefined &&  errors.password === undefined && errors.passwordConfirm === undefined) {
                axios.post('http://localhost:8080/signup', values)
                .then(data => {
                    if(data.data.message) {
                        setErrors({email: data.data.message});
                    } else {
                        navigate('/login');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }
        };

        return (
            <form onSubmit={handleSubmit} className="formLog">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder="Email" onChange={handleInput} />
                <span className="error">{errors.email}</span>
            </div>
            <div className="form-group">
                <label htmlFor="nom">Last Name</label>
                <input name="nom" type="text" placeholder="Last Name" onChange={handleInput} />
                <span className="error">{errors.nom}</span>
            </div>
            <div className="form-group">
                <label htmlFor="prenom">Name</label>
                <input name="prenom" type="text" placeholder="Name" onChange={handleInput} />
                <span className="error">{errors.prenom}</span>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Password" onChange={handleInput} />
                <span className="error">{errors.password}</span>
            </div>
            <div className="form-group">
                <label htmlFor="passwordConfirm"> Confirm Password</label>
                <input name="passwordConfirm" type="password" placeholder="Confirm password" onChange={handleInput} />
                <span className="error">{errors.passwordConfirm}</span>
            </div>
            <button className="submit-btn" type="submit">Sign up</button>
            <Link to="/" >Sign in</Link>
        </form>
        );
    }

    export default Signup;
