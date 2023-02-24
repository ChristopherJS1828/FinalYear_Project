// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
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
import AboutUs from './pages/AboutUs';



export const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem("user");
  if (!user) {
    // user is not authenticated
    return <Navigate to="/pages/SignIn" />;
  }
  return children;
};

export const UnProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem("user");
  if (user) {
    // user is not authenticated
    return <Navigate to="/pages/HomePage" />;
  }
  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
let userLogged;

function Index() {

  useEffect(() => {
    function checkUserData() {
      userLogged = sessionStorage.getItem("token") !== undefined;
    }

    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);

}

const isUserLogged = () => {
  return sessionStorage.getItem("token") !== undefined;
}

root.render(

  <BrowserRouter>
  <Routes>
    <Route index path="/" element={<App />}></Route>
    <Route path="/pages/Signin" element={<UnProtectedRoute><SignIn /></UnProtectedRoute>}></Route>
    <Route path="/pages/Login" element={<UnProtectedRoute><LogIn /></UnProtectedRoute>}></Route>
    <Route path="/pages/HomePage" element={<ProtectedRoute><HomePage /></ProtectedRoute>}></Route>
    <Route path="/pages/FeelingsDesc" element={<ProtectedRoute><FeelingsDesc /></ProtectedRoute>}></Route>
    <Route path="/pages/UserQuestions" element={<ProtectedRoute><UserQuestions /></ProtectedRoute>}></Route>
    <Route path="/pages/Services" element={<ProtectedRoute><Services /></ProtectedRoute>}></Route>
    <Route path="/pages/MoodHistory" element={<ProtectedRoute><MoodHistory /></ProtectedRoute>}></Route>
    <Route path="/pages/AboutUs" element={<ProtectedRoute><AboutUs /></ProtectedRoute>}></Route>
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
