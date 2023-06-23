import React, { useState } from 'react';

const Contact = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        // event.preventDefault();
        // 在這裡處理表單提交的邏輯，例如發送郵件或儲存資料的後端處理

        // 設定表單提交成功的狀態
        setIsFormSubmitted(true);
    };

    return (
        <section id="contact">
            <div className="container">

                <header>
                    <h2>Contact</h2>
                </header>

                {isFormSubmitted ? (
                    <p>訊息訊息已成功發送，感謝您！</p>
                ) : (
                    <form name="contact" method="POST" data-netlify="true" 
                    data-netlify-honeypot="bot-field" action="/success/"
                    onSubmit="submit">
                        <input class="d-none" name="bot-field" />
                        <div class="form-row">
                            <div class="form-group col-md-6 mt-3">
                                <label for="name">Your Name</label>
                                <input type="text" class="form-control" id="name" name="name" />
                              </div>
                          <div class="form-group col-md-6 mt-3">
                            <label for="inputEmail">Email</label>
                            <input type="email" class="form-control" id="inputEmail" name="email" />
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Send</button>
                      </form>
                )}

            </div>
        </section>
    )
}

export default Contact
