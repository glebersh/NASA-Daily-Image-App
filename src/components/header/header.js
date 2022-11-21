import React, { useState } from 'react'
import './header.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../sidebar';
import ButtonsBlock from '../controls-buttons-block';
import { logoSVG } from '../svg/svg';
import { useMediaQuery } from '@chakra-ui/media-query';

const Header = (props) => {
  const [navigationStyle] = useMediaQuery('(min-width: 860px)');

  const content = (
    <>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__list-item'>
            <NavLink className='header__list-item-link' to='/NASA-Daily-Image-App/'>Home</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className='header__list-item-link' to='about'>About</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className='header__list-item-link' to='archive'>Archive</NavLink>
          </li>
        </ul>
      </nav>
      <ButtonsBlock theme={props.theme} />
    </>
  );

  return (
    <header className='header'>
      <div className='header__logo'>
        {logoSVG}
        <h1 className='header__logo-title'> &#123; APOD &#125;</h1>
      </div>
      {navigationStyle ?
        content : <Sidebar theme={props.theme} />}
    </header >
  )
};

export default Header;