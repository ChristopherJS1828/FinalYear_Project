import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import "./AboutUs.css";
import logo from '../images/website_logo.png';
import React, { useState, useEffect } from 'react';
import { getUser, removeUserSession } from '../Utils/Common';

  
function AboutUs() {
  
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

  const services = () => {
    navigate("/pages/Services");
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
          <a href='' onClick={services}>Services</a>
          <a href='' onClick={moodhistory}>Mood Log</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
      </div>
      </div> 
      <h2 className='userFeel-q'>This page is the about us page! </h2>
    </div>
  );
};
  
export default AboutUs;