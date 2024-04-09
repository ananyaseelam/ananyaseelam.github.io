import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import hack from './assets/hack.png';
import anabel from './assets/anabel.png';
import wicc from './assets/wicc.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Tab from '../../node_modules/@mui/material/Tab';

const SocialImpact = () => (
  <div className="container">
    <NavBar />

    <div className="content-container">
    <p className="header">Industry Experience</p>
    <div className="two-column-layout">
      <div className="experience-overview">
        <img src={hack} ></img>
        <div className='experience-overview-text'> 
          <Link to="/google" > <Tab value="Google" label="Search and Sustainability @ Google" className="experience-overview-link" /> </Link>
          <p> Worked on the Sustainability team within Google Search to improve customization of results shown during car searches and to show financial incentives and charging information for cars on desktop devices.  </p>
          <p>C++/Java/Javascript</p>
        </div>
      </div>
      <div className="experience-overview">
        <img src={anabel} ></img>
        <div className='experience-overview-text'> 
          <Link to="/ibm" > <Tab value="IBM" label="Quantum Computing @ IBM" className="experience-overview-link" /> </Link>
          <p> Worked on the IBM Quantum Infrastructure team to build a fullstack internal tool that displays high and low severity incidents on microservices that run on IBMs Quantum Computers </p>
          <p>Vue.js/Node.js/Express.js/Socket.io/PostgreSQ</p>
        </div>
      </div>
      <div className="experience-overview">
        <img src={wicc}></img>
        <div className='experience-overview-text'> 
          <Link to="/dell" > <Tab value="Dell" label="Cloud Computing @ Dell" className="experience-overview-link" /> </Link>
          <p> Worked on Dell's Apex Cloud Controller to build a fullstack internal tool called a Chaos Engine that allows developers to inject failures into the Dell's On-Premise Cloud Control system to see how it responds. </p>
          <p>MongoDB/Express.js/Angular.js/Node.js</p>
        </div>
      </div>
    </div>
      
    </div>
  </div>
);

export default SocialImpact;