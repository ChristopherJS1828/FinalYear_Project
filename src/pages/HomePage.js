import { useNavigate } from 'react-router-dom';
import React from 'react';
import "./HomePage.css";
import logo from '../images/website_logo.png';
import moodentry from '../images/mood-monitoring.png'
import diaryentry from '../images/diary-entry.png'
import { getUser, removeUserSession } from '../Utils/Common';


function HomePage() {
  const user = getUser(); //retrives user
  const userName = user ? user.name : ""; //retrieves user name to be used in header
 
  // logs user out, removes token
  const handleLogout = () => {  
    removeUserSession();  
    navigate("..");

  }

  //navigates to services pages
  const services = () => {
    navigate("/pages/Services");
  }

  //navigates to mood history page
  const moodhistory = () => {
    navigate("/pages/MoodHistory");
  }

    //sets useNavigate to use to navigate to other pages
    const navigate = useNavigate();
    
    //navigates to record diary entry
    const diaryEntry = () => {
      navigate("../pages/FeelingsDesc")
    }
    
    //navigates to record a mood entry
    const moodEntry = () => {
      navigate("../pages/UserQuestions")
    }
  
    return (
      //Website Header and content
      <div className="page-container">
        <div className='header'>
        <div className='logoHeader'>
        <img src = {logo}></img>
        </div>
        <h1>Welcome {userName}!</h1>
        <div className='topnav'>
          
          <a href='' onClick={moodhistory}>Mood History</a>
          <a href='' onClick={services}>Services</a>
          <button className='logOutbtn' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <h2 className='content-q'>Which of the following two features would you like to use?</h2>
      <table className='feelings'>
		<tr>
			<td>
      <div className="content">
				<div>
        <h2> Record A Diary Entry About Your Day!</h2>
        <img className='diary-entry' onClick={diaryEntry} src = {diaryentry}></img>
				</div>
				<div>
					<button onClick={diaryEntry} className='record-diary'>Record Diary Entry</button>
				</div>
         </div>
			</td>
      <td>
      <div className="content">
				<div>
        <h2> Record A Mood Entry About Your Day!</h2>
        <img className='mood-entry' onClick={moodEntry} src = {moodentry}></img>
				</div>
				<div>
					<button onClick={moodEntry} className='record-mood'>Record Mood Entry</button>
				</div>
         </div>
			</td>
		</tr>
	</table>
    </div>
    );
  };
    
  export default HomePage;