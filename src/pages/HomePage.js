import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import React from 'react';
import "./HomePage.css";
import logo from '../images/website_logo.png';
import moodentry from '../images/mood-monitoring.png'
import diaryentry from '../images/diary-entry.png'
import { getUser, removeUserSession } from '../Utils/Common';


function HomePage(props) {
  const user = getUser();
  const userName = user ? user.name : "";
 
  // handle click event of logout button
  const handleLogout = () => {  
    removeUserSession();  
    navigate("..");

  }

  const submit = () => {
    // let inputValue = document.getElementById("UsersMood").value;
    // localStorage.setItem("currentmood",inputValue);
    navigate("/pages/UserQuestions");
  }
  const feelingspage = () => {
    navigate("/pages/HomePage");
  }

  const services = () => {
    navigate("/pages/Services");
  }

  const moodhistory = () => {
    navigate("/pages/MoodHistory");
  }
  
    // const navigate = useNavigate();
    
    // function Test(){
    //   navigate("/pages/Signin");
    // }
    // function LogIn(){
    //   navigate("/pages/Login");
    // }

    const navigate = useNavigate();

    const diaryEntry = () => {
      navigate("../pages/FeelingsDesc")
    }

    const moodEntry = () => {
      navigate("../pages/UserQuestions")
    }
  
    return (
      <div>
        <div className='header'>
        <div className='logoHeader'>
        <img src = {logo}></img>
        {/* <h1>Welcome Back {userName}!</h1> */}
        </div>
        <h1>Welcome Back {userName}!</h1>
        <div className='topnav'>
          
          <a href='' onClick={moodhistory}>Mood Log</a>
          <a href='' onClick={services}>Services</a>
          <button className='logOutbtn' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <h2 className='content-q'>How are you feeling today?</h2>
      
      <table className='feelings'>
		<tr>
			<td>
      <div className="content">
				<div>
        <h2> Record Your Diary Entry For Today!</h2>
        <img className='diary-entry' onClick={diaryEntry} src = {diaryentry}></img>
				</div>
				<div>
					<button onClick={diaryEntry} className='button-words1'>Record Diary Entry</button>
				</div>
         </div>
			</td>
      <td>
      <div className="content">
				<div>
        <h2> Record Your Mood Entry For Today!</h2>
        <img className='mood-entry' onClick={moodEntry} src = {moodentry}></img>
				</div>
				<div>
					<button onClick={moodEntry} className='button-words2'>Record Mood Entry</button>
				</div>
         </div>
			</td>
		</tr>
	</table>

  {/* <div className='feelings'>


      <div className='content'>
      <div>
        <button className='submit' onClick={submit}>submit!</button>
      </div>
      </div>

      </div> */}
    </div>
    );
  };
    
  export default HomePage;