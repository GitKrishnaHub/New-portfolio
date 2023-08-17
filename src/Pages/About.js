import React from 'react'
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { profile2 } from '../images'
import '../Css/About.css'

const About = () => {
  return (
    <div className='about' id='About'>
     <div className='heading'>
      <p>About <span>Me</span></p>
      <h4>Why Choose Me ?</h4>
    </div>
      <div className="about-data">
        <div className="image">
          <img src={profile2} alt="..." />
        </div>
        <div className="text">
          <h2>Hello <label>everyone,</label></h2>
          <p>It's my pleasure to introduce myself to you.</p>
          <p>I'm Krishna, I completed my graduation in <span>Bachelor of Computer Application(BCA)</span>  from SVR college of commerce and management studies,<span> Bangalore University</span>. My technical skills
         <span> full stack web developer</span> with background knowledge of frontend and backend building applications and <span> Data Analyst</span> utmost efficiency . strong professional with a BCA willing to be assets for an organization.
          </p>
          <p>My <span> strengths</span> are I have <span> good leadership</span> skills for eg I have been the Class representative for 3 consecutive years and I'm a <span> quick learner</span>.</p>
          <p>I'm good in sports and I have 1st and 2nd place certificates in Kho Kho , Kabaddi, Volleyball etc.</p>
          <p>My <span>achievement</span> are I got selected in <span> Qspider</span> from college campus interview.</p>
          <p>My hobbies are listening music, Doing workout to maintain body and playing competitive games.</p>
          <p>That's all <span>about me !</span></p>
        <div className="social-acc">
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
        </div>
      </div>
     </div>
  )
}

export default About
