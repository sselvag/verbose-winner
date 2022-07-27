import React from 'react';

function Resume() {
    return(
        <section class="mb-4">
            <h1 className="resume">Take a look at my Resume Below!</h1>
            <button type="button" class="btn btn-light"><a href="https://docs.google.com/document/d/1fC0liWc7uWGeM7HDufqAhW7m7SV6LI9gwRWwGMtEfsc/edit?usp=sharing">Click Here to view my Resume</a></button>
            
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Me
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Hello! My name is Swaathy Selvagnanam and I am currently enrolled in the UofT SCS Coding Boot Camp program. In this course, I will learn the core skills needed for a career in web development and technology and purse a career as a Full-Stack Developer. Before choosng to explore a different career path, I had completed my undergrad at Western University and was working in the Healthcare Administration field.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Front End Skills
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Back End Skills
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </div>
    </div>
  </div>
</div>
        </section>
    )
}

export default Resume;