import React, { useContext } from 'react';

import './controls-buttons-block.css';

import { lightModeSVG, darkModeSVG } from '../svg/svg';
import { HomePageHandlers } from '../app/app';

const ButtonsBlock = (props) => {
  const { currentTheme } = useContext(HomePageHandlers);
  const { changeColorTheme } = useContext(HomePageHandlers);

  const changeTheme = () => {
    changeColorTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='buttons-block'>
      <button className='buttons-block__change-theme-btn'
        onClick={changeTheme}>
        {props.theme === 'dark' ? lightModeSVG : darkModeSVG}
      </button>
    </div>
  )
};
export default ButtonsBlock;