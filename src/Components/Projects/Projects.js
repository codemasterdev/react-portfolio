import React from 'react';
import ReactDOM from 'react-dom';
import '../Projects/projects.css';
import quizImage from '../../pictures/quiz.png';
import taskImage from '../../pictures/task.png';
import pwgenImage from '../../pictures/pw-gen.png';
import wrkdayImage from '../../pictures/wrk-day.png'
import weatherImage from '../../pictures/weather.png'

function Projects() {
    return (

        <section id="projects">

            <div className="project-title">
                <h2>Projects</h2>
            </div>

            <article id="project-container">

                {/* JAVASCRIPT PROJECT */}
                <div className="quiz">
                    <img src={quizImage} alt="quiz-photo" />
                    <div className="content">
                        <h3>Javascript Quiz</h3>
                        <div className="tech">
                            <div className="tech-html">HTML</div>
                            <div className="tech-css">CSS</div>
                            <div className="tech-js">JAVASCRIPT</div>
                        </div>
                        <div className="description">
                            This application was made to test your javascript knowledge. The app has a timer of 3 minutes
                            for a total of 10 questions.
                            </div>
                        <div className="buttons">
                            <a href="https://codemasterdev.github.io/javascript-quiz/" className="demo" target="_blank">Live
                                Demo</a>
                            <a href="https://github.com/codemasterdev/javascript-quiz" className="github"
                                target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                {/* TASKMASTER PROJECT */}
                <div className="task">
                    <img src={taskImage} alt="taskmaster pro" />
                    <div className="content">
                        <h3>Taskmaster Pro</h3>
                        <div className="tech">
                            <div className="tech-html">HTML</div>
                            <div className="tech-css">CSS</div>
                            <div className="tech-css">BOOTSTRAP</div>
                            <div className="tech-jquery">JQUERY</div>
                        </div>
                        <div className="description">
                            This application was built to keep track of you task that needs to be done. It features a drag
                            and drop feature to quickly edit your task.
                                </div>
                        <div className="buttons">
                            <a href="https://codemasterdev.github.io/taskmaster-pro/" className="demo" target="_blank">Live
                                    Demo</a>
                            <a href="https://github.com/codemasterdev/taskmaster-pro" className="github"
                                target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                {/* PASSWORD GENERATOR PROJECT */}
                <div className="pw-gen">
                    <img src={pwgenImage} alt="password generator" />
                    <div className="content">
                        <h3>Password Generator</h3>
                        <div className="tech">
                            <div className="tech-html">HTML</div>
                            <div className="tech-css">CSS</div>
                            <div className="tech-js">JAVASCRIPT</div>
                        </div>
                        <div className="description">
                            This applicatation creates a random password. It's fully customizable, with a mix of numbers,
                            letters, and special characters. The user has the opportunity to use all 3 for a total of 8-128
                            characters.
                                        </div>
                        <div className="buttons">
                            <a href="https://codemasterdev.github.io/pw-gen/" className="demo" target="_blank">Live Demo</a>
                            <a href="https://github.com/codemasterdev/pw-gen" className="github" target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                {/* WORK DAY SCHEDULER PROJECT */}
                <div className="wrk-day">
                    <img src={wrkdayImage} alt="scheduler-photo" />
                    <div className="content">
                        <h3>Work Day Scheduler</h3>
                        <div className="tech">
                            <div className="tech-html">HTML</div>
                            <div className="tech-css">CSS</div>
                            <div className="tech-bootstrap">BOOTSTRAP</div>
                            <div className="tech-jquery">JQUERY</div>
                        </div>
                        <div className="description">
                            This applicatation was made to keep track of the day, by setting a precise scheduler for the
                            day. The app uses local storage to save input to keep data.
                                        </div>
                        <div className="buttons">
                            <a href="https://codemasterdev.github.io/day-planner/" className="demo" target="_blank">Live
                                                Demo</a>
                            <a href="https://github.com/codemasterdev/day-planner" className="github" target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                {/* WEATHER APP  */}
                <div className="weather">
                    <img src={weatherImage} alt="weather-photo" />
                    <div className="content">
                        <h3>Weather App</h3>
                        <div className="tech">
                            <div className="tech-html">HTML</div>
                            <div className="tech-css">CSS</div>
                            <div className="tech-bootstrap">BOOTSTRAP</div>
                            <div className="tech-jquery">JQUERY</div>
                        </div>
                        <div className="description">
                            An application that was built to track the 5 day weather or any location.
                                            </div>
                        <div className="buttons">
                            <a href="https://codemasterdev.github.io/weather-app/" className="demo" target="_blank">Live
                                                    Demo</a>
                            <a href="https://github.com/codemasterdev/weather-app" className="github" target="_blank">Github</a>
                        </div>
                    </div>
                </div>

            </article>

        </section>

    )
}

ReactDOM.render(<Projects />, document.getElementById("root"))

export default Projects