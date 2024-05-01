import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import store from '../assets/anabels_store.png';
import '../Page.css';
import Divider from '@mui/material/Divider';


const style = {
  width: '80%',
  marginLeft: '10%',
};

const Anabels = () => (
  <div className="container">
    <div className="content-container">
    <p className="header"> Anabels Grocery </p>
     <Divider variant='middle' sx={style}/>
      <div className="full-experience-wrapper">
        <img className='anabels-image' src= {store} ></img>
        <div className="anabels-text-wrapper">
          <p className='anabels-description-text'>During Fall of 2022, I took a practicum course at Cornell called <a className='color-pop' href="https://www.anabelsgrocery.org/">Anabel's Grocery</a> where I learnt about food justice and helped ran a justice based student-led grocery store on campus.
          I've been volunteering in the store ever since and have spent several hours stocking, checking people out and cleaning the store! </p>
          <p className='anabels-description-text'>Through my work at Anabel's I've learnt how to advocate against food insecurity and how our current systems are built to further food injustice.</p>
          {/* <p className='anabels-description-text'>I also helped with social media outreach for Anabel's which you can see on the <a hclassName='color-pop' ref='https://www.instagram.com/anabelsgrocery'>Anabel's Instagram</a>!</p> */}
        
        </div>
        
      </div>
    </div>
  </div>
  
);



export default Anabels;