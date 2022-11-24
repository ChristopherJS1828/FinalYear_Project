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
import axios from 'axios';
StylesManager.applyTheme("defaultV2");
window["$"] = window["jQuery"] = $;
require("jquery-ui-dist/jquery-ui.js");
widgets.jqueryuidatepicker(SurveyCore);

function UserQuestions() {

    const navigate = useNavigate();

    // const submitQuestions = () => {
    //     navigate("/pages/FeelingsDesc");
    // }

    // console.log(localStorage.getItem("currentmood"));

    const surveyJson = {

        pages: [{
            elements: [{
                name: "daily-mood",
                title: "Which one of the following best represents your current mood?",
                type: "radiogroup",
                choices: [
                    { value: 0, text: "Very Happy" },
                    { value: 1, text: "Happy" },
                    { value: 2, text: "Okay" },
                    { value: 3, text: "Bad" },
                    { value: 4, text: "Very Bad" }
                ],
                isRequired: false
            }]
        },{
            elements: [{
                name: "daily-activity",
                title: "Which one of the following activites did you do today?",
                type: "radiogroup",
                choices: [
                    { value: 0, text: "Exercise" },
                    { value: 1, text: "Study/Go to College" },
                    { value: 2, text: "Spend Time Doing Something You Enjoy (Hobby)" },
                    { value: 3, text: "Work" },
                    { value: 4, text: "Spend Time With Family/Friends/Significant Other" }
                ],
                isRequired: false
            }]
        }, {
            elements: [{
                name: "daily-positive",
                title: "Which one of the following contributed positively to your mood today?",
                type: "radiogroup",
                choices: [
                    { value: 0, text: "Spending Time With Family/Friends/Significant Other" },
                    { value: 1, text: "Spending Time Doing Something You Enjoy (Hobby)" },
                    { value: 2, text: "Exercising" },
                    { value: 3, text: "Being productive (work,college, at home)" },
                    { value: 4, text: "Sleeping Well/Eating Well/Focusing On Your Health" }
                ],
                isRequired: false
            }]
        }, {
            elements: [{
                name: "daily-positive-extra",
                title: "Feel free to talk about your positives today?",
                type: "comment",
            }],
        }, {
            elements: [{
                name: "daily-negative",
                title: "Which one of the following contributed negatively to your mood today?",
                type: "radiogroup",
                choices: [
                    { value: 0, text: "Spending Time With Family/Friends/Significant Other" },
                    { value: 1, text: "Spending Time Doing Something You Enjoy (Hobby)" },
                    { value: 2, text: "Exercising" },
                    { value: 3, text: "Being productive (work,college, at home)" },
                    { value: 4, text: "Sleeping Well/Eating Well/Focusing On Your Health" }
                ],
                isRequired: false
            }]
        }, {
            elements: [{
                name: "daily-negative-extra",
                title: "Feel free to talk about your negatives today?",
                type: "comment",
            }],
        }, {
            elements: [{
                name: "date-time",
                title: "Thank you for recording your mood, one last step! please select the date of your current entry:",
                type: "datepicker",
                inputType: "date",
                dateFormat: "mm/dd/yy",
                isRequired: false
            }],
        }]
    };

    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;

    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
            
            const surveyData = JSON.parse(JSON.stringify(survey.getPlainData()));

            let numOfQ = 7;
            let questionnaireData = {}
            console.log(survey.getPlainData());
            for(let i = 0; i < numOfQ; i++){
                questionnaireData[i] = surveyData[i].displayValue;
            }
            axios
            .post("http://localhost:8000/UserQuestions",questionnaireData)
            .then(function (response) 
            {
                navigate("/pages/FeelingsDesc");
            })
            .catch(function (error) 
            {
                console.log(error);
            });

    }, []);

    survey.onComplete.add(alertResults);

    return (
        <Survey model={survey} />
    );
};

export default UserQuestions;