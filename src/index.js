import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import SignIn from './pages/Signin';
import LogIn from './pages/Login';
import HomePage from './pages/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <React.StrictMode>

  <Routes>

        <Route index element={<App />} />
        <Route path="/pages/Signin" element={<SignIn />} />
        <Route path="/pages/Login" element={<LogIn />} />
        <Route path="/pages/HomePage" element={<HomePage />} />

      </Routes>

  </React.StrictMode>

  </BrowserRouter>
);


