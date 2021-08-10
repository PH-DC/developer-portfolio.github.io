import React from 'react';
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footerSection" id="Footer">
            <div className="email">
                <a href="mailto:ypratham0014@gmail.com">ypratham0014@gmail.com</a>
            </div>
            <div className="download_resume">
                <button>
                    <a href="/resource/document/CV_Pratham Yadav.pdf" download="CV_Pratham_Yadav">DOWNLOAD RESUME</a>
                </button>
            </div>
            <div className="socialMedia">
                <ul>
                    <li><a href="https://www.instagram.com/yprathamdev/" rel="noreferrer" target="_blank">
                        <img src="/resource/images/Icons/instagram.svg" alt="instagram" />
                    </a></li>
                    <li><a href="https://www.linkedin.com/in%20pratham-yadav-0612531ba?_l=en_US" rel="noreferrer" target="_blank">
                        <img src="/resource/images/Icons/linkedin.svg" alt="linkedin" />
                    </a></li>
                    <li><a href="https://twitter.com/Pratham06697358" rel="noreferrer" target="_blank">
                        <img src="/resource/images/Icons/twitter.svg" alt="twitter" />
                    </a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>Copyright © {year}</p>

            </div>
        </footer>
    )
}