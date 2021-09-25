import React, { useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
    let [dtoggle, setToggle] = useState(false);

    function toggle() {
        setToggle(!dtoggle);
    }


    let getMar;

    return (
        <>
            <header id="header">
                <div className="left">
                    <ul className="list">

                        <img id="h3r" src="/assets/alien.svg" alt="logo" />

                        <li><a href="#HomePage">Home</a></li>
                        <li><a href="#AboutMeSec">About</a></li>
                        <li><a href="#SkillsSec">Skills</a></li>
                        <li><a href="#ProjectSec">Projects</a></li>
                    </ul>
                </div>

                <div className="right">
                    <a id="h3" href="#Footer">Deep</a>
                    <div>
                        <MenuIcon onClick={toggle} />
                    </div>
                </div>
            </header>
            <div className={dtoggle ? "drawer active" : "drawer"}>
                <ul id="dul">
                    <li>
                        <a href="#HomePage" onClick={toggle}>Home</a>
                    </li>
                    <li>
                        <a href="#AboutMeSec" onClick={toggle}>About</a>
                    </li>
                    <li>
                        <a href="#SkillsSec" onClick={toggle}>Services</a>
                    </li>
                    <li>
                        <a href="#ProjectSec" onClick={toggle}>Contact</a>
                    </li>
                </ul>
            </div>

            {/* {getMar = document.getElementById("header").style.height}
            {document.getElementById("dul").style.marginTop = getMar} */}
        </>

    )
}