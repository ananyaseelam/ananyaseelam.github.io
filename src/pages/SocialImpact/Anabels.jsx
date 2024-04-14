import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import store from '../assets/anabels_store.png';
import '../Page.css';

const Anabels = () => (
  <div className="container">
    <NavBar />
    <div className="content-container">
    <p className="header"> Anabels Grocery </p>
      <div className="full-experience-wrapper">
        <img className='anabels-image' src= {store} ></img>
        <div className="experience-text-wrapper">
          <p className='subheading'>Summary</p>
          <p className='description-text'>During Fall of 2022, I took a practicum course at Cornell where I learnt about food justice and helped ran a justice based student-led grocery store on campus. </p>
          <p className='description-text'>I've been volunteering in the store ever since and have spent several hours stocking, checking people out and cleaning the store! </p>
          <p className='description-text'>Through my work at Anabel's I've learnt how to advocate against food insecurity and how our current systems are built to further food injustice.</p>
        </div>
        
      </div>
    </div>
  </div>
  
);



export default Anabels;