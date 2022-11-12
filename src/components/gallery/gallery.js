import React from 'react';
import './gallery.css';

import LoadingSpinner from '../loading-spinner';
import ErrorIndicator from '../error-indicator';

const ImageGallery = (props) => {
  const cardsContent = props.data.map(item => {
    const regExp = /^((?:https?:))\/\/apod.nasa.gov\/apod\/image\//;
    if (item.url) {
      if (item.url.match(regExp)) {
        return (
          <a href={item.url} key={item.title} target='_blank'
            rel='noreferrer'>
            <img loading='lazy'
              decoding='async'
              src={item.url} className='gallery__img-card'
              alt={`Enjoy the ${item.title}`}></img>
          </a >
        )
      }
    }
  });

  const loadingSpinner = props.isLoading ? <LoadingSpinner /> : null;
  const errorMessage = props.isError ? <ErrorIndicator /> : null;

  return (
    <div className='gallery'>
      <h2 className='gallery__title'>Discover other images</h2>
      <div className='gallery__flex-container'>
        {errorMessage}
        {loadingSpinner}
        {cardsContent}
      </div>
    </div>
  )
};

export default ImageGallery;