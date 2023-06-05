import * as React from 'react'
import Banner from './banner'
import Skills from './skills'
import Portfolio from './portfolio'
import Experience from './experience'
import About from './about'
import Contact from './contact'

const Main = () => {
    return (
        <div id="main">
            <Banner></Banner>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <About></About>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    )
}

export default Main