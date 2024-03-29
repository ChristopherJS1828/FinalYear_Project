import { useNavigate } from 'react-router-dom';
import "./AboutUs.css";
import logo from '../images/website_logo.png';
import aboutus from '../images/aboutus-image.jpg'
import React from 'react';
import { removeUserSession } from '../Utils/Common';


function AboutUs() {
  //sets useNavigate to use to navigate to other pages
  const navigate = useNavigate();

  // logs user out, removes token
  const handleLogout = () => {
    removeUserSession();
    navigate("..");
  }

  //navigates to home page
  const feelingspage = () => {
    navigate("/pages/HomePage");
  }

  //navigates to mood history page
  const moodhistory = () => {
    navigate("/pages/MoodHistory");
  }

  //navigates to services page
  const services = () => {
    navigate("/pages/Services");
  }

  return (
    <div className='page-container'>
      <div className='header'>
        <div className='logoHeader'>
          <img src={logo} onClick={feelingspage}></img>
        </div>
        <h1>About Us!</h1>

        <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Record Mood</a>
          <a href='' onClick={services}>Services</a>
          <a href='' onClick={moodhistory}>Mood Log</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <ul className='ul'>
        <li className='aboutus-body'>
          <h2 className='aboutus-header'>Meraki Mindfullness!</h2>
          <p className='meraki-meaning1'>All About Meraki!
            <br></br>
            Welcome to Meraki, a safe supportive space for anyone looking
            for mental support and resources. We understand that taking care
            of your mental health can be challenging, and that's why are here to
            help. Our aim is to offer support to anyone who needs it. We believe
            in the power of connection, and we know that sharing our experiences
            and stories can be healing.
            <br></br>
            <br></br>
            Meraki is a greek word that means putting a piece of yourself into everything you do,
            and doing so with soul, creativity, and love. It's a word that speaks to the importance
            of mindfulness, intentions, and passion in all that we do, including taking care of our
            mental health. comfortable discussing their problems whilst helping them build courage

            <p className='meraki-meaning1'>
              What We Offer!
              <br></br>
              At Meraki, we offer two unique features to help you take control of your mental health and wellbeing. The
              first feature is our Diary Entry Section, which provides a safe and confidential space for you to reflect
              on your thoughts and feelings. Writing down your emotions can be a powerful way to increase self-awareness,
              reduce stress, and manage difficult emotions. Our Diary Entry Section is designed to be user-friendly and
              accessible, and we believe it can be an effective tool for anyone looking to improve their mental health.
              <br></br>
              <br></br>
              The second feature is our Mood Survey, which allows you to track your emotional wellbeing. Our Mood Survey
              is a quick and easy way to monitor your mood, identify patterns, and gain insights into your mental health.
              We believe that tracking your emotions can be an important step towards better self-awareness and mental
              health management.
            </p>
          </p>
        </li>
        <li className='aboutus-bodyright'>
          <div>
            <img className='aboutus-image' src={aboutus}></img>
          </div>
          <p className='medi-meaning'>Experiencing Technical Issues
            <br></br>
            If you're having trouble with our website, please don't hesitate to get in touch with us. You can
            contact us via email at <b><u>christopher.jacksonsuia.2020@mumail.ie</u></b>, and we'll get back to you as soon as possible.
            Please include a detailed description of the issue you're experiencing, as well as any relevant screenshots or
            error messages. This will help us to better understand the problem and provide a faster resolution.
            <br></br>
            <br></br>
            We're committed to providing you with the best possible online experience, and we appreciate your patience and
            understanding as we work to resolve any technical issues you may encounter. Thank you for choosing our website,
            and we look forward to hearing from you soon!
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;