import React from 'react';
import ReactDOM from 'react-dom';
import "../Header/header.css";
import portLogo from "../../pictures/port-logo.png"


function Header() {
    return (

        <section id="welcome">

            <nav>
                <a href="/">
                    <img src={portLogo} alt="logo"></img>
                </a>

                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact-footer">Contact</a></li>
                </ul>
            </nav>

            <article class="header-content">

                <div class="name">

                    <h1>Devon Webster</h1>

                    <div class="social-icons">

                        <a href="https://github.com/codemasterdev" target="_blank">.
                            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                        </a>
                        <a href="https://www.linkedin.com/in/dw95" target="_blank">.
                                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"></img>
                        </a>
                    </div>
                </div>

                <div class="info">

                    <div class="role">
                        <p>Front End Web Developer</p>
                    </div>

                    <div class="content-body">
                        <p>I am passionate about creating intuitive and dynamic user experience. Contributing to the
                        creation
                        of
                        high-quality products that are user-centered is what drives my work ethic. Problem-solving,
                        attention to
                        details, and creativity are my main principles, therefore having an opportunity to apply
                        these
                        in my
                        job, be
                        in continuous and building new skills is my aim.
                        </p>

                        <div class="buttons">
                            <a href="#projects" class="btn">View Projects</a>
                            <a class="btn" href="mailto:d.webster05@yahoo.com">Contact Me</a>
                        </div>

                    </div>
                </div>
            </article>

        </section>

    );
}


ReactDOM.render(<Header />, document.getElementById("root"));

export default Header
