import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import '../Page.css';

const WICC = () => (
  <div className="container">
    <NavBar />
    <div className="content-container">
    <p className="header"> WICC </p>
      <div className="full-experience-wrapper">
        <div className='experience-image'></div>
        <div className="experience-text-wrapper">
          <p className='subheading'>Summary</p>
          <p className='description-text'>insert description here</p>
          <p className='subheading'>Roadblocks</p>
          <p className='description-text'>insert description here</p>
          <p className='subheading'>Skills</p>
          <p className='description-text'>insert description here</p>
        </div>
        
      </div>
    </div>
  </div>
  
);



export default WICC;