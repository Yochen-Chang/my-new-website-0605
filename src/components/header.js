import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
    return (
        <div id="header">

            <div className="top">

                <div id="logo">
                <span className="image avatar48">
                    <StaticImage alt="Yoshi Logo" src="../images/icon-Yoshi Logo.png"/>
                </span>
                <h1 id="title">Hello I'm Yochen</h1>
                <p>I'm a swing engineer</p>
                </div>

                <nav id="nav">
                <ul>
                    <li><a href="#top" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
                    <li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
                    <li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
                    <li><a href="#experience" id="experience-link"><span className="icon solid fa-user">Experience</span></a></li>
                    <li><a href="#contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
                </ul>
                </nav>

            </div>

            <div className="bottom">

                <ul className="icons">
                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                <li><a href="#" className="icon brands fa-medium"><span className="label">Medium</span></a></li>
                <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                </ul>

            </div>

        </div>
    )
}

export default Header