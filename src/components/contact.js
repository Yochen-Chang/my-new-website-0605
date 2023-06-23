import React, { useState } from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">

                <header>
                    <h2>Contact</h2>
                </header>

                <form name="Contact Form" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="Contact Form" />
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
                    <button type="submit">Send</button>
                </form>

            </div>
        </section>
    )
}

export default Contact
