import { useNavigate } from 'react-router-dom';
import "./MoodEntries.css";
import logo from '../images/website_logo.png';
import React, { useState, useEffect } from 'react';
import { getUser, getUserId, removeUserSession } from '../Utils/Common';
import axios from 'axios';
import Moment from 'react-moment';

function MoodEntries() {

  const navigate = useNavigate();//used to navigate through pages
  const [moods, setMoods] = React.useState([]);//const to display all mood entries
  const [moodsLoaded, setMoodsLoaded] = useState(false); //sets const to false which changes later to true to display diary entries

  const user = getUser()//retrieves user
  const userName = user.name;//retrievs user name

  //logs user out and removes token
  const handleLogout = () => {
    removeUserSession();
    navigate("..");
  }

  //navigates to home page
  const feelingspage = () => {
    navigate("/pages/HomePage");
  }

  //navigates to services page
  const services = () => {
    navigate("/pages/Services");
  }

  //navigates to diary entry page
  const diaryEntries = () => {
    navigate("/pages/MoodHistory");
  }

  //retrieves mood entries matching userId
  const retrieveMoodEntry = async () => {
    const response = axios.get('http://localhost:8000/MoodEntries', {
      params: {
        "UserId": getUserId()
      }
    });
    const resp = await response; //stores mood entries
    return { success: true, data: resp };
  }
  //use effect which loads the data from the db once the page is loaded
  useEffect(() => {
    (async () => {
      setMoodsLoaded(false);
      let res1 = await retrieveMoodEntry();

      //if statement which displays all information
      if (res1.success) {
        setMoods(res1.data.data);
        setMoodsLoaded(true);
      }
    })();
  }, []);

  return (
    <div className='page-container'>
      <div className='header'>
        <div className='logoHeader'>
          <img src={logo} onClick={feelingspage}></img>
        </div>
        <h1>{userName}'s Mood Log</h1>
        <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Home Page</a>
          <a href='' onClick={services}>Services</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <div className="wrapper">
        <div className='top-of-page'>
          <h2 className='welcome-message'>Mood Entry Recordings Table
            <button className='entryOption'>Mood Entries</button>
            <button className='entryOption' onClick={diaryEntries}>Diary Entries</button>
          </h2>
        </div>
      </div>
      <div className="wrapper">
        <table className="table">
          <tr>
            <th>Date Of Entry</th>
            <th>Current Mood</th>
            <th>What I Did Today</th>
            <th>Positive Contribution
              <br></br>To My Mood
            </th>
            <th>About My Day
              <br></br>Regarding Positives</th>
            <th>Negative Contribution
              <br></br>To My Mood</th>
            <th>About My Day
              <br></br>Regarding Negatives</th>
          </tr>
          <tbody>
            {moods && moods.map(mood =>
              <tr key={mood._id}>
                < td>
                  <Moment format="DD-MM-YYYY">
                    {mood[6]}
                  </Moment>
                </td>
                < td>{mood[0]}</td>
                < td>{mood[1]}</td>
                < td>{mood[2]}</td>
                < td>{mood[3]}</td>
                < td>{mood[4]}</td>
                < td>{mood[5]}</td>
              </tr>


            )}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default MoodEntries;