import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';


const About = () => (
  <div className="container-about">
    <NavBar />
    <div className="content-container">
      <p className="header">About</p>
    </div>
  </div>
);

export default About;