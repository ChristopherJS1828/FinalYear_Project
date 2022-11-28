import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import "./FeelingsDesc.css";
import logo from '../images/mood_diary_logo.png';
import React, { useState, useEffect } from 'react';
import { getUser, getUserId, removeUserSession } from '../Utils/Common';
import axios from 'axios';
import { get } from 'jquery';


function FeelingsDesc() {

  const navigate = useNavigate();

  // console.log(localStorage.getItem("currentmood"));

  function SaveDiaryEntry(){
    const user = JSON.parse(sessionStorage.getItem('user'));
    const userId = user.userId;

    axios.post("http://localhost:8000/FeelingsDesc", {
      "DiaryEntry": diaryentry,
      "UserId": userId
    })
    .then(function (response) {
        console.log("success!")
      })
    .catch(function (error) {
      console.log(error);
    });

    // navigate("/pages/HomePage");
  }
  const [diaryentry, setEntry] = useState('');

  const handleChange = event => {
    console.log(event.target.id);
    let elementID = event.target.id;

    if(elementID === "DiaryEntry"){
      setEntry(event.target.value);
    }
  };

  const handleLogout = () => {
    removeUserSession();
    navigate("..");
  }

  const feelingspage = () => {
    navigate("/pages/HomePage");
  }

  const viewmoods = () => {
    navigate("/pages/MoodHistory");
  }

  const services = () => {
    navigate("/pages/Services");
  }

  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
          <img src={logo}></img>
          <h1 className='logoName'>App Name</h1>
        </div>

        <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Record Mood</a>
          <a href='' onClick={viewmoods}>Mood Log</a>
          <a href='' onClick={services}>Services</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      
        <h2 className='userFeel-q'>Feel free to tell us all about your day </h2>
        <div>
          <textarea className="form-control" id="DiaryEntry" placeholder="Tell us a little more about today :) What made you happy today? What upset you today?" 
          maxLength="3000" rows="10" cols="55" onChange={handleChange}></textarea> 
        </div>
        <div>
          <button className='saveDiaryEntry' onClick={SaveDiaryEntry}>submit!</button>
        </div>
      </div>
  );
};

export default FeelingsDesc;