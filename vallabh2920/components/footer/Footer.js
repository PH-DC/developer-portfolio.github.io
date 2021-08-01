import React from 'react'
import BasePage from '../../Layout/BasePage'

const Footer = () => {
    return (
        <BasePage className="bg-fourth py-6">
            <div className="flex justify-between flex-wrap">
            <div className="flex space-x-4 items-center">
                <img src="./img/copyright.svg" alt="" />
                <p className="text-first">2021</p>
            </div>
            <div className="flex space-x-4 items-center">
            <a href="mailto:vallabhingle2920@gmail.com ?subject=subject&cc=cc@example.com" ><img src="./img/mail.svg" alt=""/></a>
                <a href="https://www.linkedin.com/in/vallabh-ingle-a9a0b7206/" target="_blank"><img src="./img/linkedin.svg" alt=""/></a>
                <a href="https://github.com/vallabh2920" target="_blank"><img src="./img/github.svg" alt=""/></a>
                
                
            </div>
            </div>  
        </BasePage>
    )
}

export default Footer
