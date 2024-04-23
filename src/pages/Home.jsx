import React from 'react';
import './Page.css';
import profile from './assets/pro-pic.png';
import Button from '../../node_modules/@mui/material/Button';
import Pdf from './resume.pdf';
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import { isMobile } from 'react-device-detect';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Typewriter from 'typewriter-effect';

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
      <div className="home-content-container">
        <div className="name-bio">
        <p className="name">Ananya Seelam</p>
        <p className='bio'>
          Software engineer passionate about 
          <b className = "color-pop">
            <Typewriter

            onInit={(typewriter) => {
              typewriter.typeString('tech for social good')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .start();
            }}
          />
        </b>
        </p>
        
        <div className='contact'>
        <a href="https://www.linkedin.com/in/ananya-seelam-5003871a2/"><TiSocialLinkedinCircular className='linkedin'/> </a>
        <button className='resumeBtn'><a href={require("./resume.pdf")} target="_blank" className='resumebtntext' >Resume</a></button>
        </div>
        </div>
        <img src={profile} className="profile-pic" />
      </div>
    </div>
    
  )
};

export default Home;