import React from 'react';

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
            <img class="projectImage" alt={props.name} src={props.image}/>
            </div>

            <div className="cardContent">
                <p className="projectTitle" id="projectTitle">{props.name}</p>
                <p className="projectInfo" id="projectInfo"></p>
                <button class="btn btn-light"><a href={props.deploy}>Deployed Application</a></button>
                <button class="btn btn-light"><a href={props.github}>Application Repository</a></button>
                <p className="technologies">
                    ({props.technologies})
                </p>
            </div>
        </div>
    )
}

export default ProjectCards;