import React from 'react';
import ReactPlayer from 'react-player'
import './Experience.css';
import Divider from '@mui/material/Divider';

const style = {
  width: '75%',
  marginLeft: '10%',
};

const Google = () => (
  <div className="container">
    <div className="content-container">
    
    <p className="header">Google</p >
    <Divider variant='middle' sx={style}/>
      <div className="full-experience-wrapper-google">
      <div className="experience-text-wrapper-google">
          <p className='experience-description-text'>During my internship at Google Search, I added more useful information to car related searches! For all car searches, you can now see the MSRP data as well as other important information such as MPGe and Horsepower. </p>
          <p className='experience-description-text'>Check out a demo of the work below! </p>
      </div>
        <div className='video-wrapper'>
          <ReactPlayer
          url='/google-demo.mp4'
          width='100%'
          height='100%'
          controls = {true}
          playing = {true}
          />
        </div>
        <div className="experience-text-wrapper-google">
          <p className='subheading'>Summary</p>
          <p className='experience-description-text'>For electric cars, you can now see Fastest Charging information as well as Financial Incentives for electric cars in the US.
          Throughout this project, I worked cross-functionally with a PM, UX Designer as well as two other engineers. Now that the project is launched, you can view it online if you search an electric car such as the  Rivian R1T and the Tesla Model 3. Over the summer, the project was expected to reach an estimated 100k new monthly average users!</p>
          <p className='subheading'>Roadblocks</p>
          <p className='experience-description-text'>This project required migrating the current desktop version of a UI component that renders when cars are searched from a legacy framework to a new custom framework. This framework would affect several teams' work so every decision I made had to take into consideration the possible consequences to other teams. This required a lot of time-consuming communication with teams across Google, slowing down the overall workflow over the summer. </p>
          <p className='subheading'>Skills</p>
          <p className='experience-description-text'>C++, Java, Javascript</p>
        </div>
        
      </div>
    </div>
  </div>
);

export default Google;