import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
    return (
        <section id="about">
            <div className="container">

                <header>
                    <h2>About Me</h2>
                </header>

                <div id="chatBoxBg" className="container vw-70">
                    <div id="chat1" className="mychat flexSSRow animation-fadeIn">
                        <StaticImage src="../images/Avator-Me.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-rb">
                                你好，我是張祐誠，現在正積極尋找前端工程師的職缺！
                            </div>
                    </div>
                    <div id="chat2" className="femaleChat flexESRow">
                        <StaticImage src="../images/Avator-Female.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb">
                                咦？為什麼會想找前端工程師的職缺呢？
                            </div>
                    </div>
                    <div id="chat3" className="myChat flexSSRow">
                        <StaticImage src="../images/Avator-Me.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-rb">
                                前一份工作中，想在工作上擁有更好的專業能力，所以在台大資訊系統訓練班進修軟體技術的課程，當時接觸到網頁設計相關的課程，覺得自己很適合在方面發展。
                                <br />
                                    所以在離職之後，持續進修，便開始準備踏上前端工程師這條路。
                            </div>
                    </div>
                    <div id="chat4" className="maleChat flexESRow">
                        <StaticImage src="../images/Avator-Male.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb">
                                覺得自己很適合？為什麼會這麼說呢？
                            </div>
                    </div>
                    <div id="chat5" className="myChat flexSSRow">
                        <StaticImage src="../images/Avator-Me.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-rb">
                                其實，最早接觸到程式是在大學、研究所期間。 <br />
                                    因為研究、模擬上的需要常常撰寫程式碼，當時就覺通過程式碼與電腦溝通很有趣，但軟體主要是以Matlab、LabView...為主，看到的輸出常常是一些非常理論的圖表或數字，有種冷冰冰的感覺。
                            </div>
                            <div className="chatBox chatBoxDiv dis-ib m-1 p-1 shadow-rb">
                                然而，網頁設計有著不同的目的，主要重視畫面的呈現、使用者的互動，撰寫程式時，就好像在製作一個藝術作品一樣，尤其如果網頁能被使用者覺得漂亮、有趣、操作流暢，真的是非常有成就感！<br />
                                    前端工程師，不僅可以滿足我撰寫程式碼的渴望，呈現的樣貌也是自己所喜愛的，真的是一舉兩得！
                            </div>
                    </div>
                    <div id="chat6" className="femaleChat flexESRow">
                        <StaticImage src="../images/Avator-Female.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb">
                                恭喜你，看來你找到了一份適合自己的工作呢！ <br />
                                    剛好你說到了大學和研究所，能跟我們說說，那時候的經歷嗎？
                            </div>
                    </div>
                    <div id="chat7" className="myChat flexSSRow">
                        <StaticImage src="../images/Avator-Me.png" alt="" className="avator m-1" />
                        <div className="chatBox dis-ib m-1 p-1 shadow-rb">
                            我畢業於 臺灣大學應用力學所 和 臺灣海洋大學機械與機電工程學系。
                            <br />
                            大學時期，主要是修習一些力學、機械相關的課程，當時得畢業專題報告是使用
                            Matlab
                            來模擬流場在不同阻礙物的情況，而這些知識、技術也奠定了我第一份工作的堅實基礎。
                            <br />
                            研究所時期，除了專業技術（力學、電學）的深入，還有最著名的兩堂實驗課
                            — 應用力學實驗、電子學實驗，不同於大學，讓理論套用在實務當中。
                        </div>
                        <div className="chatBox chatBoxDiv dis-ib m-1 p-1 shadow-rb">
                            此外，我的研究室主要在研究
                            <strong id="piezo"><a href="https://zh.wikipedia.org/wiki/%E5%A3%93%E9%9B%BB%E6%95%88%E6%87%89" target="_blank" rel="noopener" title="Wiki-壓電效應">壓電效應</a> </strong>，當時指導教授為了讓學生能夠獨當一面，研究的內容包含理論、模擬、和實驗，在這樣的魔鬼訓練下，不得不培養起「自己尋找問題，並且把它解決」的能力
                            XD，非常感謝教授那時候的訓練，讓我在日後的工作上受用無窮。
                        </div>
                    </div>
                    <div id="chat8" className="maleChat flexESRow">
                        <StaticImage src="../images/Avator-Male.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb">
                                哇！早就聽聞台大應力所是天下第一所，培育非常的精實呢！ <br />
                                    看了你的個人經歷，你前兩份的工作都不是軟體相關的經歷，能跟我們稍微介紹一下嗎？
                            </div>
                    </div>
                    <div id="chat9" className="myChat flexSSRow">
                        <StaticImage src="../images/Avator-Me.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-rb">
                                是的，我曾任職過 機構工程師 和 專利工程師。 <br />
                                    非常幸運，在機構工程師時，參與到了兩個能夠進行到量產的專案（HP AIO
                                    G6 、HP 商用型 NB
                                    G9），並且可以參與部件的設計，那時候才發現學校裡學的知識只能當作參考，實務上更多的是
                                    Know How 與 經驗。 從產品的規格討論、雛形設計，到模型驗證、測試、解
                                    Issue，最後的供應鍊、生產效率...
                                    種種經歷和酸甜苦辣，讓我知道產品的誕生流程，也學習到了一些職場上的待人、處事。
                            </div>
                            <div className="chatBox chatBoxDiv dis-ib m-1 p-1 shadow-rb">
                                然而，在專利工程師時，因為環境的不同，又是另一種面貌，這個領域主要是以法律、文字表達為主，說真的，剛入職的時候真的有些不習慣。
                                雖然任職期間不長，但能接觸到的業務也是通通經歷過了一遍，從開始的洽案業務、申請前準備、專利撰寫、專利維護與迴避、專利檢舉、翻譯...，在過程中也讓我瞭解到，表達的重要性，同一件事有不同的表達方式，而在不同的表達方式之下，會產生不同的結果。
                            </div>
                            <div className="chatBox chatBoxDiv dis-ib m-1 p-1 shadow-rb">
                                在兩份工作上學習到了很多，相信這些都能幫助我更勝任前端工程師一職。
                            </div>
                    </div>
                    <div id="chat10" className="maleChat flexESRow">
                        <StaticImage src="../images/Avator-Male.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb">
                                真的，實務上突發狀況真的很多，學校的知識也沒有教解決的
                                SOP，常常靠的是自己的臨機應變～
                            </div>
                    </div>
                    <div id="chat11" className="femaleChat flexESRow">
                        <StaticImage src="../images/Avator-Female.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb">
                                我是對表達方式很有感覺，明明報告同一件事情，有些人的說法，真的很難讓你不認同他！
                                <br />
                                    那你在這兩份工作上，有學習到什麼能對前端工程師產生幫助的事情嗎？
                            </div>
                    </div>
                    <div id="chat12" className="myChat flexSSRow">
                        <StaticImage src="../images/Avator-Me.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-rb">
                                在之前的工作經歷中，覺得對前端工程師幫助最大的就是「系統化」。
                                <br />
                                    機構工程師和專利工程師，工作內容其實很像，都是要生產產品（電子產品、智慧財產），其中一個用3D繪圖程式，而另一個是用文字。
                                    <br />
                                        為了能讓產品更好的呈現、日後維護的方便，如何有系統地生產變成一件很重要的事，依照完成方向來制訂架構，將相關的事件歸納整理，並且考慮到未來做事前處理、預防。
                                        <br />
                                            這些概念，讓我很成功的在程式碼上，減少重工、不需要的部分，並且讓程式碼可重複使用，不僅僅提升我的撰寫速度，更讓程式碼的可維護性提升。
                                        </div>
                    </div>
                    <div id="chat13" className="maleChat flexESRow">
                        <StaticImage src="../images/Avator-Male.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb">
                                系統化，也就是所謂的模組化，對於程式碼真的是一個很重要的觀念。
                                <br />
                                    看到你曾經有接洽過一個網路設計的案件，能跟我們分享一下嗎？
                            </div>
                    </div>
                    <div id="chat14" className="myChat flexSSRow">
                        <StaticImage src="../images/Avator-Me.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-rb">
                                其實，這是我第一個實際上線的案件，那時因為認識的人覺得工作室的網站太陽春了，想要重新設計，所以能夠有機會可以接到這個案件。
                                <br />
                                    當時，剛開始的時候先和客戶討論想要改善的地方、網頁的風格樣式。
                                    <br />
                                        客戶表示首頁的產品資訊不清不楚，而且導引的方式也很奇怪，風格的話想要簡約的感覺。
                                    </div>
                                    <div className="chatBox chatBoxDiv dis-ib m-1 p-1 shadow-rb">
                                        在討論過後，我把自己的構想以 Wirefarme
                                        的形式呈現出來，將客戶的網頁地圖（site
                                        map）扁平化處理，以首頁為核心並導引至產品頁面、站外連結。 <br />
                                            產品的部分，除了新增一個橫福輪播的廣告區，產品資訊採用卡片的形式呈現，除了能夠使造訪者能夠聚焦在產品上，有效空間也變大了很多。
                                    </div>
                                    <div className="chatBox chatBoxDiv dis-ib m-1 p-1 shadow-rb">
                                        當客戶確認後，再以 Figma 來呈現
                                        Phototype，網頁風格採用黑白色調為主色，並輔以跳色。 <br />
                                            最後再依據客戶的需求進行調整、優化，在網站重新上線後，造訪者和觸及率也提升了許多，客戶也十分滿意這次的結果。
                                            這次經驗加強了我在實務上的不足，相信之後在接案上也會更加效率、熟悉。
                                    </div>
                    </div>
                    <div id="chat15" className="femaleChat flexESRow">
                        <StaticImage src="../images/Avator-Female.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb">
                                有接案經驗，除了能夠了解網頁設計的流程，也可以提升臨機應變的能力呢！那，關於前端工程師的未來職涯是怎麼規劃的？
                            </div>
                    </div>
                    <div id="chat16" className="myChat flexSSRow">
                        <StaticImage src="../images/Avator-Me.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-rb">
                                因為本身不是資訊科背景的，所以通過自我進修來提昇自己程式撰寫的能力，導致在實務經驗上還需要再磨練。
                                <br />
                                    前 1
                                    年，通過參與專案來提昇網頁設計的實務經驗，夠快速成為了一個獨當一面的前端工程師，使自己在與設計師、後端工程師的配合上，能有一定的默契，並熟習前端技術與其餘領域知識。
                                    <br />
                                        前 3
                                        年，熟稔各式前端知識、技術，並在專案上有自己的一套理解與想法，能夠理解設計師、後端工程師的技術，取得各自協作的平衡點。
                                        <br />
                                            前 5
                                            年，能夠駕馭各種前、後端技術，擁有平面設計的能力，成為一個全端工程師。
                                        </div>
                                        <div className="chatBox chatBoxDiv dis-ib m-1 p-1 shadow-rb">
                                            總言之，就是不斷精進本身領域的技術、擁有自己的一套方法，並廣泛學習各領域的知識。
                                        </div>
                    </div>
                    <div id="chat17" className="maleChat flexESRow">
                        <StaticImage src="../images/Avator-Male.png" alt="" className="avator m-1" />
                            <div className="chatBox dis-ib m-1 p-1 shadow-lb typing">
                                輸入中......
                            </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About