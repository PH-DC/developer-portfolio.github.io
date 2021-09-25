import React from 'react';
import './AboutMe.css';

export default function AboutMe ()
{
    return(
        <sec id="AboutMeSec">
            <div className="line">
                <h1>About</h1>
            </div>
            
            <div className="about">
                <img src="https://source.unsplash.com/720x720/?Programming,Coding" alt="coding" />
                <div>
                    <h2>I'am Deep Kawale</h2>
                    <p>I have completed my SSC from St.Mary's Convent School. Currently, I'm pursuing a Diploma from Pillai HOC Polytechnic in the Computer Science field. Courteous and enthusiastic, I am interested in Full Stack Web    Development and everything in its orbit. </p>
                    <h4>Fun fact: This is my 1st project in react. </h4>
                    <button> <a href="/assets/docs/Resume.pdf" download="Deep Kawale - Resume"> Download Resume</a></button>
                </div>
            </div>
        </sec>
    )
}