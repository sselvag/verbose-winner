import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail';


const titleStyle = {
  backgroundColor: 'purple',
  padding: '20px'
}

const linkStyle = {
  color: 'purple',
}

const padding = {
  padding: '10px'
}

const errorStyle = {
  backgroundColor: 'black',
  color: 'red'
}

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const { name, email, message } = formState;
  function handleChange(e) {
    if (e.target.name === 'email') {
      const validate = validateEmail(e.target.value);
      if (!validate) {
        setErrorMessage('Please enter a valid email.');
      } else {
        setErrorMessage('')
      }
    } else if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`)
    } else setErrorMessage();
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return(
    <div class="contact" style={padding}>
      <h1 style={titleStyle}>Contact Me</h1>
      <form>
        <div class="form-group" style={padding}>
          <label htmlFor="name">Your name:</label>
          <input type="text" class="form-control" id="name" placeholder="Leave your name here..." defaultValue={name} onBlur={handleChange}/>
        </div>
        <div class="form-group" style={padding}>
          <label htmlFor="email">Your email:</label>
          <textarea name="email" id="email" placeholder="Enter your email here..." class="form-control" defaultValue={email} onBlur={handleChange}></textarea>
        </div>
        <div class="form-group" style={padding}>
          <label htmlFor="message">Your message:</label>
          <textarea name="message" id="message" placeholder="Enter your message here..." class="form-control" defaultValue={message} onBlur={handleChange}></textarea>
        </div>
        {errorMessage && (
          <div style={errorStyle}>
            <h3>Form Errors:</h3>
            <p class="error">{errorMessage}</p>
          </div>
        )}
        <button class="btn btn-dark" style={linkStyle} onSubmit={handleSubmit}>Submit Message</button>
      </form>
    </div>
  )
}

export default Contact;