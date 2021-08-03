import React from 'react';
import github from '../Images/github.png';
import lk from '../Images/linkedin.png';
import gmail from '../Images/gmail.png';
import '../styles/contact.css';


export const Contact = () => {
    // const github = require('../Images/github.png');
    return (
        <div className="contact">
            <a href="https://www.github.com/faiz67" target="_blank"><img src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/faiz-shaikh-7914621bb/" target="_blank"><img src={lk} alt="github" /></a>
            <a href="mailto:faiz786.fs51@gmail.com" target="_blank"><img src={gmail} alt="github" /></a>
        </div>
    )
}
