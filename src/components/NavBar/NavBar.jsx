import React from 'react';
import Tab from '../../../node_modules/@mui/material/Tab';
import Tabs from '../../../node_modules/@mui/material/Tabs';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="navcontainer">
      {/* <Link to="/" className='logo'>
        <p className="name"> ANANYA </p>
      </Link> */}
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Link to="/" className='page-link'> <Tab value="Home" label="home" /> </Link>
        <Link to="/about" className='page-link'> <Tab value="About Me" label="about" /> </Link>
        <Link to="/projects" className='page-link'> <Tab value="Projects" label="projects" /> </Link>
      </Tabs >
    </div >

  );

};

export default NavBar;