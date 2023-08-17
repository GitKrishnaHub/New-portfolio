import React from "react";
import "../Css/Contact.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { contact } from '../images/index'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleOnName = (e) => {
    setName(e.target.value);
    setMessage('')
  }
  const handleOnChange = (e) => {
    setEmail(e.target.value);
    setMessage('')
  }
  const handleOnPhone = (e) => {
    setPhone(e.target.value);
    setMessage('')
  }
  const emailvalidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9*-]+\.[a-z{2,8}](.[a-z{2,8}])?/g
    if (regEx.test(email)) {
      setMessage("Email is Valid")
    } else if (!regEx.test(email) && email) {
      setMessage("Email is Invalid")
    } else {
      setMessage("")
    }
  }
  const form = useRef('');
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8cposth', 'template_75imelf', form.current, 'XrG0JvZiZRXcD9SQB')
      .then((result) => {
        alert("Message Sent")
      }, (error) => {

        alert("Message Failed")
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="heading">
        <p>
          Contact<span> Us</span>
        </p>
        <h4>My Business Contact Details !</h4>
      </div>
      <div className="contact-data">
      <form className="contact-info" ref={form} onSubmit={sendEmail}>
        <div className="personal-data">
          <h1>Let's Get In Touch</h1>
          <div className="social">
            <Link to="https://www.instagram.com/krishnakkmrs/">
              <InstagramIcon className="instagram" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCAn4hQDqyaleayqZ4Ytq9Yw">
              <YouTubeIcon className="youtube" />
            </Link>
            <Link to="https://www.linkedin.com/in/krishna-kumar-0145b6153/">
              <LinkedInIcon className="linkedin" />
            </Link>
            <Link to="https://github.com/GitKrishnaHub">
              <GitHubIcon className="github" />
            </Link>
          </div>
          <img src={contact} alt="" className="img-contact" />
        </div>

        <div className="contact-detail" >
          
          <div className="input-field">
            <PersonIcon className="icon" /><input type="text" name="user_name" id="name" placeholder="Your Name" value={name} onChange={handleOnName} required />
          </div>
          <div className="input-field">
            <PhoneIcon className="icon" /><input type="tel" name="user_contact" id="phone" placeholder="Contact Number" value={phone} onChange={handleOnPhone} required/>
          </div>
          <div className="input-field">
            <EmailIcon className="icon" /><input type="email" name="user_email" id="email" placeholder="Email Address" value={email} onChange={handleOnChange } required />
          </div>
          <div className="text-area">
            <textarea placeholder="How Can I Help You ?" id="message" name="message" rows={3} cols={40}></textarea>
          </div>
          <button type="submit" className="btn1" onClick={emailvalidation}>Submit</button>
        </div>
        
      </form>
      </div>
    </div>
  );
};

export default Contact;
