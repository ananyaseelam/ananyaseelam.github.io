import React from 'react';
import Tab from '../../../node_modules/@mui/material/Tab';
import Tabs from '../../../node_modules/@mui/material/Tabs';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './NavBar.css'
import Menu from '@mui/joy/Menu';
import Button from '../../../node_modules/@mui/material/Button';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import {isMobile} from 'react-device-detect';
import { slide as SlideMenu } from 'react-burger-menu'


const NavBar = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const experienceDropdowns = [{}]

  return (
    // isMobile ? (
    //   <div>hi
    //     <SlideMenu>
    //       <a id="home" className="page-link" href="/">Home</a>
    //       {/* <a id="about" className="menu-item" href="/about">About</a> */}
    //       {/* <a id="contact" className="menu-item" href="/contact">Contact</a> */}
    //       <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    //     </SlideMenu>
    //   </div>
    // )
    // :
    (
    <div className="navcontainer">
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Dropdown className="navbartab" sx={{ '&.MuiButton-root:hover':{bgcolor: 'transparent'} }}>
        <MenuButton sx={{border: 'none',':hover': { backgroundColor: 'transparent' } }}> 
         <a href="/" > <Tab value="Home" label="home" className="page-link" /> </a>
        </MenuButton>
        </Dropdown>
        <Dropdown >
        <MenuButton sx={{border: 'none',':hover': { backgroundColor: 'transparent' } }}> 
          <Link to="/experience"> <Tab value="Experience" label="experience" className="page-link" /> </Link>
          </MenuButton>
          <Menu sx={{ ':hover': { backgroundColor: 'transparent' } }} MenuListProps={{
            disablePadding: true
            }}>
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
        <Dropdown >
        <MenuButton sx={{border: 'none',':hover': { backgroundColor: 'transparent' } }}> 
        <Link to="/research" > <Tab value="Research" label="research" className="page-link" /> </Link>
        </MenuButton > 
        </Dropdown>
        
        <Dropdown >
        <MenuButton sx={{border: 'none',':hover': { backgroundColor: 'transparent' } }}> 
          <Link to="/social-impact" > <Tab value="Social Impact" label="Social Impact" className="page-link" /> </Link>
        </MenuButton > 
        <Menu MenuListProps={{
            disablePadding: true
            }}>
            <MenuItem>
            <Link to="/hack4impact" > <Tab value="Hack4Impact" label="Hack4Impact" className="page-link" /> </Link>
            </MenuItem>
            <MenuItem>
            <Link to="/anabels" > <Tab value="Anabels Grocery" label="Anabels Grocery" className="page-link" /> </Link>
            </MenuItem>
            {/* <MenuItem>
            <Link to="/wicc" > <Tab value="WICC" label="WICC" className="page-link" /> </Link>
            </MenuItem> */}
          </Menu>
        </Dropdown>
        <Dropdown >
        <MenuButton sx={{border: 'none',':hover': { backgroundColor: 'transparent' } }}> 
          <Link to="/about" > <Tab value="About Me" label="about" className="page-link" /> </Link>
        </MenuButton > 
        </Dropdown>
      </Tabs >
    </div >)

  );

};

export default NavBar;