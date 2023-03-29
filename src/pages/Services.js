import { useNavigate } from 'react-router-dom';
import "./Services.css";
import logo from '../images/website_logo.png';
import React from 'react';
import { removeUserSession } from '../Utils/Common';


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

  const aboutUs = () => {
    navigate("/pages/AboutUs");
  }

  function openTab() {
    window.open("https://www.youtube.com/music", "_blank");
  }

  function openTab1() {
    window.open("https://jigsaw.ie/services-in-your-area/", "_blank");
  }

  function openTab2() {
    window.open("https://www.maynoothuniversity.ie/campus-life/student-wellbeing-support/counselling", "_blank");
  }

  function openTab3() {
    window.open("https://text50808.ie/how-it-works?gclid=CjwKCAiAu5agBhBzEiwAdiR5tLHc885mrn7vB8xiQ5RVyj_FzLMdimUnTesip4Up29kRSqGY8G0FdxoChrQQAvD_BwE", "_blank");
  }

  return (
    <div className='page-container'>
      <div className='header'>
        <div className='logoHeader'>
          <img src={logo} onClick={feelingspage}></img>
        </div>

        <h1>Services We Provide!</h1>

        <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Home Page</a>
          <a href='' onClick={moodhistory}>Mood History</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <div className='white-gap'></div>
      <div className='buttons-link'>
        <div className='content-services'>
          <button className='linkBtn' onClick={openTab} >Listen to Music</button>
        </div>
        <div className='content-services'>
          <button className='linkBtn' onClick={openTab1} >Consult a Professional</button>
        </div>
        <div className='content-services'>
          <button className='linkBtn' onClick={openTab2} >College Student Support</button>
        </div>
        <div className='content-services'>
          <button className='linkBtn' onClick={openTab3} >24/7 Hotline Support</button>
        </div>
        <div className='content-services'>
          <button className='linkBtn' onClick={aboutUs}>About Us</button>
        </div>
      </div>


    </div>
  );
};

export default Services;