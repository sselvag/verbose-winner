import React from 'react';
const linkStyle = {
  color: 'red',
  padding: '20px'
}

const padding = {
  padding: '10px'
}

const titleStyle = {
  backgroundColor: 'purple',
  padding: '20px',
}

function Resume() {
  return(
  <section class="mb-4" style={padding}>
    <h2 className="skills" style={titleStyle}>FRONT END SKILLS</h2>
    <p>HTML</p>
    <p>CSS</p>
    <p>jQuery</p>
    <p>IndexedDB</p>

    <h2 className="skills" style={titleStyle}>BACK END SKILLS</h2>
    <p>Express.js</p>
    <p>SQL (mySQL, sequelize)</p>
    <p>noSQL (mongoDB, mongoose)</p>
    <p>APIs (RESTful, server-side, third-party)</p>

    <button type="button" class="btn btn-dark"><a href="https://docs.google.com/document/d/e/2PACX-1vS1sb1ENhpV3Qd6q3jYfIkbGUKogv02R36VyANqCtuNFK4Xtb166H1fDrKK8HkDcrjkzKQXRZaTv7UU/pub" style={linkStyle}>View Full Resume</a></button>
  </section>
)}

export default Resume;