import React from 'react';
import './Projects.css';
import {githubp as Githubp, githubp1 as Githubp1}  from '../icons/githubicons';

export default function Projects () {
    return(
        <sec id="ProjectSec">
            <h1>Projects</h1>
            <div className="ProjectCards">
                <div id="top"> 
                    <h2> <img src="/assets/icons/icons8-python.svg" alt="bot" />&nbsp; Discord Bot</h2> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ullam necessitatibus placeat sapiente maiores hic.</p> 
                    <Githubp /> 
                </div>

                <div id="down"> 
                    <h2> <img src="/assets/icons/icons8-java.svg" alt="bot" /> &nbsp; Java Calculator</h2> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati beatae deserunt distinctio fugit ipsa?</p> 
                    <Githubp1 /> 
                </div>
            </div>
        </sec>
    )
}