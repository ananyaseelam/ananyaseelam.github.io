import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import { FaLinkedin } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Divider from '@mui/material/Divider';
import propic1 from './assets/propic1.png';
import propic2 from './assets/propic2.png';


const style = {
  width: '80%',
  marginLeft: '10%',
};

const About = () => (
  <div className="container">
    {/* <NavBar /> */}
    <div className="content-container">
      <p className="header">About</p>
      <Divider variant='middle' sx={style}/>
      <div className='two-column-layout-about'>
      <img alt="A casual profile picture of Ananya Seelam" className="profile-pic-about" src={propic2}></img>

      <div className='about-right'>
      <p className="resume-body">
        I was born and raised near Raleigh, North Carolina and currently go to Cornell in Ithaca, NY! I will be graduating in May 2024! 
      </p>

      <p className="resume-body">
        I'm passionate about the intersection between social justice and tehnology! 
      </p>

      <p className="resume-body">
        In my free time, I like to exercise, cook/ bake vegan food, and travel!  
      </p>

      <div className='about-contact'>
        <a href="https://www.linkedin.com/in/ananya-seelam-5003871a2/"><TiSocialLinkedinCircular className='linkedin'/> </a>
        <button className='about-resumeBtn'><a href={require("./resume.pdf")} target="_blank" className='resumebtntext' >Resume</a></button>
      </div>
      </div>

      </div>
      </div>
      
    </div>
   
);

export default About;