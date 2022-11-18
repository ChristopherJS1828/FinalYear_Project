import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import "./UserQuestions.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui.css";
import React, { useState, useEffect, useCallback } from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import "survey-core/defaultV2.min.css"; 
import { StylesManager, Model } from "survey-core"; 
import * as SurveyCore from "survey-core";
import { Survey } from "survey-react-ui";
import * as widgets from "surveyjs-widgets";
StylesManager.applyTheme("defaultV2");
window["$"] = window["jQuery"] = $;
require("jquery-ui-dist/jquery-ui.js");
widgets.jqueryuidatepicker(SurveyCore);
  
function UserQuestions() {
  
  const navigate = useNavigate();

  const submitQuestions = () => {
    navigate("/pages/FeelingsDesc");
  }

  console.log(localStorage.getItem("currentmood"));

  const surveyJson = {
    
    pages: [{
        elements: [{
            name: "daily-activity",
            title: "Which one of the following did you do today?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Exercise" },
                { value: 4, text: "Study/Go to College" },
                { value: 3, text: "Spend Time Doing Something You Enjoy (Hobby)" },
                { value: 2, text: "Work" },
                { value: 1, text: "Spend Time With Family/Friends/Significant Other" }
            ],
            isRequired: true
        }]
    }, {
        elements: [{
            name: "daily-positive",
            title: "Which one of the following contributed positively to your mood today?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Spending Time With Family/Friends/Significant Other" },
                { value: 4, text: "Spending Time Doing Something You Enjoy (Hobby)" },
                { value: 3, text: "Exercising" },
                { value: 2, text: "Being productive (work,college, at home)" },
                { value: 1, text: "Sleeping Well/Eating Well/Focusing On Your Health" }
            ],
            isRequired: true
        }]
    }, {
        elements: [{
            name: "daily-positive-extra",
            title: "Feel free to talk about your positives today?",
            type: "comment",
        }, {
            name: "nps-score",
            title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            type: "rating",
            rateMin: 0,
            rateMax: 10
        }],
    }, {
        elements: [{
            name: "daily-negative",
            title: "Which one of the following contributed negatively to your mood today?",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Spending Time With Family/Friends/Significant Other" },
                { value: 4, text: "Spending Time Doing Something You Enjoy (Hobby)" },
                { value: 3, text: "Exercising" },
                { value: 2, text: "Being productive (work,college, at home)" },
                { value: 1, text: "Sleeping Well/Eating Well/Focusing On Your Health" }
            ],
            isRequired: true
        }]
    }, {
        elements: [{
            name: "date-time",
            title: "Thank you for recording your mood, one last step! please select the date of your current entry:",
            type: "datepicker",
            inputType: "date",
            dateFormat: "mm/dd/yy",
            isRequired: true
        }],
    }]
    };
      
      const survey = new Model(surveyJson);
      survey.focusFirstQuestionAutomatic = false;
    
      const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results);
      }, []);
    
      survey.onComplete.add(submitQuestions);

  return (
    <Survey model={survey} />
  );
};
  
export default UserQuestions;