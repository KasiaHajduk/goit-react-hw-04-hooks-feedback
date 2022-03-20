//import { Component } from 'react';

import React, { useState } from 'react';
import StatisticList from './StatisticList';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';


export default function Feedback () {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleIncrement = event => {
        const name = event.target.name;
        if (name === "good") { setGood(good + 1); }
        else if (name === "neutral") { setNeutral(neutral + 1); }
        else if (name === "bad") { setBad(bad + 1); }
    };

    const countTotalFeedback = () => {
        return (good + neutral + bad);
    };

    const countPositiveFeedbackPercentage = () => { 
        return (Math.round(good/(good + neutral + bad)*100));
    };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const statistic = [good, neutral, bad, total, positivePercentage];
               
    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions options={"good"} onLeaveFeedback={handleIncrement}/>
                <FeedbackOptions options={"neutral"} onLeaveFeedback={handleIncrement}/>
                <FeedbackOptions options={"bad"} onLeaveFeedback={handleIncrement}/>
            </Section>
            <Section title="Statistics">
                {(total > 0)  ? (<StatisticList statistic={statistic}/> ) : (<Notification message="There is no feedback"/>)}
            </Section>
        </div>
    );
}

