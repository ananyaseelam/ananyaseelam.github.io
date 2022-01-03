import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';

const Home = () => (
  <div className="container-home">
    <NavBar />
    <div className="content-container">
      <p className="name">Hi, I'm Ananya!</p>
      <p className='bio'>
        I am an engineering student at Cornell University majoring in Computer Science and minoring in Inequality Studies!
      </p>
    </div>
  </div>
);

export default Home;