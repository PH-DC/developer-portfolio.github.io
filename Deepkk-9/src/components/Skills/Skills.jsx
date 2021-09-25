import React from 'react';
import SkillBar from './SkillBar.jsx';
import './Skills.css';

const srcURL = "assets/icons/";
export default function Skills() {
    return (
        <div className="skillsPage" id="SkillsSec">
            <div className="line">
                <h1>Skills</h1>
            </div>
            <div className="skillsPage_skillItem">

                <ul>
                    <SkillBar skill="C/CPP" src={srcURL + 'icons8-c++.svg'} score="cpp" />
                    <SkillBar skill="HTML/CSS" src={srcURL + 'icons8-html-5.svg'} score="html" />
                    <SkillBar skill="JavaScript" src={srcURL + 'icons8-javascript.svg'} score="javascript" />
                    <SkillBar skill="Java" src={srcURL + 'icons8-java.svg'} score="java" />
                    <SkillBar skill="Python" src={srcURL + 'icons8-python.svg'} score="python" />
                    <SkillBar skill="MySQL" src={srcURL + 'icons8-mysql-logo.svg'} score="sql" />
                    <SkillBar skill="MongoDB" src={srcURL + 'icons8-mongodb.svg'} score="mongodb" />
                    <SkillBar skill="NodeJs" src={srcURL + 'icons8-nodejs.svg'} score="nodejs" />

                    <SkillBar skill="ReactJs" src={srcURL + 'icons8-react-native.svg'} score="reactjs" />
                    <SkillBar skill="ExpressJs" src={srcURL + 'icons8-js-express.svg'} score="expressjs" />
                    <SkillBar skill="Adobe Photoshop" src={srcURL + 'icons8-adobe-photoshop.svg'} score="photoshop" />
                    <SkillBar skill="Adobe Illustrator" src={srcURL + 'icons8-adobe-illustrator.svg'} score="illustrator" />
                    <SkillBar skill="Android Studio" src={srcURL + 'icons8-android-studio.svg'} score="androidstudio" />
                    <SkillBar skill="VS Code" src={srcURL + 'icons8-visual-studiocode.svg'} score="vscode" />
                    <SkillBar skill="Blender" src={srcURL + 'icons8-blender-3d.svg'} score="blender" />
                </ul>
            </div>
        </div>
    )
}