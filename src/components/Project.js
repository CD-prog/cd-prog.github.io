import React from 'react'

function Project({ imgSrc, cardTitle, cardText, projectLink, githubLink }) {
    return (
        <div className="col d-flex  align-items-stretch">
            <div className="card">
                <img className="card-img-top" src={imgSrc} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardText}</p>
                    <a href={projectLink} className="btn btn-primary">View project</a>
                    <a href={githubLink} className="btn btn-secondary">View on GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Project;