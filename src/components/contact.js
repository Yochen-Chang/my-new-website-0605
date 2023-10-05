import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">

                <header>
                    <h2>Contact</h2>
                </header>

                <form name="Contact Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-recaptcha="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="Contact Form" />
                    <input name="bot-field" style={{display: 'none'}} />
                    <div className="row">
                        <div className="col-6 col-12-mobile">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                        </div>
                        <div className="col-6 col-12-mobile">
                            <input type="email" className="form-control" id="inputEmail" name="email"  placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                        <ReCAPTCHA sitekey={process.env.RECAPTCHA_SITE_KEY} />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}

const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
    .then((res) => alert('感謝您的訊息，會盡快回覆！'))
    .catch((error) => alert(error));
};

export default Contact
