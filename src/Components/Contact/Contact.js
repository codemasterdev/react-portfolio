import React from 'react';
import ReactDOM from 'react-dom';
import '../Contact/contact.css';

function Contact() {
    return (

        <section id="contact-footer">

            <div className="contact-title">
                <h2>Reach Out</h2>
            </div>

            <article className="wrapper">

                {/* <!-- FORM --> */}
                <form className="contact form" action="POST" method="POST" name="contact" data-netlify="true">

                    <div className="details">
                        <input type="text" name="name" placeholder="Full name" aria-label="name" required />
                        <input type="text" name="email" placeholder="Email" aria-label="email" required />
                        <input type="text" name="number" placeholder="Phone number" aria-label="phone number" required />
                    </div>

                    <div className="message">
                        <p>Message</p>
                        <textarea rows={4} name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                {/* <!-- CONTACT DETAILS --> */}
                <div className="contact-info">
                    <h3>Let's Chat</h3>

                    <p className="contact-body">
                        I'm open to working on projects or collaborating with people, I'd love to hear your ideas and work
                        with you.
                    </p>

                    <div className="socials">
                        <a href="mailto:d.webster05@yahoo.com">Email: D.webster05@yahoo.com</a>
                        <br />
                        <a href="https://www.linkedin.com/in/dw95" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
                    </div>

                    <div className="buttons">
                        <a href="https://github.com/codemasterdev/portfolio/blob/main/resume/Devon%20Webster%20Resume.pdf"
                            target="blank" className="resume">View Resume</a>
                        <a href="https://github.com/codemasterdev" target="_blank" className="github"
                            rel="noreferrer">View Github</a>

                    </div>
                </div>

            </article>

        </section>

    )
}

ReactDOM.render(<Contact />, document.getElementById("root"));

export default Contact