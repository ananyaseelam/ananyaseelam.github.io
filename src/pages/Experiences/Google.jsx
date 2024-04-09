import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ReactPlayer from 'react-player'
import './Experience.css';

const Google = () => (
  <div className="container">
    <NavBar />
    <div className="content-container">
    <p className="header">Google</p >
      <div className="full-experience-wrapper">
        <div className='video-wrapper'>
            <ReactPlayer
            url= 'google_demo.mp4'
            width='100%'
            height='100%'
            controls = {true}
            />
        </div>
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

export default Google;