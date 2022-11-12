import React from 'react';
import './loading-spinner.css';

const LoadingSpinner = () => {
  return (
    <div className='boba'>
      <div className='loading-spinner__container'>
        <div className='loading-spinner__content'>
          <div></div>
        </div>
      </div>
    </div>
  )
};

export default LoadingSpinner;