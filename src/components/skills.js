import * as React from 'react'

const Skills = () => {
    return (
        <section id="skills">
            <div class="container">

                <header>
                    <h2>What I have</h2>
                </header>
                <div class="row">
                    <div class="col-4 col-12-mobile">
                        <article class="item">
                            {/* <a href="#" class="image fit"><img src="images/skill-programing.png" alt="" /></a> */}
                        </article>
                        <header>
                            <h3>WebDesign</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                            </ul>
                        </header>
                    </div>
                    <div class="col-4 col-12-mobile">
                        <article class="item">
                            {/* <a href="#" class="image fit"><img src="images/skill-photograph.png" alt="" /></a> */}
                        </article>
                        <header>
                            <h3>Photograph</h3>
                            <ul>
                                <li>Figma</li>
                                <li>Adobe XD</li>
                                <li>PhotoShop</li>
                                <li>illustrator</li>
                            </ul>
                        </header>
                    </div>
                    <div class="col-4 col-12-mobile">
                        <article class="item">
                            {/* <a href="#" class="image fit"><img src="images/skill-framework.png" alt="" /></a> */}
                        </article>
                        <header>
                            <h3>FrameWork</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>jQuery</li>
                                <li>React.js</li>
                            </ul>
                        </header>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills