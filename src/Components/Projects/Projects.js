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

            <div class="project-title">
                <h2>Projects</h2>
            </div>

            <article id="project-container">

                {/* JAVASCRIPT PROJECT */}
                <div class="quiz">
                    <img src={quizImage} alt="quiz-photo" />
                    <div class="content">
                        <h3>Javascript Quiz</h3>
                        <div class="tech">
                            <div class="tech-html">HTML</div>
                            <div class="tech-css">CSS</div>
                            <div class="tech-js">JAVASCRIPT</div>
                        </div>
                        <div class="description">
                            This application was made to test your javascript knowledge. The app has a timer of 3 minutes
                            for a total of 10 questions.
                            </div>
                        <div class="buttons">
                            <a href="https://codemasterdev.github.io/javascript-quiz/" class="demo" target="_blank">Live
                                Demo</a>
                            <a href="https://github.com/codemasterdev/javascript-quiz" class="github"
                                target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                {/* TASKMASTER PROJECT */}
                <div class="task">
                    <img src={taskImage} alt="taskmaster pro" />
                    <div class="content">
                        <h3>Taskmaster Pro</h3>
                        <div class="tech">
                            <div class="tech-html">HTML</div>
                            <div class="tech-css">CSS</div>
                            <div class="tech-css">BOOTSTRAP</div>
                            <div class="tech-js">JAVASCRIPT</div>
                            <div class="tech-jquery">JQUERY</div>
                        </div>
                        <div class="description">
                            This application was built to keep track of you task that needs to be done. It features a drag
                            and drop feature to quickly edit your task.
                                </div>
                        <div class="buttons">
                            <a href="https://codemasterdev.github.io/taskmaster-pro/" class="demo" target="_blank">Live
                                    Demo</a>
                            <a href="https://github.com/codemasterdev/taskmaster-pro" class="github"
                                target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                {/* RUN BUDDY PROJECT
                 <div class="run-buddy">
                            <img src="./assets/pictures/run-buddy-screenshot.png" alt="run buddy">
                                <div class="content">
                                    <h3>Run Buddy</h3>
                                    <div class="tech">
                                        <div class="tech-html">HTML</div>
                                        <div class="tech-css">CSS</div>
                                    </div>
                                    <div class="description">
                                        A simple static landing page for a personal trainer business. Made with simple html and css.
                                    </div>
                                    <div class="buttons">
                                        <a href="https://codemasterdev.github.io/run-buddy/" class="demo" target="_blank">Live Demo</a>
                                        <a href="https://github.com/codemasterdev/run-buddy" class="github" target="_blank">Github</a>
                                    </div>
                                </div>
                </div>  */}

                {/* PASSWORD GENERATOR PROJECT */}
                <div class="pw-gen">
                    <img src={pwgenImage} alt="password generator" />
                    <div class="content">
                        <h3>Password Generator</h3>
                        <div class="tech">
                            <div class="tech-html">HTML</div>
                            <div class="tech-css">CSS</div>
                            <div class="tech-js">JAVASCRIPT</div>
                        </div>
                        <div class="description">
                            This applicatation creates a random password. It's fully customizable, with a mix of numbers,
                            letters, and special characters. The user has the opportunity to use all 3 for a total of 8-128
                            characters.
                                        </div>
                        <div class="buttons">
                            <a href="https://codemasterdev.github.io/pw-gen/" class="demo" target="_blank">Live Demo</a>
                            <a href="https://github.com/codemasterdev/pw-gen" class="github" target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                {/* WORK DAY SCHEDULER PROJECT */}
                <div class="wrk-day">
                    <img src={wrkdayImage} alt="scheduler-photo" />
                    <div class="content">
                        <h3>Work Day Scheduler</h3>
                        <div class="tech">
                            <div class="tech-html">HTML</div>
                            <div class="tech-css">CSS</div>
                            <div class="tech-bootstrap">BOOTSTRAP</div>
                            <div class="tech-js">JAVASCRIPT</div>
                            <div class="tech-jquery">JQUERY</div>
                        </div>
                        <div class="description">
                            This applicatation was made to keep track of the day, by setting a precise scheduler for the
                            day. The app uses local storage to save input to keep data.
                                        </div>
                        <div class="buttons">
                            <a href="https://codemasterdev.github.io/day-planner/" class="demo" target="_blank">Live
                                                Demo</a>
                            <a href="https://github.com/codemasterdev/day-planner" class="github" target="_blank">Github</a>
                        </div>
                    </div>
                </div>

                {/* WEATHER APP  */}
                <div class="weather">
                    <img src={weatherImage} alt="weather-photo" />
                    <div class="content">
                        <h3>Weather App</h3>
                        <div class="tech">
                            <div class="tech-html">HTML</div>
                            <div class="tech-css">CSS</div>
                            <div class="tech-bootstrap">BOOTSTRAP</div>
                            <div class="tech-js">JAVASCRIPT</div>
                            <div class="tech-jquery">JQUERY</div>
                        </div>
                        <div class="description">
                            An application that was built to track the 5 day weather or any location.
                                            </div>
                        <div class="buttons">
                            <a href="https://codemasterdev.github.io/weather-app/" class="demo" target="_blank">Live
                                                    Demo</a>
                            <a href="https://github.com/codemasterdev/weather-app" class="github" target="_blank">Github</a>
                        </div>
                    </div>
                </div>

            </article>

        </section>

    )
}

ReactDOM.render(<Projects />, document.getElementById("root"))

export default Projects