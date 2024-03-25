import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';
import profile from './pro-pic.png';
import Button from '../../node_modules/@mui/material/Button';
import Pdf from './resume.pdf';
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style

const Home = () => {

  return (
    <div className="container">
      <NavBar />
      <div className="content-container">
        <p className="name">Ananya Seelam</p>
        <p className='bio'>
          Software engineer passionate about <b> tech for social good </b>
        </p>
      </div>
    </div>
  )
};

export default Home;