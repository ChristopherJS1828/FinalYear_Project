import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import SignIn from './pages/Signin';
import LogIn from './pages/Login';
import "./App.css";
import logo from './images/website_logo.png';
import info from './images/information.png';
import services from './images/thoughts.png';
import account from './images/account.png';
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
  
const App = () => {
  
  const navigate = useNavigate();
  
  function Test(){
    navigate("/pages/Signin");
  }
  function LogIn(){
    navigate("/pages/Login");
  }  

  useEffect(() => {
  var date = new Date(); 
  date = new Date(date).toUTCString();
  date = date.split(' ').slice(0, 5).join(' ');
  var p = document.getElementById("myId"); 
  p.innerHTML = date;

  }, []);

  
  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
      {/* <img src = {logo}></img> */}
      <p className='time'> Date:&nbsp;</p>
      <p className='time' id = "myId"></p>
      <h1 className='logoName'></h1>
      </div>
      <div>
      <button className='button-signup' onClick={Test}>Sign Up</button>
      <button className='button-login' onClick={LogIn}>Log In</button>
      </div>
    </div>
    <div className='below-header'>
      <img className='body-image' src = {logo}></img>
    </div>
    <div className='body'>
      <ul>
        <li>
        <img className='infopic' src = {info}></img>
          <p>About Us!</p>
          Welcome to Meraki! Meraki is a website which
          <br></br>
          offers support to individuals dealing with mental
          <br></br>
          health issues. This is a place where you are able
          <br></br>
          to talk about your issues and seek the help you need!
        </li>
        <li>
        <img className='infopic' src = {services}></img>
        <p>Services!</p>
          Two features  await for you once you create an account. 
          <br></br>
          You can record how you feel through a diary entry or
          <br></br> 
          take a brief survey which asks about your ups and downs in 
          <br></br>
          that moment.
        </li>
        <li>
        <img className='infopic' src = {account}></img>
          <p>Join Us!</p>
          Create an account with us and explore
          <br></br>
          the features we offer! 
          <br></br>
          There is hope, even when your
          <br></br>
          brain tells you there isn't!

        </li>
      </ul>
      
    </div>
    
    </div>
    
  );
};
  
export default App;