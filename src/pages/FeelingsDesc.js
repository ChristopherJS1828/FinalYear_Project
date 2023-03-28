import { useNavigate } from 'react-router-dom';
import "./FeelingsDesc.css";
import logo from '../images/website_logo.png';
import React, { useState } from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import axios from 'axios';



function FeelingsDesc() {

  //sets useNavigate to use to navigate to other pages
  const navigate = useNavigate();

  //function that saves diary entry
  function SaveDiaryEntry() {
    const user = getUser();//retrieves logged in user
    const userId = user.userId;//retrives users userId

    //posts diary entry to the database
    axios.post("http://localhost:8000/FeelingsDesc", {
      "DiaryEntry": diaryentry, //posts users diary entry
      "UserId": userId, //posts users userID
      "Date": new Date() //posts current date of submission
    })
      //if submits successfully, following will happen
      .then(function (response) {
        //pop up message alerting user about succesful submission
        alert("You have succesfully recorded a diary entry! You will now be redirected back to the Home Page, thank you!");
        navigate("/pages/HomePage");
      })
      //if submission is not succesful
      .catch(function (error) {
        console.log(error);
      });
  }
  const [diaryentry, setEntry] = useState('');
  //keeps track of what is inputted within text box for diary entry
  const handleChange = event => {
    console.log(event.target.id);
    let elementID = event.target.id;

    //stores diary entry text within setEntry which gets
    //stored within diaryentry const used in post function
    if (elementID === "DiaryEntry") {
      setEntry(event.target.value);
    }
  };

  //logs user out, navigates to landing page
  const handleLogout = () => {
    removeUserSession();
    navigate("..");
  }
  //navigates to homepage
  const feelingspage = () => {
    navigate("/pages/HomePage");
  }
  //navigates to mood history page
  const viewmoods = () => {
    navigate("/pages/MoodHistory");
  }
  //navigates to services page
  const services = () => {
    navigate("/pages/Services");
  }

  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
          <img src={logo}></img>
        </div>

        <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Record Mood</a>
          <a href='' onClick={viewmoods}>Mood Log</a>
          <a href='' onClick={services}>Services</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
        </div>
      </div>


      <h2 className='diaryentry-header'>Feel free to tell us all about your day </h2>
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