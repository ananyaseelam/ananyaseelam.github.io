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
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Link to="/" > <Tab value="Home" label="home" className="page-link" /> </Link>
        <Link to="/experience" > <Tab value="Experience" label="experience" className="page-link" /> </Link>
        <Link to="/projects" > <Tab value="Projects" label="projects" className="page-link" /> </Link>
        <Link to="/contact" > <Tab value="Contact" label="contact" className="page-link" /> </Link>
        <Link to="/about" > <Tab value="About Me" label="about" className="page-link" /> </Link>

      </Tabs >
    </div >

  );

};

export default NavBar;