import React from 'react';
import ContentBlock from '../content-block';
import GalleryWrapper from '../gallery-wrapper';
import './home-page.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <ContentBlock />
      <GalleryWrapper />
    </div>
  )
};

export default HomePage;