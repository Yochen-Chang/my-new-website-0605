import * as React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">

                <header>
                    <h2>Contact</h2>
                </header>

                <form method="post" action="#">
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

            </div>
        </section>
    )
}

export default Contact