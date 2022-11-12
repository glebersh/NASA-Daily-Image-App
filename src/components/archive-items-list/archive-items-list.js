import React from 'react';
import './archive-items-list.css';
import moment from 'moment';

const ArchiveItems = ({ data }) => {

  const archiveItems = data.map(item => {
    const { url, title, explanation, date } = item;
    const regExp = /^((?:https?:))\/\/apod.nasa.gov\/apod\/image\//;

    return (
      <div className='archive-item-list__item-flex-container' key={title}>

        {item.url.match(regExp) ?
          <img src={url} className='archive-item-list__item-img' alt={title} />
          : <span className='archive-item-list__alt-text'>An error occured while loading the image,
            but here must be a picture of {title}</span>
        }

        <div className='archive-item-list__item-text-container'>
          <p className='archive-item-list__item-date'>{moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
          <h4 className='archive-item-list__item-title'>{title}</h4>
          <p className='archive-item-list__item-description'>{explanation}
            <a className='archive-item-list__item-link'
              href={url}
              target='_blank'>See the full resolution photo</a></p>
        </div>
      </div>
    )
  });

  return (
    <div className='archive-item-list'>
      {archiveItems}
    </div>
  )
};

export default ArchiveItems;