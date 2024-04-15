import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import { FaLinkedin } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const About = () => (
  <div className="container">
    {/* <NavBar /> */}
    <div className="content-container">
      <p className="header">About</p>
      <p className="resume-body">
        I was born and raised near Raleigh, North Carolina and currently go to Cornell in Ithaca, NY!
      </p>

      <p className="resume-body">
        I'm passionate about the intersection between social justice and tehnology! 
      </p>

      <p className="resume-body">
        In my free time, I like to exercise, cook and bake vegan food, and travel!  
      </p>

      <div className='about-contact'>
        <a href="https://www.linkedin.com/in/ananya-seelam-5003871a2/"><TiSocialLinkedinCircular className='linkedin'/> </a>
        <button className='resumeBtn'><a href={require("./resume.pdf")} target="_blank" className='resumebtntext' >Resume</a></button>
      </div>

      </div>
      
    </div>
   
);

export default About;