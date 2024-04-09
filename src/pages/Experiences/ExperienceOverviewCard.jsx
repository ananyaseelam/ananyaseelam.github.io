import React from 'react';
import './Page.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Tab from '@mui/material/Tab';

const ExperienceOverviewCard = (imgSrc, linkto, label, tabValue ) => (

  <div className="experience-overview">
    <img src= {imgSrc} ></img>
    <div className='experience-overview-text'> 
      <Link to={linkto} > <Tab value={tabValue} label={label} className="experience-overview-link" /> </Link>
      <p> description </p>
    </div>
  </div>
      
);

export default ExperienceOverviewCard;