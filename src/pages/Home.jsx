import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import profile from './pro-pic.png';
import Button from '../../node_modules/@mui/material/Button';
import Pdf from './resume.pdf';

const Home = () => {

  return (
    <div className="container-home">
      <NavBar />
      <div className="content-container">
        <p className="name">Ananya Seelam</p>
        <p className='bio'>
          I am an engineering student at Cornell University majoring in Computer Science and minoring in Inequality Studies!
        </p>
        {/* <img src={profile} className="profile-pic" /> */}
        {/* <div className='resume-block'>
          <p className='text'>Check out my resume! </p>
          <a href={require("./resume.pdf")} target="_blank">
            <Button className="resume-btn"> <p>Resume</p> </Button>
          </a>
        </div> */}
      </div>
    </div>
  )
};

export default Home;