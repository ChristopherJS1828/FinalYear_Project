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
        <div>
        <button className='button-2' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <h2 className='content-q'>How are you feeling today?</h2>
      {/* <div className='content'>
        <div>
          <img src = {verysad}></img>
          
        </div>
        <div>
          <button className='button-2' >Very Happy</button>
        </div>
      </div> */}
      
      <table className='feelings'>
		<tr>
			<td>
      <div className="content">
				<div>
        <img src = {veryhappy}></img>
				</div>
				<div>
					<button className='button-2'>very happy</button>
				</div>
         </div>
			</td>
      <td>
      <div className="content">
				<div>
        <img src = {happy}></img>
				</div>
				<div>
					<button className='button-2'>happy</button>
				</div>
         </div>
			</td>

      <td>
      <div className="content">
				<div>
        <img src = {okay}></img>
				</div>
				<div>
					<button className='button-2'>okay</button>
				</div>
         </div>
			</td>

      <td>
      <div className="content">
				<div>
        <img src = {sad}></img>
				</div>
				<div>
					<button className='button-2'>unhappy</button>
				</div>
         </div>
			</td>

      <td>
      <div className="content">
				<div>
        <img src = {verysad}></img>
				</div>
				<div>
					<button className='button-2'>very unhappy</button>
				</div>
         </div>
			</td>
		</tr>
	</table>

      </div>
    );
  };
    
  export default HomePage;