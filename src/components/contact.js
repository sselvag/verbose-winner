import React from 'react';

function Contact() {
    return(
        <div class="contact">
        <h2>Contact Me</h2>
        <form>
          <div class="form-group">
            <label for="name-input">Your name:</label>
            <input type="text" class="form-control" id="name-input" placeholder="Leave your name" />
          </div>
          <div class="form-group">
            <label for="comment-input">Your message:</label>
            <textarea name="comment" id="comment-input" class="form-control"></textarea>
          </div>
          <button class="btn btn-success">Submit Message</button>
        </form>
      </div>
    )
}

export default Contact;