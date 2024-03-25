import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import profile from './pro-pic.png';
import Button from '../../node_modules/@mui/material/Button';
import Pdf from './resume.pdf';
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import {BrowserView, MobileView} from "react-device-detect"

const Home = () => {

  return (
    <div className="container">
      <NavBar />
      <div className="home-content-container">
        <div className="name-bio">
        <p className="name">Ananya Seelam</p>
        <p className='bio'>
          Software engineer passionate about <b className = "color-pop"> tech for social good </b>
        </p>
        </div>
        <img src={profile} className="profile-pic" />
      </div>
      {/* <p>f063</p> */}
      {/* <i class="fa-thin fa-arrow-down"></i>       */}
      {/* <BrowserView>
        <h1> This is rendered only in browser </h1>
      </BrowserView>
      <MobileView>
          <h1> This is rendered only on mobile </h1>
      </MobileView> */}
    </div>
  )
};

export default Home;