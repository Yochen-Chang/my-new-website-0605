import * as React from 'react'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div class="container">

                <header>
                    <h2>Portfolio</h2>
                </header>

                <div class="row">
                    <div class="col-4 col-12-mobile">
                        <article class="item">
                            {/* <a href="#" class="image fit"><img src="images/portfolio-breadshop.png" alt="" /></a> */}
                            <header>
                                <a href="https://loving-archimedes-17098f.netlify.app/">
                                    <h3>Bread shop</h3>
                                </a>
                                <ul>
                                    <li>依據設計師稿件進行切版</li>
                                    <li>適當置放物件，防止跑版</li>
                                    <li>進行 RWD 響應式網頁設計</li>
                                </ul>
                            </header>
                        </article>
                        <article class="item">
                            {/* <a href="#" class="image fit"><img src="images/portfolio-counter.png" alt="" /></a> */}
                            <header>
                                <a href="https://relaxed-davinci-079f7f.netlify.app/index.html">
                                    <h3>Counter</h3>
                                </a>
                                <ul>
                                    <li>依據設計師稿件進行切版</li>
                                    <li>設計導引流程（sitemap）</li>
                                    <li>進行 RWD 響應式網頁設計</li>
                                </ul>
                            </header>
                        </article>
                    </div>
                </div>
                <div class="col-4 col-12-mobile">
                        <article class="item">
                            {/* <a href="#" class="image fit"><img src="images/portfolio-klotski.png" alt="" /></a> */}
                            <header>
                                <a href="https://sleepy-bhaskara-f50b90.netlify.app/">
                                    <h3>華容道 Klotski</h3>
                                </a>
                            <ul>
                                <li>JavaScript 控制方塊選擇、移動</li>
                                <li>使用 Localstorage 紀錄遊戲</li>
                                <li>設置更換外觀功能，自由切換</li>
                            </ul>
                        </header>
                    </article>
                    <article class="item">
                        {/* <a href="#" class="image fit"><img src="images/portfolio-picsum.png" alt="" /></a> */}
                        <header>
                            <a href="https://kind-mestorf-036de9.netlify.app/html2343-project_0918/">
                                <h3>Picsum - random picture</h3>
                            </a>
                            <ul>
                                <li>利用 Bootstrap 建立元素樣式</li>
                                <li>通過 API 抓取 Picsum 圖片資訊</li>
                                <li>進行 RWD 響應式網頁設計</li>
                            </ul>
                        </header>
                    </article>
                </div>
                <div class="col-4 col-12-mobile">
                    <article class="item">
                        {/* <a href="#" class="image fit"><img src="images/portfolio-saicoreel.png" alt="" /></a> */}
                        <header>
                            <a href="http://www.jagon.com.tw/">
                                <h3>Saicoreel</h3>
                            </a>
                            <ul>
                                <li>依據客戶行銷策略、喜好風格，進行設計</li>
                                <li>優化資料呈現方式、頁面指向位置、RWD</li>
                                <li>使用簡單架構、提供報告，以利更新與維護</li>
                            </ul>
                        </header>
                        <div class="popup">
                            <h4>案前協商與討論：</h4>
                            <ul>
                                <li>目標：使網頁內容有效呈現，讓使用者清楚獲得產品相關資訊</li>
                                <li>風格、用色：簡約風格，以黑白為主要用色</li>
                            </ul>
                            <h4>介面設計、指向頁面：</h4>
                            <ul>
                                <li>採用一頁式網頁，並將產品以卡片方式呈現（有效利用大量空間）</li>
                                <li>利用導覽列，快速移動到各區域（快速聚焦）</li>
                                <li>無複雜指向頁（僅首頁與產品頁面）</li>
                            </ul>
                            <h4>Phototype展示：</h4>
                            <ul>
                                <li>使用 Figma 展示網頁介面與指向頁面</li>
                            </ul>
                            <h4>網站架設：</h4>
                            <ul>
                                <li>利用簡單架構進行撰寫，易於日後更新與維護</li>
                                <li>使用 Bootstrap 及 jQuery 相關套件撰寫</li>
                            </ul>
                            <h4>特色：</h4>
                            <ul>
                                <li>提供維護更新報告，以利日後更新、維護</li>
                                <li>響應式網頁，偵測裝置改變排版</li>
                                <li>新增輪播、最新消息區等廣告行銷區域</li>
                                <li>卡片排版，大量展示產品資訊</li>
                                <li>利用主次視圖及排版，有效呈現產品內容</li>
                                <li>空間規劃，增加可利用空間</li>
                                <li>指向頁面扁平化，並利用導覽列快速導引至各區</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section >
    )
}

export default Portfolio