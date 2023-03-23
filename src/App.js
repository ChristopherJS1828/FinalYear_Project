import { useNavigate } from 'react-router-dom';
import "./App.css";
import logo from './images/website_logo.png';
import info from './images/information.png';
import services from './images/thoughts.png';
import account from './images/account.png';
import aboutus from './images/aboutus-landing.jpg';
import React, { useEffect } from 'react';


const App = () => {

  const navigate = useNavigate();

  function CreateAccount() {
    navigate("/pages/Signin");
  }
  function LogIn() {
    navigate("/pages/Login");
  }

  function AboutUs() {
    navigate("/pages/AboutUsLanding")
  }

  useEffect(() => {
    var date = new Date();
    date = new Date(date).toUTCString();
    date = date.split(' ').slice(0, 5).join(' ');
    var p = document.getElementById("myId");
    p.innerHTML = date;

  }, []);


  return (
    <div className='page-container'>
      <div className='header-landing'>
        <div className='time-header'>
          <p className='time'> Date:&nbsp;</p>
          <p className='time' id="myId"></p>
          <h1 className='logoName'></h1>
        </div>
        <div>
          <button className='button-signup' onClick={CreateAccount}>Sign Up</button>
          <button className='button-login' onClick={LogIn}>Log In</button>
        </div>
      </div>
      <div className='whole-page'>
        <ul>
          <li className='body-content2'>
            <img className='body-image' src={logo}></img>
          </li>
          <li className='body-content'>
            <img className='aboutus' src={aboutus} onClick={AboutUs}></img>
          </li>
        </ul>
        <div className='gap'>
          <p className='quote'>Just one small positive thought in the morning can change your whole day!</p>
        </div>
        <div className='body'>
          <ul>
            <li className='li'>
              <img className='infopic-interactive' src={info} onClick={AboutUs}></img>
              <p className='landing-aboutus-interactive' onClick={AboutUs}>About Us!</p>
              Hey there! Welcome to Meraki! Meraki is a website 
              <br></br>
              that provides support to people who are dealing with 
              <br></br>
              mental health issues. It's a safe space where you can 
              <br></br>
              openly talk about your problems and find the help you need.
            </li>
            <li className='li'>
              <img className='infopic' src={services}></img>
              <p className='landing-aboutus'>Services We Provide!</p>
              First, you can use a diary entry to record how 
              <br></br>
              you're feeling. This is a great way to express 
              <br></br>
              yourself and track your progress over time. 
              <br></br>
              Second, you can take a brief survey that asks about
              <br></br>
              your day and its ups and downs. This can help you
              <br></br>
              identify patterns in your mood and find ways to feel better.
            </li>
            <li className='li'>
              <img className='infopic-interactive' src={account} onClick={CreateAccount}></img>
              <p className='landing-aboutus-interactive' onClick={CreateAccount}>Join Us!</p>
              Take the first step towards a better mental 
              <br></br>
              health journey and let us support you every 
              <br></br>
              step of the way. Join us now!

            </li>
          </ul>

        </div>

      </div>

    </div>

  );
};

export default App;