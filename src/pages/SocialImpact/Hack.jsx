import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import '../Page.css';
import award from '../assets/hackpic.png';
import boom from '../assets/boompic.png';
import showcase from '../assets/showcase.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Tab from '../../../node_modules/@mui/material/Tab';
import Divider from '@mui/material/Divider';


const style = {
  width: '80%',
  marginLeft: '10%',
};

const Hack = () => (
  <div className="container">
    <div className="content-container">
    <p className="header"> Hack4Impact </p>
    <Divider variant='middle' sx={style}/>
    <div className="two-column-layout">
      <div className="experience-overview">
        <img src={showcase} className='hack-experience-image'></img>
        <div className='experience-overview-text'> 
          {/* <Link to="/hack4impact" >  */}
          <Tab value="codirector" label="Co-Director of Hack4Impact" className="hack-subheading" /> 
          {/* </Link> */}
          <p> Led a team of over 60 student developers, designers, and business members and ran the <a href='https://www.cornellh4i.org/' className='color-pop'> Cornell Chapter of Hack4Impact </a> for one year!</p>
          <p> During my term, I helped streamline processes such as new member recruitment, our DEI committee, and our campus outreach! </p>
        </div>
      </div>
      <div className="experience-overview">
        <img src={boom} className='hack-experience-image'></img>
        <div className='experience-overview-text'> 
          {/* <Link to="/hack4impact" >  */}
          <Tab value="techlead" label="Technical Lead for Earth Law Center" className="hack-subheading" /> 
          {/* </Link> */}
          <p> Built a fullstack website for the Earth Law Center to easily fill out eco-centric law and letter templates. </p>
          <p > Checkout the website we built <a href="https://earth-law-center.herokuapp.com/" className='color-pop'>here</a>!</p>
          <p> We also won an award for the website at Cornell's annual Bits On Our Mind contest! </p>
        </div>
      </div>
      <div className="experience-overview">
        <img src={award} className='hack-experience-image'></img>
        <div className='experience-overview-text'> 
          {/* <Link to="/hack4impact" >  */}
          <Tab value="dev" label="Developer" className="hack-subheading" /> 
          {/* </Link> */}
          <p> Helped build software products for Farmworkers Justice and Life Camp! </p>
          <p>We built Farmworker's Justice a data visualization app. Check out the finished website <a className='color-pop' href= "https://farmworker-justice.herokuapp.com/" > here</a>! </p>
        </div>
      </div>
        
      </div>
    </div>
  </div>
  
);

export default Hack;

