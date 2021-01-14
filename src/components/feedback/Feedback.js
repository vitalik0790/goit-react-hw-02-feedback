import React, { Component } from 'react';
import Buttons from './buttons/Buttons';
import Info from './info/Info';
import Notification from './notification/Notification'
import s from './Feedback.module.css'


export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countPositiveFeedbackPercentage = (total, good) => {
        const percent = (good / total) * 100;
        return percent.toFixed();
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    onHandleClick = (e) => {
        const key = e.target.dataset.name;
        this.setState((prev) => ({ [key]: prev[key] + 1 }));
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage(total,
            this.state.good);

        return (
            <div className={s.section}>
                <div className={s.container}>
                    <h2 className={s.title}>Please leave feedback</h2>
                    <Buttons onHandleClick={this.onHandleClick} />
                    <h3 className={s.title}>Statistics:</h3>
                </div>
                <div className={s.containerr}>
                    {total > 0 ? (
                        <Info good={good} neutral={neutral} bad={bad} total={total} percentage={percentage} />
                    ) : (
                            <Notification message="No feedback given" />
                        )}
                </div>
            </div >

        );
    }
}


