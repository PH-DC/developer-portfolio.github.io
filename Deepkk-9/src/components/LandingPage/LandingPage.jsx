import React, {useEffect} from 'react';
import Typed from 'typed.js';
import './LandingPage.css';
import {githubicons as Github, linkedinicons as Linkedin, twittericons as Twitter}  from '../icons/githubicons';


export default function LandingPage ()
{
    useEffect(() => {
        var options = {
            strings: ['Student', 'Developer', 'Designer'],
            typeSpeed: 100,
            loop: true,
            backSpeed: 100
        };

        var typed = new Typed('#dynamicText', options);
    })
    return(
        <div className="LandingPage" id="HomePage">
            <div className="leftc">
                <h4 className="one">Hi,</h4>

                <h4 className="two">I'm, <span id="name">Deep Kawale</span></h4>

                <h4 className="three"><span id="dynamicText"></span></h4>

                <div className="four">
                    <a href="#Footer">
                        <button>Contact</button>
                    </a>
                </div>

                <div className="logo" target="_blank">
                    <div className="logol">
                        <Github />
                        <Linkedin />
                        <Twitter /> 
                    </div>  
                    <img src="/assets/Vector.png" alt="My pic"/>           
                </div>
            </div>

            <div className="img">
                <img src="/assets/Vector.png" alt="My pic"/>
            </div>
        </div>          
    )
}