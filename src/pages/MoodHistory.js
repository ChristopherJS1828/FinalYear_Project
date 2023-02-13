import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import "./Services.css";
import logo from '../images/website_logo.png';
import React, { useState, useEffect } from 'react';
import { getUser, getUserId, removeUserSession } from '../Utils/Common';
import axios from 'axios';
import Moment from 'react-moment';


  
function MoodHistory() {
  
  const navigate = useNavigate();
  const [diaries, setDiaries] = React.useState([]);
  const [diariesLoaded, setDiariesLoaded] = useState(false);
  // const [moods, setMoods] = React.useState([]);
  // const [moodsLoaded, setMoodsLoaded] = useState(false);
  

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

  // const retrieveMoodEntry = async () => {
  //   const response = axios.get('http://localhost:8000/MoodHistory', {params: {
  //     "UserId": getUserId()
  //   }});
  //   const resp = await response;
  //   return { success: true, data: resp};
  // }
//use effect which loads the data from the db once the page is loaded
  useEffect(() => {
    (async () => {
      // setMoodsLoaded(false);
      setDiariesLoaded(false);
      // let res1 = await retrieveMoodEntry();
      let res = await retrieveDiary();
      if (res.success) {
        // setMoods(res.data.data);
        setDiaries(res.data.data);
        setDiariesLoaded(true);
        // setMoodsLoaded(true);
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
     
      <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Record Mood</a>
          <a href='' onClick={services}>Services</a>
          <button className='logOutbtn1' onClick={handleLogout}>Log Out</button>
      </div>
      </div> 
      <h2 className='userFeel-q'>This is where the users moods will be shown</h2>
      <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Diary Entry</th>
                    </tr>
                </thead>
                <tbody>
                    {diaries && diaries.map(entry =>
                        <tr key={entry._id}>
                          < td>
                            <Moment format="DD-MM-YYYY">
                              {entry.Date}
                            </Moment>
                          </td>
                          < td>{entry.DiaryEntry}</td>
                        </tr>
                
                    )}
                     {/* {moods && moods.map(entry =>
                        <tr key={entry._id}>
                          < td>
                            <Moment format="DD-MM-YYYY">
                              {entry.Date}
                            </Moment>
                          </td>
                          < td>{entry.MoodAns}</td>
                        </tr>
                
                    )} */}
                </tbody>
            </table>
        </div>

    
    </div>
  );
};
  
export default MoodHistory;