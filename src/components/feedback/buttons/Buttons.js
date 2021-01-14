import React from 'react'
import PropTypes from 'prop-types';
import s from './Buttons.module.css'


const Buttons = ({ onHandleClick }) => {
    return (
        <div>
            <button className={s.button} type="button" onClick={onHandleClick} data-name='good'>Good</button>
            <button className={s.button} type="button" onClick={onHandleClick} data-name='neutral'>Neutral</button>
            <button className={s.button} type="button" onClick={onHandleClick} data-name='bad'>Bad</button>
        </div>
    );
}

Buttons.propTypes = {
    onHandleClick: PropTypes.func.isRequired,
}

export default Buttons;