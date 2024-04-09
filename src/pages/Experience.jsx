import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import google from './assets/google.png';
import ibm from './assets/ibm.png';
import dell from './assets/dell.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Tab from '../../node_modules/@mui/material/Tab';
// import ExperienceOverviewCard from './Experiences/ExperienceOverviewCard';

const Experience = () => (
  <div className="container">
    <NavBar />

    <div className="content-container">
    <p className="header">Industry Experience</p>
    <div className="two-column-layout">
      {/* <ExperienceOverviewCard imgSrc={google} linkto='/google' tabValue="Google" label="Search and Sustainability @ Google"/> */}
      <div className="experience-overview">
        <img src={google} className='logo-google'></img>
        <div className='experience-overview-text'> 
          <Link to="/google" > <Tab value="Google" label="Search and Sustainability @ Google" className="experience-overview-link" /> </Link>
          <p> description </p>
        </div>
      </div>
      <div className="experience-overview">
        <img src={ibm} className='logo-ibm'></img>
        <div className='experience-overview-text'> 
          <Link to="/ibm" > <Tab value="IBM" label="Quantum Computing @ IBM" className="experience-overview-link" /> </Link>
          <p> description </p>
        </div>
      </div>
      <div className="experience-overview">
        <img src={dell} className='logo-dell'></img>
        <div className='experience-overview-text'> 
          <Link to="/dell" > <Tab value="Dell" label="Cloud Computing @ Dell" className="experience-overview-link" /> </Link>
          <p> description </p>
        </div>
      </div>
    </div>
      
    </div>
  </div>
);

export default Experience;