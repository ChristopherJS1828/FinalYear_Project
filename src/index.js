import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import SignIn from './pages/Signin';
import LogIn from './pages/Login';
import HomePage from './pages/HomePage'
import FeelingsDesc from './pages/FeelingsDesc';
import UserQuestions from './pages/UserQuestions';
import Services from './pages/Services';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import axios from 'axios';
import MoodHistory from './pages/MoodHistory';



const root = ReactDOM.createRoot(document.getElementById('root'));
let userLogged;

function Index() {

  useEffect(() => {
    function checkUserData() {
      userLogged = localStorage.getItem("token") !== undefined;
    }

    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);



}

root.render(

  <BrowserRouter>
  <Routes>
    <Route index path="/" element={<App />}></Route>
    <Route path="/pages/Signin" element={<SignIn />}></Route>
    <Route path="/pages/Login" element={<LogIn />}></Route>
    <Route path="/pages/HomePage" element={userLogged ? <Navigate replace to="/pages/HomePage" /> : <HomePage />}></Route>
    <Route path="/pages/FeelingsDesc" element={userLogged ? <Navigate replace to="/pages/FeelingsDesc" /> : <FeelingsDesc />}></Route>
    <Route path="/pages/UserQuestions" element={userLogged ? <Navigate replace to="/pages/UserQuestions" /> : <UserQuestions />}></Route>
    <Route path="/pages/Services" element={userLogged ? <Navigate replace to="/pages/Services" /> : <Services />}></Route>
    <Route path="/pages/MoodHistory" element={userLogged ? <Navigate replace to="/pages/MoodHistory" /> : <MoodHistory />}></Route>
  </Routes>
</BrowserRouter>

/* <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pages/Signin" element={<SignIn />} />
            <Route path="/pages/Login" element={<LogIn />} />
            {userLogged ? (<Route path={"/pages/HomePage"} element={<HomePage />} />) : (<Route path={"/home"} element={<LogIn />} />)}
          </Routes>
        </Router>
</React.StrictMode> */
  

  // <BrowserRouter>

  // <React.StrictMode>

  // <Routes>
  //       <Route index element={<App />} />
  //       <Route path="/pages/Signin" element={<SignIn />} />
  //       {/* <Route path="/pages/Login" element={
  //         <PublicRoute><LogIn /></PublicRoute>
  //         }/> */}
  //       <Route  path="/pages/Login" element={<LogIn />} />
  //       {/* <Route path="/pages/Homepage" element={
  //         <PrivateRoute><HomePage /></PrivateRoute>
  //         }/> */}
  //       <Route  path="/pages/HomePage" element={<HomePage />} />

  //     </Routes>

  // </React.StrictMode>

  // </BrowserRouter>
);
