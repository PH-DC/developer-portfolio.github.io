import React from 'react'
import Education from './Education'


const About = () => {
    return (
        
        <div id="about" className=" ">
            <h2 className="m-8  text-fourth font-extrabold text-4xl tracking-wider text-center">ABOUT ME</h2>
            <div className=" mb-12 mt-10 p-11 flex justify-center flex-wrap items-center space-x-10 bg-first rounded-xl">
                <div className="p-11  ">
                    <img src="/img/vallabh.svg" className=" border-2 bg-fourth rounded-full w-img" />
                </div>
                <div className=" flex flex-col justify-evenly max-w-lg ">
                    <ul className="space-y-4 text-2xl text-fourth">
                        <li className="text-2xl font-medium">
                            NICE TO MEET YOU!
                        </li>
                        <li >
                            I am vallabh Ingle, An Engineering student. I use a creative approach to problem solve.
                        </li>
                        <li >
                            I'm passionate about creating fluid digital experiences and I want to use technology to help make people's lives more fulfilling. You can find me on <a href="https://www.linkedin.com/in/vallabh-ingle-a9a0b7206/" target="_blank" className="underline hover:bg-fourth hover:text-white text-third">Linkedin</a> and <a href="https://github.com/vallabh2920" className="underline hover:bg-fourth hover:text-white htext-third text-third" target="_blank">Github</a>, download my <a href="https://drive.google.com/file/d/1WE9sMm828Ce_pcqj6Xi4BF5A4BAbrcOu/view?usp=sharing" className="underline hover:bg-fourth hover:text-white htext-third text-third" target="_blank">resume</a>, or shoot me an <a href="mailto:vallabhingle2920@gmail.com ?subject=subject&cc=vallabhingle2920@gmail.com" className="underline hover:bg-fourth hover:text-white htext-third text-third" >email</a>
                        </li>
                    </ul>
                </div>
            </div>
            <h2 className="m-8 text-fourth font-extrabold text-4xl tracking-wider text-center">MY GOALS</h2>
            <div className="flex justify-evenly items-center flex-wrap mt-10">
                <div className="p-11 max-w-lg flex justify-center items-center bg-first rounded-xl">
                <ul className="list-disc ml-4 space-y-4 text-2xl">
              <li>Develop myself with the opportunities provided.</li>
              <li>To work in an organization, where I can contribute best of my skills and where there is an environment of new learning for my technical, personal and professional growth.</li>
              <li>Also in a challenging environment.</li>
              <li>To do things which will make me proud.</li>
            </ul>

                </div>
                <div className="p-11">
                    <img src="/img/rocket.svg" className="w-img "/>
                </div>
            </div>
            <Education />
        </div>
        
        
    )
}

export default About
