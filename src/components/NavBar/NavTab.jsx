import React from 'react';
import Tabs from '../../../node_modules/@mui/material/Tabs';
import Tab from '../../../node_modules/@mui/material/Tab';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './NavBar.css'
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

const NavTab = (linkto, label, dropdowns) => {
  return (
    // <div>hi</div>
    <Dropdown >
      <MenuButton variant="plain"> 
      <a href={linkto}> <Tab value={label} label={label} className="page-link" /> </a>
      </MenuButton>
      {/* <Menu MenuListProps={{
        disablePadding: true
        }}>
        {dropdowns.map((item)=> (
          <MenuItem>
            <a href={item.href} > <Tab value={item.label} label={item.label} className="page-link" /> </a>
          </MenuItem>
        ))}
      </Menu> */}
    </Dropdown>
  );

};

export default NavTab;