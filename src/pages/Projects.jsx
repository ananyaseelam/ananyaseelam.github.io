import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';

const Projects = () => (
  <div className="container-projects">
    <NavBar />
    <div className="content-container">
      <p className="header"> Projects </p>
      This example shows how to use React Router!
    </div>
  </div>
);

export default Projects;