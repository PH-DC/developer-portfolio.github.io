import React from 'react';
import SkillBar from './SkillBar';
import './Skills.css';

const srcURL = "/resource/images/Icons/";
export default function Skill() {
    return (
        <div className="skillsPage" id="Skill">
            <h1>SKILLS</h1>
            <div className="skillsPage_skillItem">

                <ul>
                    <SkillBar skill="C/CPP" src={srcURL + 'CPP.svg'} score="cpp" />
                    <SkillBar skill="HTML/CSS" src={srcURL + 'HTMLCSSIcon.svg'} score="html" />
                    <SkillBar skill="JavaScript" src={srcURL + 'JavaScript.svg'} score="javascript" />
                    <SkillBar skill="Java" src={srcURL + 'Java.svg'} score="java" />
                    <SkillBar skill="Python" src={srcURL + 'Python.svg'} score="python" />
                    <SkillBar skill="SQL" src={srcURL + 'SQL.svg'} score="sql" />
                    <SkillBar skill="MongoDB" src={srcURL + 'MongoDB.svg'} score="mongodb" />
                    <SkillBar skill="NodeJs" src={srcURL + 'NodeJs.svg'} score="nodejs" />

                    <SkillBar skill="ReactJs" src={srcURL + 'ReactJs.svg'} score="reactjs" />
                    <SkillBar skill="ExpressJs" src={srcURL + 'JavaScript.svg'} score="expressjs" />
                    <SkillBar skill="Adobe Photoshop" src={srcURL + 'AdobePhotoshop.svg'} score="photoshop" />
                    <SkillBar skill="Adobe Illustrator" src={srcURL + 'AdobeIllustrator.svg'} score="illustrator" />
                    <SkillBar skill="Adobe Premier Pro" src={srcURL + 'AdobePremierPro.svg'} score="premierpro" />
                    <SkillBar skill="Android Studio" src={srcURL + 'AndroidIcon.svg'} score="androidstudio" />
                    <SkillBar skill="VS Code" src={srcURL + 'VSCode.svg'} score="vscode" />
                    <SkillBar skill="Blender" src={srcURL + 'Blender.svg'} score="blender" />
                </ul>
            </div>
        </div>
    )
}