import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Portfolio = () => {
    function popup_active_handler(event){
        const target = $(event.currentTarget);
        const pf_card = $(target).closest('.pf-card');
        const popup = $(pf_card).find('.popup-content');
        
        $(popup).addClass('active');
    }
    function popup_close_handler(event){
        const target = $(event.currentTarget);
        const popup_content = $(target).closest('.popup-content');
        
        $(popup_content).removeClass('active');
    }
    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-12-mobile">
                        <article className="item pf-card">
                            <a href="#" className="image fit"><StaticImage src="../images/portfolio-breadshop.png" alt="" /></a>
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
                        <article className="item pf-card">
                            <a href="#" className="image fit"><StaticImage src="../images/portfolio-counter.png" alt="" /></a>
                            <header>
                                <a href="https://relaxed-davinci-079f7f.netlify.app/index.html">
                                    <h3>Counter</h3>
                                </a>
                                <ul>
                                    <li>依據設計師稿件進行切版</li>
                                    <li>設計導引流程（sitem pf-cardap）</li>
                                    <li>進行 RWD 響應式網頁設計</li>
                                </ul>
                            </header>
                        </article>
                    </div>
                    <div className="col-4 col-12-mobile">
                            <article className="item pf-card">
                                <a href="#" className="image fit"><StaticImage src="../images/portfolio-klotski.png" alt="" /></a>
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
                        <article className="item pf-card">
                            <a href="#" className="image fit"><StaticImage src="../images/portfolio-picsum.png" alt="" /></a>
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
                    <div className="col-4 col-12-mobile">
                        <article className="item pf-card">
                            <a href="#" className="image fit"><StaticImage src="../images/portfolio-saicoreel.png" alt="" /></a>
                            <header>
                                <a href="http://www.jagon.com.tw/">
                                    <h3>Saicoreel</h3>
                                </a>
                                <ul>
                                    <li>依據客戶行銷策略、喜好風格，進行設計</li>
                                    <li>優化資料呈現方式、頁面指向位置、RWD</li>
                                    <li>使用簡單架構、提供報告，以利更新與維護</li>
                                </ul>
                                <button className="popup-button button" onClick={popup_active_handler}>More Information</button>
                            </header>
                            <div className="popup-content">
                                <div className="show-box flexCCRow">
                                <div className="show-title flexCCCol">
                                <h3>釣具用品網 - 重新設計</h3>
                                <div className="cross-box flexCCCol" onClick={popup_close_handler}>
                                    <div className="line"></div>
                                </div>
                                <div className="divider"></div>
                                </div>
                                <div className="show-content flexCCCol">
                                    <div className="show-block show-70">
                                        <div className="flowchat-box">
                                        <h3>案前協商與討論：</h3>
                                        <p><strong>目標：</strong>使網頁內容有效呈現，讓使用者清楚獲得產品相關資訊</p>
                                        <p><strong>風格、用色：</strong>簡約風格，以黑白為主要用色</p>
                                        </div>
                                        <div className="flowchat-box">
                                        <h3>介面設計、指向頁面：</h3>
                                        <p>- 採用一頁式網頁，並將產品以卡片方式呈現（有效利用大量空間）</p>
                                        <p>- 利用導覽列，快速移動到各區域（快速聚焦）</p>
                                        <p>- 無複雜指向頁（僅首頁與產品頁面）</p>
                                        </div>
                                        <div className="flowchat-box">
                                        <h3>Phototype展示：</h3>
                                        <p>- 使用 Figma 展示網頁介面與指向頁面</p>
                                        </div>
                                        <div className="flowchat-box">
                                        <h3>網站架設：</h3>
                                        <p>- 利用簡單架構進行撰寫，易於日後更新與維護</p>
                                        <p>- 使用 Bootstrap 及 jQuery 相關套件撰寫</p>
                                        </div>
                                    </div>
                                    <div className="show-block">
                                        <h5 className="flexCCRow"><StaticImage src="../images/Saicoreel/design.png" alt=""/>指向頁面扁平化，並利用導覽列快速導引至各區</h5>
                                        <StaticImage src="../images/Saicoreel/Sitemap.png" className="show-70" alt=""/>
                                        <StaticImage src="../images/Saicoreel/SaicoReel sitemap-simple.png" className="show-70" alt=""/>
                                    </div>
                                    <div className="show-block">
                                        <h5 className="flexCCRow"><StaticImage src="../images/Saicoreel/design.png" alt=""/>空間規劃，增加可利用空間</h5>
                                        <StaticImage src="../images/Saicoreel/inf-area.png" className="show-70" alt=""/>
                                    </div>
                                    <div className="show-block">
                                        <h5 className="flexCCRow"><StaticImage src="../images/Saicoreel/design.png" alt=""/>利用主次視圖及排版，有效呈現產品內容</h5>
                                        <StaticImage src="../images/Saicoreel/product-page.png" className="show-70" alt=""/>
                                    </div>
                                    <div className="show-block">
                                        <h5 className="flexCCRow"><StaticImage src="../images/Saicoreel/design.png" alt=""/>卡片排版，大量展示產品資訊</h5>
                                        <StaticImage src="../images/Saicoreel/product-show.png" className="show-50" alt=""/>
                                    </div>
                                    <div className="show-block">
                                        <h5 className="flexCCRow"><StaticImage src="../images/Saicoreel/design.png" alt=""/>新增輪播、最新消息區等廣告行銷區域</h5>
                                        <StaticImage src="../images/Saicoreel/carousel-animation.gif" className="show-70" alt=""/>
                                    </div>
                                    <div className="show-block">
                                        <h5 className="flexCCRow"><StaticImage src="../images/Saicoreel/design.png" alt=""/>響應式網頁，偵測裝置改變排版</h5>
                                        <StaticImage src="../images/Saicoreel/RWD.png" className="show-70" alt=""/>
                                    </div>
                                    <div className="show-block">
                                        <h5 className="flexCCRow"><StaticImage src="../images/Saicoreel/design.png" alt=""/>提供維護更新報告，以利日後更新、維護</h5>
                                        <StaticImage src="../images/Saicoreel/PPT.png" className="show-70" alt=""/>
                                    </div>
                                    </div>
                                    <a target="_blank" rel="noopener" href="http://www.jagon.com.tw/">
                                        <button>
                                            Visit the website
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Portfolio