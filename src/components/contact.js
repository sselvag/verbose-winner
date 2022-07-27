import React from 'react';

const titleStyle = {
  backgroundColor: 'purple',
  padding: '20px'
}

const linkStyle = {
  color: 'purple',
  padding: '20px'
}

const padding = {
  padding: '10px'
}

function Contact() {
    return(
        <div class="contact">
        <h1 style={titleStyle}>Contact Me</h1>
        <form>
        <div class="form-group" style={padding}>
            <label for="name-input">Your name:</label>
            <input type="text" class="form-control" id="name-input" placeholder="Leave your name" />
          </div>
          <div class="form-group" style={padding}>
            <label for="comment-input">Your message:</label>
            <textarea name="comment" id="comment-input" placeholder="Enter your message here..." class="form-control"></textarea>
          </div>
          <button class="btn btn-dark">Submit Message</button>
        </form>
      </div>
    )
}

export default Contact;