import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import '../Page.css';
import chaos from '../assets/chaos-engineering.png'


const Dell = () => (
  
  <div className="container">
    <div className="content-container">
      <p className="header">Dell</p>
      <div className="full-experience-wrapper">
      <img className='experience-image' src= {chaos} ></img>
        <div className="experience-text-wrapper">
          <p className='subheading'>Summary</p>
          <p className='description-text'>
            At Dell, created a full stack project which injected failures into Dell's On-Premise Cloud Control (OPCC)
            software used by Dell's APEX Cloud Services. 
          </p>

          <p className='description-text'>
            Over the summer, we used Chaos Engineering, an experimental framework to ensure robustness of systems. 
            We developed a Chaos Engine to inject failures into OPCC, and built a responsive UI that allows developers choose which kinds of failures they want to inject and to subsequently receive detailed logs on how the system responded.  
          </p>

          <p className='description-text'>
            We used Litmus, a Kubernetes framework, to manage chaos workflows. We also created a REST API server to handle and communicate
            data between the server and chaos engine!
          </p>
          <p className='subheading'>Skills</p>
          <p className='description-text'> MongoDB, Express.js, Angular.js, and Node.js </p>
          <p className='description-text'> Docker and Kubernetes! </p>

        </div>
      </div>
    </div>
  </div>
);

export default Dell;