import React from 'react';

import portfolio from '../components/portfolio.json'
import ProjectCards from './projects';

const titleStyle = {
    backgroundColor: 'purple',
    padding: '20px'
}

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>
}

function Portfolio () {
    return(
        <section>
            <div className="projectHeader">
                <h1 className="projectTitle" style={titleStyle}>Development Portfolio</h1>
            </div>

            <Wrapper id="project-data">
                {portfolio.map((project) => (
                    <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} technologies={project.technologies}/>
                ))}
            </Wrapper>
        </section>
    )
}

export default Portfolio;