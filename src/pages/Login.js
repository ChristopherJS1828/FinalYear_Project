import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import React from 'react';
import "./Login.css";
import { useState } from 'react';
import axios from 'axios';
  
function LogIn() {

  const navigate = useNavigate();
  
  function Cancel(){

    navigate("..");

  }

  function LogIn(){
    axios.get("http://localhost:8000/User", {
      "Email": email,
      "Password": password
    })
    .then(function (response) {
        console.log("success!")
      })
    .catch(function (error) {
      console.log(error);
    });

    navigate("/pages/HomePage");
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    console.log(event.target.id);
    let elementID = event.target.id;
  };


  return (
    
    <div>
        <h1 className='pageHeader'>Welcome Back!</h1>
    <div className='container'>
      <label><b>Email</b>
      <input className="inputBox" type="text" id="Email" onChange={handleChange}/>
      </label>
      <label><b>Password</b>
      <input className="inputBox" type="text" id="Password" onChange={handleChange}/>
      </label>

      <button className='loginbtn' type="submit" onClick={LogIn}>Log In</button>
    </div>

    <div className='container'>
      <button className="cancelbtn" onClick={Cancel}>Cancel</button>
      <span className="psw"><a href="./Signin">Don't have an account?</a></span>
    </div>
    </div>
  
  );
};
  
export default LogIn;