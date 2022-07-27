import React from 'react';

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
            <img class="projectImage" alt={props.name} src={props.image}/>
            </div>

            <div className="cardContent">
                <p className="projectTitle" id="projectTitle">{props.name}</p>
                <p className="projectInfo" id="projectInfo">
                    <a href={props.deploy}><img src="" alt="deployed site" id="project-link"></img></a>
                    <a href={props.repository}><img src="" alt="project repo" id="project-link"></img></a>
                </p>
                <p className="technologies">
                    ({props.technologies})
                </p>
            </div>
        </div>
    )
}

export default ProjectCards;