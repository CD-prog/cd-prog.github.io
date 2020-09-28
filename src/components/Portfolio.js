import React from 'react'
// import Project from './Project'

function Portfolio() {
    return (  
        <>
            <br/>       
            <br/>       
            <main className="row slide-in-elliptic-bottom-bck">
                <div className="col d-flex  align-items-stretch">
                    <div className="card">
                        <img className="card-img-top" src={require("../images/screen-shot.png")} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">RentSocial</h5>
                            <p className="card-text">Search for rental listings and social events</p>
                            <a href="https://cd-prog.github.io/RentSocial/" className="btn btn-primary">View project</a>
                            <a href="https://github.com/CD-prog/RentSocial" className="btn btn-secondary">View on GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col d-flex align-items-stretch">
                    <div className="card">
                        <img className="card-img-top" src={require("../images/trivia-night.png")} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Trivia Night</h5>
                            <p className="card-text">Fun trivia game with stat tracking and top scores</p>
                            <a href="https://morning-ravine-45125.herokuapp.com/" className="btn btn-primary">View on Heroku</a>
                            <a href="https://github.com/CD-prog/trivia-night" className="btn btn-secondary">View on GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="col d-flex align-items-stretch">
                    <div className="card">
                        <img className="card-img-top" src={require("../images/work-day.png")} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Work Day Scheduler</h5>
                            <p className="card-text">A simple calendar app for scheduling your work day</p>
                            <a href="https://cd-prog.github.io/work-day-scheduler/" className="btn btn-primary">View project</a>
                            <a href="https://github.com/CD-prog/work-day-scheduler" className="btn btn-secondary">View on GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col d-flex align-items-stretch">
                    <div className="card">
                        <img className="card-img-top" src={require("../images/screen-shot-5.png")} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">Password generator with user options</p>
                            <a href="https://cd-prog.github.io/password-generator/" className="btn btn-primary">View project</a>
                            <a href="https://github.com/CD-prog/password-generator" className="btn btn-secondary">View on GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="col d-flex align-items-stretch">
                    <div className="card">
                        <img className="card-img-top" src={require("../images/burger.png")} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Eat Da Burger!</h5>
                            <p className="card-text">App that lets users input the names of burgers they'd like to eat.</p>
                            <a href="https://safe-atoll-80103.herokuapp.com/" className="btn btn-primary">View on Heroku</a>
                            <a href="https://github.com/CD-prog/burger" className="btn btn-secondary">View on GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col d-flex align-items-stretch">
                    <div className="card">
                        <img className="card-img-top" src={require("../images/image.png")} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Weather app that uses OpenWeather API</p>
                            <a href="https://cd-prog.github.io/weather-dashboard/" className="btn btn-primary">View project</a>
                            <a href="https://github.com/CD-prog/weather-dashboard" className="btn btn-secondary">View on GitHub</a>
                        </div>
                    </div>
                </div>

            </main>
            </>
    )
}

export default Portfolio;