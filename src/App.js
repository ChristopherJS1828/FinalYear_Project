import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import SignIn from './pages/Signin';
import LogIn from './pages/Login';
import React from 'react';
import "./App.css";
import logo from './images/mood_diary_logo.png'
  
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
      <h1 className='logoName'>App Name</h1>
      </div>
      <h1>Welcome!</h1>
      <div>
      <button className='button-1' onClick={Test}>Sign Up</button>
      <button className='button-2' onClick={LogIn}>Log In</button>
      </div>
    </div>
    </div>
  );
};
  
export default App;