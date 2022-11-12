import React from 'react';
import './hamburger-button.css';

const HamburgerButton = (props) => {
  return (
    <div className='hamburger-button' onClick={props.hideSidebar}>
      <div className='hamburger-button__line'></div>
      <div className='hamburger-button__line'></div>
      <div className='hamburger-button__line'></div>
    </div>
  )
};

export default HamburgerButton;