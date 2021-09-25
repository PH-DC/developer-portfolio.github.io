import React, { useEffect } from 'react';
import Typed from "typed.js";
import './LandingPage.css'


export default function LandingPage() {
    useEffect(() => {
        var options = {
            strings: ['Student', 'Developer', 'Designer'],
            typeSpeed: 100,
            loop: true,
            backSpeed: 100
        };
        var options1 = {
            strings: ['Hola !', 'Namaste !', 'Hello !'],
            typeSpeed: 200,
            loop: true,
            backSpeed: 100
        };

        var typed = new Typed('#dynamicText', options);
        var helloTypier = new Typed('#helloText', options1);
    })
    return (
        <div className="startPage" id="Home">
            <a href="#Footer">
                <button>CONTACT ME</button>
            </a>
            <div className="startPage_greetings">
                <h1><span id="helloText"></span></h1>
                <h1>Pratham Yadav</h1>
                <h3 > - <span id="dynamicText"></span></h3>
            </div>
        </div>
    )
}