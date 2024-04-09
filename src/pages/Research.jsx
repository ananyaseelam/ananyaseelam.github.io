import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import './Page.css';


const Research = () => (
  <div className="container">
    <NavBar />
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
      
        <div className='research-block'> 
         
            <p className='research-subheading'>Fall 2022 - Fall 2023: Fact-Checking Research</p>
            <p className='research-description-text'>Conducted a qualitative study to reveal how Fact-Checking is done for low resource communities in India</p>
          
          <p className='research-description-text'>Recieved a CSCW 2024 Acceptance! 
          </p>
          <p className='research-description-text'>
          Check out our paper:  
          <i><a className='research-link' href="https://drive.google.com/file/d/1-M5135iIvryrAhIIVdbmFt6He5aLGpRe/view">
          “Fact-checks are for the Top 0.1%”: Examining Reach, Awareness, and Relevance of Fact-Checking in Rural India
          </a> </i>
          </p>

        </div>
      </div>
    </div>
  </div>
);

export default Research;