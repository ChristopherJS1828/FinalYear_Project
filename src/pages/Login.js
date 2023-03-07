import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import React from 'react';
import "./Login.css";
import { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
  

  function LogIn(props) {
    const email = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function Cancel(){
          navigate("..");     
        }

        function showPassword() {
          var x = document.getElementById("myInput");
          if (x.type === "password") {
            x.type = "text";
          } else {
            x.type = "password";
          }
        }

    // handle button click of login form
    const handleLogin = () => {
      setError(null);
    setLoading(true);
    axios.post('http://localhost:8000/Login', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.existingUser);
      navigate("/pages/HomePage");
    }).catch(error => {
      setLoading(false);
      // if (error.response.status === 401) setError(error.response.data.message);
      if (error.response.status === 401) alert("One or both fields do not match the credentials of a existing account, please try again!");
      else setError("Something went wrong. Please try again later.");
    });
    }

  return (
    
    <div>
        <h1 className='pageHeader'>Welcome Back!</h1>
    <div className='container'>
      <label><b>Email</b>
      <input className="inputBox" type="text" {...email}/>
      </label>
      <label><b>Password</b>
      <input className="inputBox" type="password" id='myInput' {...password}/>
      </label>
      <input type="checkbox" onClick={showPassword}/>Show Password


      <button className='loginbtn' type="submit" onClick={handleLogin}>Log In</button>
    </div>

    <div className='container'>
      <button className="cancelbtn" onClick={Cancel}>Cancel</button>
      <span className="psw"><a href="./Signin">Don't have an account?</a></span>
    </div>
    </div>
  
  );
};
  
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default LogIn;