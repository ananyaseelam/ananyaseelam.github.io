import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import '../Page.css';

const Ableism = () => (
  <div className="container">
    <div className="content-container">
      
    <p className="header"> Ableism </p>
    <div className="content-container">
      <p className="header">Research</p>
      <div className='research-wrapper'>
        <div className='research-block'> 
          <p className='research-subheading'>Spring 2024: Ableism Research</p> 
          <p className='research-description-text'>Currently working on two projects related to Ableism</p>
          <ol>
            <li>
              <p className='research-description-text'>Investigating how ableism manifests in LLMs and Toxicity Classifiers</p>
              <p className='research-description-text'>Checkout our analysis so far here: 
              <i><a className='research-link' href="https://github.com/ananyaseelam/llm-ableism/tree/main">Ableism in LLMs Analysis GitHub Repository</a></i>
              </p>
            </li>
            <li>
              <p className='research-description-text'>Investigating ableist hate towards content creators in America and India through survey analysis</p>
            </li>
          </ol>
        </div>
      
        
      </div>
    </div>
      {/* <div className="full-experience-wrapper">
        <div className='experience-image'></div>
        <div className="experience-text-wrapper">
          <p className='subheading'>Summary</p>
          <p className='description-text'>insert description here</p>
          <p className='subheading'>Roadblocks</p>
          <p className='description-text'>insert description here</p>
          <p className='subheading'>Skills</p>
          <p className='description-text'>insert description here</p>
        </div>
        
      </div> */}
    </div>
  </div>
  
);



export default Ableism;