
import React from 'react'; 

const imgStyle = {
    width: '75px',
    height: '75px',
    padding: '10px'
}

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function Footer() {
    return(
        <div class="footer" id="footer">
            <a href="https://ca.linkedin.com/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" style={imgStyle}></img></a>
            <a href="https://github.com/sselvag"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" style={imgStyle}></img></a>
        </div>
    )
}

export default Footer;