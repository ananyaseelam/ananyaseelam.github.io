import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';

const Home = () => (
  <div className="container">
    <NavBar />
    <div className="page-content">
      <h2>Hi, I'm Ananya!</h2>
      I am an engineering student at Cornell University majoring in Computer Science and minoring in Inequality Studies!
    </div>
  </div>
);

export default Home;