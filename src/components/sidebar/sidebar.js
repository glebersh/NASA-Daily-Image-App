import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

import ButtonsBlock from '../controls-buttons-block';
import HamburgerButton from '../hamburger-button';

const Sidebar = (props) => {
  const [sidebarVisible, updSidebarVisibility] = useState(true);
  const hideSidebar = () => {
    if (sidebarVisible) {
      document.querySelector('.sidebar').style.display = 'none';
      updSidebarVisibility(!sidebarVisible);
    }
    else if (!sidebarVisible) {
      document.querySelector('.sidebar').style.display = 'block';
      updSidebarVisibility(!sidebarVisible);
    }
  };
  return (
    <>
      <HamburgerButton hideSidebar={hideSidebar} />
      <div className='sidebar'>
        <nav className='sidebar__nav'>
          <ul className='sidebar__list'>
            <li className='sidebar__list-item'>
              <NavLink className='sidebar__list-item-link'
                to='/' onClick={hideSidebar}>Home</NavLink>
            </li>
            <li className='sidebar__list-item'>
              <NavLink className='sidebar__list-item-link'
                to='/about' onClick={hideSidebar}>About</NavLink>
            </li>
            <li className='sidebar__list-item'>
              <NavLink className='sidebar__list-item-link'
                to='/archive' onClick={hideSidebar}>Archive</NavLink>
            </li>
          </ul>
        </nav>
        <ButtonsBlock theme={props.theme} />
      </div>
    </>
  )
};

export default Sidebar;