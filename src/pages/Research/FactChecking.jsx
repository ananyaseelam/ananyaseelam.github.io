import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import '../Page.css';
import BasicTimeline from '../../components/Timeline';
import './Research.css'
const FactChecking = () => (
  <div className="container">
    <div className="content-container">
    <p className="header"> Fact Checking </p>
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


    <div className='research-block'> 
         
          <p className='research-subheading'>Fall 2022 - Fall 2023: Fact-Checking Research</p>
          <p className='research-description-text'>Conducted a qualitative study to reveal how Fact-Checking is done for low resource communities in India</p>
          <p className='research-description-text'>Recieved a CSCW 2024 Acceptance! 
          </p>
          <p className='research-description-text'>
          Check out our paper:  
          <i><a className='research-link' href="https://dl.acm.org/doi/10.1145/3637333">
          “Fact-checks are for the Top 0.1%”: Examining Reach, Awareness, and Relevance of Fact-Checking in Rural India
          </a> </i>
          </p>

        </div>
    </div>

  </div>
  
);



export default FactChecking;