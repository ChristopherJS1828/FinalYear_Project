import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import React from 'react';
import "./signin.css";
import { useState } from 'react';
import axios from 'axios';


function SignIn() {

  const navigate = useNavigate();
  
  function Cancel(){

    navigate("..");

  }


  function Submit(){
    axios.post("http://localhost:8000/SignUp", {
      "Name": name,
      "Email": email,
      "Password": password
    })
    .then(function (response) {
        console.log("success!")
      })
    .catch(function (error) {
      console.log(error);
    });

    navigate("..");
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    console.log(event.target.id);
    let elementID = event.target.id;

    if(elementID === "Name"){
      setName(event.target.value);
    }else if(elementID === "Email"){
      setEmail(event.target.value);
    }else{
      setPassword(event.target.value);
    }
  };

  return (
   
  <div>
    <h1 className='pageContent'>Create An Account!</h1>
    <div className='container'>
      <label><b>Full Name</b>
      <input className='inputBox' type="text" id="Name" onChange={handleChange}/>
      </label>
      <label><b>Email</b>
      <input className='inputBox' type="text" id="Email" onChange={handleChange}/>
      </label>
      <label><b>Password</b>
      <input className='inputBox' type="text" id="Password" onChange={handleChange}/>
      </label>

      <button className='signupbtn' type="submit" onClick={Submit}>Sign Up</button>
    </div>

    <div className='container'>
      <button className='cancelbtn' onClick={Cancel}>Cancel</button>
      <span className='psw'><a href="./Login"> Already have a account?</a></span>
    </div>
  </div>
  
  );
};
  
export default SignIn;