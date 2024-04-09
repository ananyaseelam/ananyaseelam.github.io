import React from 'react';
import Tab from '../../../node_modules/@mui/material/Tab';
import Tabs from '../../../node_modules/@mui/material/Tabs';
// import { Link, useHistory, useLocation } from 'react-router-dom';
import './NavBar.css'
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import MyDropdown from '../MyDropdown';
import { useState } from "react";

const NavBar = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isExperienceDropdownVisible, setExperienceDropdown] = useState(null);
  
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
        <a href="/" > <Tab value="Home" label="home" className="page-link" /> </a>
        <Dropdown>
          {/* <MenuButton className="page-link" >  */}
          <a href="/experience" > <Tab value="Experience" label="experience" className="page-link" /> </a>
          {/* </MenuButton> */}
          <Menu>
            <MenuItem>
            <a href="/google" > <Tab value="Google" label="Google" className="page-link" /> </a>
            </MenuItem>
            <MenuItem>
            <a href="/ibm" > <Tab value="IBM" label="IBM" className="page-link" /> </a>
            </MenuItem>
            <MenuItem>
            <a href="/dell" > <Tab value="Dell" label="Dell" className="page-link" /> </a>
            </MenuItem>
          </Menu>
        </Dropdown>
        {/* <MyDropdown></MyDropdown> */}
        <a href="/research" > <Tab value="Research" label="research" className="page-link" /> </a>
        <a href="/social-impact" > <Tab value="Social Impact" label="Social Impact" className="page-link" /> </a>
        <a href="/about" > <Tab value="About Me" label="about" className="page-link" /> </a>

      </Tabs >
    </div >

  );

};

export default NavBar;