import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';


const About = () => (
  <div className="container">
    <NavBar />
    <div className="content-container">
      <p className="header">About</p>
      <p className="aboutBody">
        I was born and raised near Raleigh, North Carolina and currently go to Cornell in Ithaca, NY!
      </p>
       <a className="resume-body" href="resume.pdf"> Click here to see my resume!</a>
      </div>

    </div>
   
);

export default About;