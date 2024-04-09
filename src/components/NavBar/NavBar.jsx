import React from 'react';
import Tab from '../../../node_modules/@mui/material/Tab';
import Tabs from '../../../node_modules/@mui/material/Tabs';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './NavBar.css'
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { useState } from "react";

const NavBar = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isExperienceDropdownVisible, setExperienceDropdown] = useState(false);
  
  const handleExperienceMouseEnter = () => {
    setExperienceDropdown(true);
  };

  const handleExperienceMouseLeave = () => {
    setExperienceDropdown(false);
  };

  return (
    <div className="navcontainer">
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Link to="/" > <Tab value="Home" label="home" className="page-link" /> </Link>
        <Dropdown>
          <MenuButton > 
            <Link to="/experience" > <Tab value="Experience" label="experience" className="page-link" /> </Link>
          </MenuButton>
          <Menu onMouseEnter={handleExperienceMouseEnter} onMouseLeave={handleExperienceMouseLeave}>
            <MenuItem>
            <Link to="/google" > <Tab value="Google" label="Google" className="page-link" /> </Link>
            </MenuItem>
            <MenuItem>
            <Link to="/ibm" > <Tab value="IBM" label="IBM" className="page-link" /> </Link>
            </MenuItem>
            <MenuItem>
            <Link to="/dell" > <Tab value="Dell" label="Dell" className="page-link" /> </Link>
            </MenuItem>
          </Menu>
        </Dropdown>
        <Link to="/research" > <Tab value="Research" label="research" className="page-link" /> </Link>
        <Link to="/social-impact" > <Tab value="Social Impact" label="Social Impact" className="page-link" /> </Link>
        <Link to="/about" > <Tab value="About Me" label="about" className="page-link" /> </Link>

      </Tabs >
    </div >

  );

};

export default NavBar;