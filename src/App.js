import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import SignIn from './pages/Signin';
import LogIn from './pages/Login';
import "./App.css";
import logo from './images/website_logo.png';
import React, { useState, useEffect } from 'react';
  
const App = () => {
  
  const navigate = useNavigate();
  
  function Test(){
    navigate("/pages/Signin");
  }
  function LogIn(){
    navigate("/pages/Login");
  }

  
  
  
  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
      <img src = {logo}></img>
      <h1 className='logoName'></h1>
      </div>
      <h1>Welcome!</h1>
      <div>
      <button className='button-1' onClick={Test}>Sign Up</button>
      <button className='button-2' onClick={LogIn}>Log In</button>
      </div>
    </div>
    <div>
      <h1>Welcome to Meraki App, a place where you can blow steam!</h1>
    </div>
    
    </div>
    
  );
};
  
export default App;