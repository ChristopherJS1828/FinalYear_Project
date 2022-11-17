import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import "./FeelingsDesc.css";
import logo from '../images/mood_diary_logo.png';
import React, { useState, useEffect } from 'react';
import { getUser, removeUserSession } from '../Utils/Common';

  
function FeelingsDesc() {
  
  const navigate = useNavigate();
  
  console.log(localStorage.getItem("currentmood"));

  const handleLogout = () => {  
    removeUserSession();  
    // props.history.push('/pages/Login');
    navigate("..");
  }

  const feelingspage = () => {
    navigate("/pages/HomePage");
  }

  const viewmoods = () => {
    navigate("/pages/Login");
  }

  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
      <img src = {logo}></img>
      <h1 className='logoName'>App Name</h1>
      </div>
     
      <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Record Mood</a>
          <a href='' onClick={viewmoods}>View Mood History</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
      </div>
      </div> 
      <h2 className='userFeel-q'>Feel free to tell us all about your day </h2>

      <div className="form-outline w-50 mb-4">
    <textarea class="form-control" id="textAreaExample1" rows="8" placeholder='Tell us a little more about today :) What made you happy today? What upset you today?'></textarea>
    <label className="form-label" for="textAreaExample"></label>
    </div>
    
    </div>
  );
};
  
export default FeelingsDesc;