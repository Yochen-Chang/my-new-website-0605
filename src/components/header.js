import * as React from 'react'

const Header = () => {
    return (
        <div id="header">

            <div class="top">

                <div id="logo">
                <span class="image avatar48"><img src="images/icon-Yoshi Logo.png" alt="" /></span>
                <h1 id="title">Hello I'm Yochen</h1>
                <p>I'm a swing engineer</p>
                </div>

                <nav id="nav">
                <ul>
                    <li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
                    <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>
                    <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>
                    <li><a href="#experience" id="experience-link"><span class="icon solid fa-user">Experience</span></a></li>
                    <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>
                </ul>
                </nav>

            </div>

            <div class="bottom">

                <ul class="icons">
                <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
                <li><a href="#" class="icon brands fa-medium"><span class="label">Medium</span></a></li>
                <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
                </ul>

            </div>

        </div>
    )
}

export default Header