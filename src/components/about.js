import React from 'react';

const imgStyle = {
    padding: '20px'
}

const linkStyle = {
    color: 'purple'
}

function About() {
    return(
        <div class="jumbotron">
            <h1 class="display-4">About Me</h1>
            <img class="headshot" src="public/images/headshot.jpeg" alt="headshot" style={imgStyle}></img>
            <p class="lead">Hello! My name is Swaathy Selvagnanam and I am currently enrolled in the UofT SCS Coding Boot Camp program. In this course, I will learn the core skills needed for a career in web development and technology and purse a career as a Full-Stack Developer. Before choosng to explore a different career path, I had completed my undergrad at Western University and was working in the Healthcare Administration field.</p>
            <hr class="my-4"></hr>
            <button type="button" class="btn btn-dark"><a href="https://drive.google.com/file/d/1SoZ71fn29pwQWFk0L7vXMIJVdXzjLeUQ/view?usp=sharing" style={linkStyle}>View Full Resume</a></button>
        </div>
    )
}

export default About;