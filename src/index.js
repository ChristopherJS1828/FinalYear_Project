import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import SignIn from './pages/Signin';
import LogIn from './pages/Login';
import HomePage from './pages/HomePage'
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
let userLogged = true;

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
