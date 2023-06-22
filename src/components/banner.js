import * as React from 'react'

const Banner = () => {
    const handleClick = () => {
        // 點擊事件處理邏輯
        console.log('元素被點擊了！');
    };
    return (
        <section id="banner" className="dark cover">
            <div className="container">

                <header>
                    <h2 className="alt">Hi! I'm <strong>Yochen</strong>, a swing engineer</h2>
                </header>

                <footer>
                    <a href="#portfolio" className="button scroll" onClick={handleClick}>Look my portfolio</a>
                </footer>

            </div>
        </section>
    )
}

export default Banner