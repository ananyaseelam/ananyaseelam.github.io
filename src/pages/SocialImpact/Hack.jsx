import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import '../Page.css';
import award from '../assets/hackpic.png';
import boom from '../assets/hackboompic.png';
import showcase from '../assets/showcase.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Tab from '../../../node_modules/@mui/material/Tab';

const Hack = () => (
  <div className="container">
    <NavBar />
    <div className="content-container">
    <p className="header"> Hack4Impact </p>
    <div className="two-column-layout">
      <div className="experience-overview">
        <img src={award} className='experience-image'></img>
        <div className='experience-overview-text'> 
          <Link to="/socialimpact" > <Tab value="codirector" label="Co-Director of Hack4Impact" className="experience-overview-link" /> </Link>
          <p> Led a team of over 60 student developers, designers, and business members and ran the Cornell Chapter of Hack4Impact for one year!</p>
        </div>
      </div>
      <div className="experience-overview">
        <img src={boom} className='experience-image'></img>
        <div className='experience-overview-text'> 
          <Link to="/socialimpact" > <Tab value="techlead" label="Technical Lead for Earth Law Center" className="experience-overview-link" /> </Link>
          <p> Built a fullstack website for the Earth Law Center to easily fill out eco-centric law and letter templates. </p>
        </div>
      </div>
      <div className="experience-overview">
        <img src={showcase} className='experience-image'></img>
        <div className='experience-overview-text'> 
          <Link to="/socialimpact" > <Tab value="dev" label="Developer" className="experience-overview-link" /> </Link>
          <p> Helped build software products for Farmworkers Justice and Life Camp! </p>
          {/* <p>MongoDB/Express.js/Angular.js/Node.js</p> */}
        </div>
      </div>
        
      </div>
    </div>
  </div>
  
);

export default Hack;
