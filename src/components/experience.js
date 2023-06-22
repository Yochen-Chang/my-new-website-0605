import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                
                <div className="work-area">
                    <h3 className="areaTitle ta-c">Work Experience</h3>
                    <div className="workDiv flexBCRow unAnimate">
                        <StaticImage src="../images/experience-LiCai_logo.jpeg" className="exp-img" alt="" />
                            <div className="workContent">
                                <h4 className="contentTitle">聯誠事務所 專利工程師</h4>
                                <h5 className="contentSubtitle">文字撰寫 / 邏輯思考 / 資料搜尋</h5>
                                <ul>
                                    <li>
                                        <strong className="tag">國際化</strong>
                                        <p>協助申請美國專利稿件</p>
                                    </li>
                                    <li>
                                        <strong className="tag">分析答辯</strong>
                                        <p>分析駁回意見書，撰寫答辯稿</p>
                                    </li>
                                    <li>
                                        <strong className="tag">擴展業務</strong>
                                        <p>爭取新領域的專利案件申請</p>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className="workDiv flexBCRowr unAnimate">
                        <StaticImage src="../images/experience-IEC_logo.jpeg" className="exp-img" alt="" />
                            <div className="workContent">
                                <h4 className="contentTitle">英業達 機構工程師</h4>
                                <h5 className="contentSubtitle">產品設計 / 跨部門溝通 / 品質管控</h5>
                                <ul>
                                    <li>
                                        <strong className="tag">專案執行力</strong>
                                        <p>參與量產機種專案（HP AIO, HP NB）</p>
                                    </li>
                                    <li>
                                        <strong className="tag">效率提升</strong>
                                        <p>協同軟體部門，開發自動化系統</p>
                                    </li>
                                    <li>
                                        <strong className="tag">系統力</strong>
                                        <p>構建系統，增進系統可維護性</p>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>

                <div className="edu-area">
                    <h3 className="areaTitle ta-c">Education</h3>
                    <div className="eduDiv flexBCRow unAnimate">
                        <StaticImage src="../images/experience-ntu_logo.jpeg" className="exp-img" alt="" />
                            <div className="eduContent">
                                <h4 className="contentTitle">國立台灣大學應用力學所</h4>
                                <h5 className="contentSubtitle">機電效應 / 壓電材料</h5>
                                <ul>
                                    <li>
                                        <strong className="tag">領導力</strong>
                                        <p>領導隊員，完成國際人才發展體驗營成發表演</p>
                                    </li>
                                    <li>
                                        <strong className="tag">表達力</strong>
                                        <p>進行逾百人規模演講</p>
                                    </li>
                                    <li>
                                        <strong className="tag">失敗的勇氣</strong>
                                        <p>實施社會實驗，體驗挫折</p>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div className="eduDiv flexBCRowr unAnimate">
                        <StaticImage src="../images/experience-ntou_logo.jpeg" className="exp-img" alt="" />
                            <div className="eduContent">
                                <h4 className="contentTitle">國立台灣海洋大學機械與機電工程學系</h4>
                                <h5 className="contentSubtitle">機械設計 / 電機控制 / 力學</h5>
                                <ul>
                                    <li>
                                        <strong className="tag">團隊力</strong>
                                        <p>參與熱舞社成發表演</p>
                                    </li>
                                    <li>
                                        <strong className="tag">行銷力</strong>
                                        <p>修習創意行銷營課程</p>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience