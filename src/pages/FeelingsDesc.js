import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import "./FeelingsDesc.css";
import logo from '../images/mood_diary_logo.png';
import React, { useState, useEffect } from 'react';
import { getUser, removeUserSession } from '../Utils/Common';

  
function FeelingsDesc() {
  
  const navigate = useNavigate();
  
  const handleLogout = () => {  
    removeUserSession();  
    // props.history.push('/pages/Login');
    navigate("/pages/Login");
  }

  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
      <img src = {logo}></img>
      <h1 className='logoName'>App Name</h1>
      </div>
      <h1>Tell us more about your day!</h1>
      <div>
        <button className='button-2' onClick={handleLogout}>Log Out</button>
        </div>
      </div> 

      <div className="form-outline w-50 mb-4">
    <textarea class="form-control" id="textAreaExample1" rows="8" placeholder='Tell us a little more about today :) What made you happy today? What upset you today?'></textarea>
    <label className="form-label" for="textAreaExample"></label>
    </div>
    
    </div>
  );
};
  
export default FeelingsDesc;