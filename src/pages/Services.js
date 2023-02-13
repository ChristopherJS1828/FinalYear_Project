import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import "./Services.css";
import logo from '../images/website_logo.png';
import React, { useState, useEffect } from 'react';
import { getUser, removeUserSession } from '../Utils/Common';

  
function Services() {
  
  const navigate = useNavigate();
  

  const handleLogout = () => {  
    removeUserSession();  
    navigate("..");
  }

  const feelingspage = () => {
    navigate("/pages/HomePage");
  }

  const moodhistory = () => {
    navigate("/pages/MoodHistory");
  }

  const diaryEntry = () => {
    navigate("/pages/FeelingsDesc");
  }

  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
      <img src = {logo}></img>
      {/* <h1 className='logoName'>App Name</h1> */}
      </div>
     
      <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Record Mood</a>
          <a href='' onClick={moodhistory}>Mood Log</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
      </div>
      </div> 
      <h2 className='userFeel-q'>This page will offer all the services we provide! </h2>
      <div className='buttons-link'>
      <div className='content'>
      <button className='linkBtn' onClick={diaryEntry} >Record a Diary Entry</button>
      </div>
      <div className='content'>
      <button className='linkBtn' >Listen to Music</button>
      </div>
      <div className='content'>
      <button className='linkBtn' >Seek Support</button>
      </div>
      <div className='content'>
      <button className='linkBtn' >About Us</button>
      </div>
      </div>

    
    </div>
  );
};
  
export default Services;