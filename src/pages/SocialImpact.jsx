import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import hack from './assets/hack.png';
import anabel from './assets/anabel.png';
import wicc from './assets/wicc.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Tab from '../../node_modules/@mui/material/Tab';
import Divider from '@mui/material/Divider';


const style = {
  width: '80%',
  marginLeft: '10%',
};

const SocialImpact = () => (
  <div className="container">
    {/* <NavBar /> */}

    <div className="content-container">
    <p className="header">Social Impact Work</p>
    <Divider variant='middle' sx={style}/>
    <div className="two-column-layout">
      <div className="socialimpact-overview">
        <img src={hack} ></img>
        <div className='experience-overview-text'> 
          <Link to="/hack4impact" > <Tab value="Hack4Impact" label="Hack4Impact @ Cornell" className="experience-overview-link" /> </Link>
          <p> Led a student project team of over 60 students for one year and spent 2.5 years as a developer and technical lead, building software solutions for nonprofits such as Farmworkers Justice and the Earth Law Center. </p>
        </div>
      </div>
      <div className="socialimpact-overview">
        <img src={anabel} ></img>
        <div className='experience-overview-text'> 
          <Link to="/anabels" > <Tab value="Anabels" label="Anabel's Grocery @ Cornell" className="experience-overview-link" /> </Link>
          <p> Helping run a student-led grocery store to provide affordable and locally sourced food for Ithaca residents.   </p>
        </div>
      </div>
      {/* <div className="experience-overview">
        <img src={wicc}></img>
        <div className='experience-overview-text'> 
          <Link to="/wicc" > <Tab value="WICC" label="Women in Computing @ Cornell | Girls Who Code" className="experience-overview-link" /> </Link>
          <p> Taught middle and high school students coding through Girls Who Code and led campus intiatives to improve inclusion in computing on campus </p>
        </div>
      </div> */}
    </div>
      
    </div>
  </div>
);

export default SocialImpact;