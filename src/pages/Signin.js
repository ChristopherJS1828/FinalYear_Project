import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import "./signin.css";
import axios from 'axios';


function SignIn() {

  const navigate = useNavigate();

  function Cancel() {

    navigate("..");

  }

  function showPassword() {
    var x = document.getElementById("psw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function Submit() {
    axios.post("http://localhost:8000/SignUp", {
      "Name": name,
      "Email": email,
      "Password": password
    })
      .then(function (response) {
        console.log("success!")
      })
      .catch(function (error) {
        console.log(error);
      });

    navigate("..");
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    console.log(event.target.id);
    let elementID = event.target.id;

    if (elementID === "Name") {
      setName(event.target.value);
    } else if (elementID === "Email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  useEffect(() => {

    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");


    // When the user clicks on the password field, show the message box
    myInput.onfocus = function () {
      document.getElementById("message").style.display = "block";
    }

    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function () {
      document.getElementById("message").style.display = "none";
    }


    // When the user starts to type something inside the password field
    myInput.onkeyup = function () {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }

      // Validate length
      if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }
  }, []);

  // function ValidateEmail(inputText) {
  //   var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  //   if (inputText.value.match(mailformat)) {
  //     alert("You have entered a valid email address!");    //The pop up alert for a valid email address
  //     document.form1.text1.focus();
  //     return true;
  //   }
  //   else {
  //     alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
  //     document.form1.text1.focus();
  //     return false;
  //   }
  // }

  return (

    <div onload='document.form1.text1.focus()'>
      <h1 className='pageContent'>Create An Account!</h1>
      <div className='container'>
        <label><b>Full Name</b>
          <input className='inputBox' type="text" id="Name" onChange={handleChange} />
        </label>
        <label><b>Email</b>
          <input className='inputBox' type="text" id="Email" onChange={handleChange} />
        </label>
        <label><b>Password</b>
          <input className='inputBox' type="password" id="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters' required />
        </label>
        <input type="checkbox" onClick={showPassword}/>Show Password

        <button className='signupbtn' type="submit" onClick={Submit}>Sign Up</button>
      </div>

      <div id="message">
        <h3>Password must contain the following:</h3>
        <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
        <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
        <p id="number" className="invalid">A <b>number</b></p>
        <p id="length" className="invalid">Minimum <b>8 characters</b></p>
      </div>

      <div className='container'>
        <button className='cancelbtn' onClick={Cancel}>Cancel</button>
        <span className='psw'><a href="./Login"> Already have a account?</a></span>
      </div>
    </div>

  );
};

export default SignIn;