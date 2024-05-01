import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import './Research/Research.css';
import BasicTimeline from '../components/Timeline';
import Divider from '@mui/material/Divider';

const style = {
  width: '80%',
  marginLeft: '10%',
};

const Research = () => (
  <div className="container">
    <div className="research-content-container">
      <p className="header">Research</p>
      <Divider variant='middle' sx={style}/>
      <p className='heading-description-text'> I joined Professor Aditya Vashistha's lab with the goal of investigating how we can create technologies for underserved communities!</p>
      <div className='timeline-container'>
      <BasicTimeline />
      </div>
    </div>
  </div>
);

export default Research;