import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'
      data-testid='error-indicator'>
      <h3 className='error-indicator__title'>Failed to upload image data,
        please try again later
      </h3>
      <img src={process.env.PUBLIC_URL + 'assets/images/nasa_error_img.gif'}
        className='error-indicator__gif'></img>
      <p className='error-indicator__description'>We already fixing this issue,
        please try again later</p>
    </div>
  )
};

export default ErrorIndicator;