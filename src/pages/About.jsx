import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';


const About = () => (
  <div className="container">
    <NavBar />
    <div className="content-container">
      <p className="header">About</p>
      <p className="aboutBody">
        I was born and raised near Raleigh, North Carolina and currently live in Ithaca, NY.
      </p>
      <p className="aboutBody">
        I got interested in computer science in 9th grade when I joined my high schools Introduction to Computer Science course.
        I became fascinated by using my interest in math and logic to solve intereting problems in the world.
      </p>
      <p className="aboutBody">

      </p>
    </div>
  </div>
);

export default About;