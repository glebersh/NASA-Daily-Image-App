import React, { useState } from 'react';
import './archive-page.css';
import ArchiveForm from '../archive-form';
import ArchiveItems from '../archive-items-list';
import NASA_API from '../../services/nasa_service';
import ErrorBoundary from '../error-boundary';
import LoadingSpinner from '../loading-spinner';

const ArchivePage = () => {
  const [intervalData, updIntervalData] = useState([]);
  const [isLoading, updLoadingStatus] = useState(false);
  const nasaAPI = new NASA_API();

  const getIntervalItems = (date1, date2) => {
    updLoadingStatus(true);
    updIntervalData([]);
    nasaAPI.getTimeIntervalItems(date1, date2)
      .then(result => updIntervalData(result))
      .then(() => updLoadingStatus(false));
  };

  const archiveContent = isLoading ? <LoadingSpinner /> : <ArchiveItems data={intervalData} />

  return (
    <ErrorBoundary>
      <div className='archive-page'>
        <h1 className='archive-page__title'>Archive</h1>
        <p className='archive-page__description'>Get the list of images from
          current date through June 16, 1995</p>
        <p className='archive-page__description'>To get the data,
          complete the form below: </p>

        <ArchiveForm handlerDateInterval={getIntervalItems} />
        {archiveContent}

      </div>
    </ErrorBoundary>
  )
};
export default ArchivePage;