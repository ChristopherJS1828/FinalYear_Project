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

  const aboutUs = () => {
    navigate("/pages/AboutUs");
  }

  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
      <img src = {logo} onClick={feelingspage}></img>
      {/* <h1 className='logoName'>App Name</h1> */}
      </div>
     
      <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Home Page</a>
          <a href='' onClick={moodhistory}>Mood Log</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
      </div>
      </div> 
      <h2 className='userFeel-q'>This page will offer all the services we provide! </h2>
      <div className='buttons-link'>
      <div className='content-services'>
      <a href= "https://www.youtube.com/music"> 
      <button className='linkBtn' >Listen to Music</button>
      </a>
      </div>
      <div className='content-services'>
      <a href = "https://www.maynoothuniversity.ie/campus-life/student-wellbeing-support/counselling">
      <button className='linkBtn'  >Consult a Professional</button>
      </a>
      </div>
      <div className='content-services'>
      <a href = "https://niteline.ie/">
      <button className='linkBtn'  >College Student Support</button>
      </a>
      </div>
      <div className='content-services'>
      <a href = "https://text50808.ie/how-it-works?gclid=CjwKCAiAu5agBhBzEiwAdiR5tLHc885mrn7vB8xiQ5RVyj_FzLMdimUnTesip4Up29kRSqGY8G0FdxoChrQQAvD_BwE">
      <button className='linkBtn'  >24/7 Hotline Support</button>
      </a>
      </div>
      <div className='content-services'>
      <button className='linkBtn' onClick={aboutUs}>About Us</button>
      </div>
      </div>

    
    </div>
  );
};
  
export default Services;