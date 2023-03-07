import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
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
  const [moods, setMoods] = React.useState([]);
  const [moodsLoaded, setMoodsLoaded] = useState(false);
  
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
//retrieving diary entries 
  const retrieveDiary = async () => {
    const response = axios.get('http://localhost:8000/MoodHistory', {params: {
      "UserId": getUserId()
    }});
    const resp = await response;
    return { success: true, data: resp};
    // setDiaries(resp.data);
  }

  const retrieveMoodEntry = async () => {
    const response = axios.get('http://localhost:8000/MoodEntries', {params: {
      "UserId": getUserId()
    }});
    const resp = await response;
    return { success: true, data: resp};
  }
//use effect which loads the data from the db once the page is loaded
  useEffect(() => {
    (async () => {
      setMoodsLoaded(false);
      setDiariesLoaded(false);
      let res1 = await retrieveMoodEntry();
      let res = await retrieveDiary();
      //do a seperate if
      if (res.success && res1.success) {
        setMoods(res1.data.data);
        setDiaries(res.data.data);
        setDiariesLoaded(true);
        setMoodsLoaded(true);
      }
    })();
  }, []);

  return (
    <div>
      <div className='header'>
        <div className='logoHeader'>
      <img src = {logo}></img>
      {/* <h1 className='logoName'>App Name</h1> */}
      </div>
     <h1>{userName}'s Mood Log</h1>
      <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Home Page</a>
          <a href='' onClick={services}>Services</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
      </div>
      </div> 
      <div className="wrapper">
      <h2 className='userFeel-q'>Diary Entry Recordings Table</h2>
            <table className="table">
                
                    <tr className='rowHeader'>                     
                        <th>Date Of Entry</th>
                        <th>Diary Entry</th>                       
                    </tr>
                
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
            <div className="wrapper">
            <h2 className='userFeel-q'>Mood Entry Recordings Table</h2>
            <table className="table">
                    <tr>
                        <th>Date Of Entry</th>
                        <th>Current Mood</th>
                        <th>Activities</th>
                        <th>Positives</th>
                        <th>Day</th>
                        <th>Negatives</th>
                        <th>Day Talk</th>
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
  
export default MoodHistory;