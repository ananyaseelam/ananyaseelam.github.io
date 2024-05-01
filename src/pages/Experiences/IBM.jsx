import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import diagram from '../assets/ibm-diagram.png';
import '../Page.css';
import Divider from '@mui/material/Divider';


const style = {
  width: '80%',
  marginLeft: '10%',
};


const IBM = () => (
  <div className="container">
    <div className="content-container">
    <p className="header"> IBM </p>
    <Divider variant='middle' sx={style}/>
      <div className="full-experience-wrapper">
        <img alt="A graph-like diagram to represent the project Ananya worked on" className='experience-image' src= {diagram} ></img>
        <div className="experience-text-wrapper">
          <p className='subheading'>Summary</p>
          <p className='description-text'>
          At IBM, I created a dashboard that displays a graph-like diagram to show the health of about 10 micro-services which run jobs on IBM's Quantum Computer! 
          Throughout the summer, I worked on a team with 3 senior developers and 1 other intern in an agile environment. 
          
          </p>

          <p className='description-text'>
          The diagram on the dashboard represented each microservice as a box and had arrows between them to show dependencies. 
          As incidents occurred on microservices the boxes changed color from green to yellow or red depending on the severity of the incident. The dashboard is now used to manage incidents on microservices and ensure that dependencies are accounted for! 
          </p>
          <p className='subheading'>Skills</p>
          <p className='description-text'>
            Used Vue.js, Node.js, Express.js, PostgreSQL to build the website. I also learnt how to use websockets through Socket.io for client/server communication. I later integrated the application with the PagerDuty API. 
          </p>
            
        </div>
        
      </div>
    </div>
  </div>
  
);



export default IBM;