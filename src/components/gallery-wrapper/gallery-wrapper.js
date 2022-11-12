import React, { useEffect, useState } from 'react';
import { useMedia } from '../../hooks/useMedia';

import NASA_API from '../../services/nasa_service';
import ImageGallery from '../gallery';

const GalleryWrapper = () => {
  const [cards, updCards] = useState([]);
  const nasaAPI = new NASA_API();
  const [isLoading, updLoadingState] = useState(true);
  const [isError, updErrorState] = useState(false);

  const mq = ['(min-width: 1201px)',
    '(min-width: 1025px) and (max-width: 1200px)',
    '(min-width: 769px) and (max-width: 1024px)',
    '(min-width: 481px) and (max-width: 768px)',
    '(min-width: 425px) and (max-width: 480px)'];

  const values = [13, 8, 6, 3, 2];

  const amountOfCards = useMedia(mq, values, 5);
  useEffect(() => {
    nasaAPI.getRandomItems(amountOfCards)
      .then(result => updCards(result))
      .then(() => updLoadingState(false))
      .catch(() => updErrorState(true))
      .then(() => updLoadingState(false));
  }, [amountOfCards]);

  return (
    <ImageGallery data={cards} isLoading={isLoading} isError={isError} />
  )
};

export default GalleryWrapper;