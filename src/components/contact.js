import React, { useState } from 'react';

const Contact = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    <p>表單已成功提交！感謝您的訊息。</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
                            <div className="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
                            <div className="col-12">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <input type="submit" value="Send Message" />
                            </div>
                        </div>
                    </form>
                )}

            </div>
        </section>
    )
}

export default Contact
