import React, { Component } from 'react';


export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onHandleClick = (e) => {
        const key = e.target.dataset.name;
        this.setState((prev) => ({ [key]: prev[key] + 1 }));
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <h2>Please leave feedback</h2>

                <button type="button" onClick={this.onHandleClick} data-name='good'>Good</button>
                <button type="button" onClick={this.onHandleClick} data-name='neutral'>Neutral</button>
                <button type="button" onClick={this.onHandleClick} data-name='bad'>Bad</button>

                <h3>Statistics</h3>

                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
            </div >

        );
    }
}


