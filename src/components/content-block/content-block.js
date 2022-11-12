import React, { useState, useEffect } from 'react';
import './content-block.css';

import NASA_API from '../../services/nasa_service';
import LoadingSpinner from '../loading-spinner';


const ContentBlock = () => {
  const [data, updData] = useState({});
  const [isLoading, updLoadingStatus] = useState(true);

  const nasaAPI = new NASA_API();

  useEffect(() => {
    console.log(132);
    nasaAPI.getTodayData()
      .then((result) => updData(result))
      .then(() => updLoadingStatus(false));

    return () => console.log('quit');
  }, []);

  const changeItem = () => {
    nasaAPI.getOneRandomItem()
      .then(result => updData(result))
  };


  return (
    <div className='content-block__flex-wrapper'>
      {isLoading ? <LoadingSpinner />
        :
        <>
          <img className='content-block__img'
            src={data.imgLowResURL}
            alt={`There is an image of ${data.title}`}
            loading='lazy'
            decoding='async' />
          <div className='content-block__text-content'>
            <ul className='content-block__info-list'>
              <li className='content-block__list-item'>{data.date}</li>
              <li className='content-block__list-item'>
                <h3 className='content-block__item-title'>{data.title}</h3>
              </li>
              <li className='content-block__list-item'>
                {data.copyright ? <span>The photo was taken by
                  <span className='content-block__copyright-info'> {data.copyright}</span></span>
                  : null}
              </li>
            </ul>
            <p className='content-block__item-description'>{data.description}</p>
            <button className='content-block__change-page-btn'
              onClick={changeItem}>
              Random page
            </button>
          </div>
        </>
      }
    </div>
  )
};

export default ContentBlock;