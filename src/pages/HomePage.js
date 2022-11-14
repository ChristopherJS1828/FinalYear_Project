import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import React from 'react';
import "./HomePage.css";
import logo from '../images/mood_diary_logo.png'
import verysad from '../images/verysad.jpg'
import sad from '../images/sad.jpg'
import okay from '../images/okay.jpg'
import happy from '../images/happy.jpg'
import veryhappy from '../images/veryhappy.jpg'
import { getUser, removeUserSession } from '../Utils/Common';


function HomePage(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {  
    removeUserSession();  
    // props.history.push('/pages/Login');
    navigate("/pages/Login");

  }

  const submit = () => {
    navigate("/pages/FeelingsDesc");
  }
  const feelingspage = () => {
    navigate("/pages/HomePage");
  }

  const viewmoods = () => {
    navigate("/pages/Login");
  }
  
    // const navigate = useNavigate();
    
    // function Test(){
    //   navigate("/pages/Signin");
    // }
    // function LogIn(){
    //   navigate("/pages/Login");
    // }

    const navigate = useNavigate();
  
    return (
      <div>
        <div className='header'>
        <div className='logoHeader'>
        <img src = {logo}></img>
        <h1 className='logoName'>App Name</h1>
        </div>
        <h1>Welcome Back!</h1>
        <div className='topnav'>
          <a className='active' href='' onClick={feelingspage}>Record Mood</a>
          <a href='' onClick={viewmoods}>View Mood History</a>
          <button className='logOutbtn' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <h2 className='content-q'>How are you feeling today?</h2>
      
      <table className='feelings'>
		<tr>
			<td>
      <div className="content">
				<div>
        <img className='face-images1' src = {veryhappy}></img>
				</div>
				<div>
					<button className='button-words1'>very happy</button>
				</div>
         </div>
			</td>
      <td>
      <div className="content">
				<div>
        <img className='face-images2' src = {happy}></img>
				</div>
				<div>
					<button className='button-words2'>happy</button>
				</div>
         </div>
			</td>

      <td>
      <div className="content">
				<div>
        <img className='face-images3' src = {okay}></img>
				</div>
				<div>
					<button className='button-words3'>okay</button>
				</div>
         </div>
			</td>

      <td>
      <div className="content">
				<div>
        <img className='face-images4' src = {sad}></img>
				</div>
				<div>
					<button className='button-words4'>unhappy</button>
				</div>
         </div>
			</td>

      <td>
      <div className="content">
				<div>
        <img className='face-images5' src = {verysad}></img>
				</div>
				<div>
					<button className='button-words5'>very unhappy</button>
				</div>
         </div>
			</td>
		</tr>
	</table>

  <div className='feelings'>

      <div>
      <input className='inputBox' type="text" id="Name"/>
      </div>

      <div className='content'>
      <div>
        <button className='submit' onClick={submit}>submit!</button>
      </div>
      </div>

      </div>
    </div>
    );
  };
    
  export default HomePage;