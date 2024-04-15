import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import profile from './assets/pro-pic.png';
import Button from '../../node_modules/@mui/material/Button';
import Pdf from './resume.pdf';
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import {BrowserView, MobileView} from "react-device-detect"
import Experience from './Experience'
import Research from './Research'
import SocialImpact from './SocialImpact';
import About from './About';
import { isMobile } from 'react-device-detect';
import { FaLinkedin } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const Home = () => {

  return (
    isMobile ? 

    <div className="container">
      <div className="name-bio">
        <p className="name">Ananya Seelam</p>
        <p className='bio'>
          Software engineer passionate about <b className = "color-pop"> tech for social good </b>
        </p>
        <div className='contact'>
        <a href="https://www.linkedin.com/in/ananya-seelam-5003871a2/"><TiSocialLinkedinCircular className='linkedin'/> </a>
        <button className='resumeBtn'><a href={require("./resume.pdf")} target="_blank" className='resumebtntext' >Resume</a></button>
        </div>
        </div>
       

    </div>

    :
    <div className="container">
      {/* <NavBar /> */}
      <div className="home-content-container">
        <div className="name-bio">
        <p className="name">Ananya Seelam</p>
        <p className='bio'>
          Software engineer passionate about <b className = "color-pop"> tech for social good </b>
        </p>
        <div className='contact'>
        <a href="https://www.linkedin.com/in/ananya-seelam-5003871a2/"><TiSocialLinkedinCircular className='linkedin'/> </a>
        <button className='resumeBtn'><a href={require("./resume.pdf")} target="_blank" className='resumebtntext' >Resume</a></button>
        </div>
        </div>
        <img src={profile} className="profile-pic" />
      </div>
      {/* <div id = "experience">
      <Experience/>
      </div>
      <div>
      <Research/>
      </div>
      <div>
      <SocialImpact/>
      </div>
      <div>
      <About/>
      </div> */}
    </div>
    
  )
};

export default Home;