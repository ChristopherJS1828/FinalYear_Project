import { useNavigate } from 'react-router-dom';
import "./Services.css";
import "./MoodHistory.css";
import logo from '../images/website_logo.png';
import React, { useState, useEffect } from 'react';
import { getUser, getUserId, removeUserSession } from '../Utils/Common';
import axios from 'axios';
import Moment from 'react-moment';



function MoodHistory() {

  const navigate = useNavigate();
  const [diaries, setDiaries] = React.useState([]);
  const [diariesLoaded, setDiariesLoaded] = useState(false);

  const user = getUser()
  const userName = user.name;

  const handleLogout = () => {
    removeUserSession();
    navigate("..");
  }

  const feelingspage = () => {
    navigate("/pages/HomePage");
  }

  const services = () => {
    navigate("/pages/Services");
  }

  const moodEntries = () => {
    navigate("/pages/MoodEntries")
  }
  //retrieving diary entries 
  const retrieveDiary = async () => {
    const response = axios.get('http://localhost:8000/MoodHistory', {
      params: {
        "UserId": getUserId()
      }
    });
    const resp = await response;
    return { success: true, data: resp };
  }

  //use effect which loads the data from the db once the page is loaded
  useEffect(() => {
    (async () => {
      setDiariesLoaded(false);
      let res = await retrieveDiary();

      //if statement which displays all infro
      if (res.success) {
        setDiaries(res.data.data);
        setDiariesLoaded(true);
      }
    })();
  }, []);


  return (
    <div className='page-container'>
      <div className='header'>
        <div className='logoHeader'>
          <img src={logo} onClick={feelingspage}></img>
        </div>
        <h1>{userName}'s Diary Log</h1>
        <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Home Page</a>
          <a href='' onClick={services}>Services</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <div className="wrapper">
        <div className='top-of-page'>
          <h2 className='welcome-message'>Diary Entry Recordings Table
            <button className='entryOption' onClick={moodEntries}>Mood Entries</button>
            <button className='entryOption'>Diary Entries</button>
          </h2>
        </div>
        <table className="table">
          <thead>
            <tr className='rowHeader'>
              <th>Date Of Entry</th>
              <th>Diary Entry</th>
            </tr>
          </thead>
          <tbody>
            {diaries && diaries.map(entry =>
              <tr key={entry._id}>
                < td className='row'>
                  <Moment format="DD-MM-YYYY">
                    {entry.Date}
                  </Moment>
                </td>
                < td className='row'>{entry.DiaryEntry}</td>
              </tr>

            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoodHistory;