import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';



const About = () => (
  <div className="container">
    {/* <NavBar /> */}
    <div className="content-container">
      <p className="header">About</p>
      <p className="resume-body">
        I was born and raised near Raleigh, North Carolina and currently go to Cornell in Ithaca, NY!
        <p></p>
        <a  href="https://www.linkedin.com/in/ananya-seelam-5003871a2/"> Checkout my LinkedIn Here!</a>
        <p></p>
        <a  href={require("./resume.pdf")} target="_blank">Click here to see my resume!</a>
      </p>

      


      </div>
      
    </div>
   
);

export default About;