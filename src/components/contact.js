import React, { useState } from 'react';

const Contact = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const handleSubmit = (event) => {
        setIsFormSubmitted(true);
    };
    return (
        <section id="contact">
            <div className="container">

                <header>
                    <h2>Contact</h2>
                </header>

                {isFormSubmitted ? (
                    <p>已成功傳送！感謝您的訊息。</p>
                ) : (
                    <form name="Contact Form" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="Contact Form" />
                        <div class="row">
                            <div class="col-6 col-12-mobile">
                                <input type="text" class="form-control" id="name" name="name" placeholder="Name" />
                            </div>
                            <div class="col-6 col-12-mobile">
                                <input type="email" class="form-control" id="inputEmail" name="email"  placeholder="Email" />
                            </div>
                            <div className="col-12">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                )}
            </div>
        </section>
    )
}

export default Contact
