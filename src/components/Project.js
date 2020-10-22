import React from 'react'

function Project({ imgSrc, cardTitle, cardText, tech, projectLink, githubLink }) {
    return (
        <div className="col d-flex  align-items-stretch">
            <div className="card">
                <img className="card-img-top" src={imgSrc} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{cardTitle}</h4>
                    <h5 className="card-text">{cardText}</h5>
                    <p className="tech">{tech}</p>
                    <div className="text-center">
                    <a href={projectLink} target="_blank"rel="noopener noreferrer" className="btn btn-primary">View project</a>
                    <a href={githubLink} target="_blank"rel="noopener noreferrer" className="btn btn-secondary">View on GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
