import React from 'react'

const Hero = () => {
    return (
        <div id="heroSection" className="py-36 text-4xl flex justify-center items-center flex-col md:text-center md:text-3xl">
            <h2 className="text-fourth font-medium tracking-wide text-center">HI,I'M VALLABH.</h2>
            <span className="text-fourth font-medium tracking-wide">I'M A <span className=" font-extrabold text-6xl md:text-4xl tracking-wide">UI/UX</span> DESIGNER AND DEVELOPER.</span>
            <img src="/img/home.svg"/>
        </div>
    )
}

export default Hero
