import React, { useState } from 'react';
import './archive-form.css';

const ArchiveForm = (props) => {

  const [date1Value, updFirstDate] = useState(null);
  const [date2Value, updSecondDate] = useState(null);

  const handlerDateInterval = (e) => {
    e.preventDefault();
    props.handlerDateInterval(date1Value, date2Value);
  };

  const getDate = (e) => {
    const date = e.target.value;
    if (e.target.name === 'date1') {
      updFirstDate(date);
    }
    else if (e.target.name === 'date2') {
      updSecondDate(date);
    }
  };

  const datePickerId = new Date().toLocaleDateString('en-ca');

  return (
    <form className='archive-form'
      onSubmit={handlerDateInterval}>

      <div className='archive-form__input-flex-container'>
        <label className='archive-form__input-label'
          htmlFor='start-date-input'>Start date: </label>
        <input className='archive-form__input'
          type='date' id='start-date-input' name='date1'
          required
          onChange={getDate}
          max={datePickerId} />
      </div>

      <div className='archive-form__input-flex-container'>
        <label className='archive-form__input-label'
          htmlFor='end-date-input'>End date: </label>
        <input className='archive-form__input' name='date2'
          type='date' id='start-date-input'
          required
          onChange={getDate}
          max={datePickerId} />
      </div>
      <input className='archive-form__input-submit'
        type='submit' value='Get data' />
    </form>
  )
};

export default ArchiveForm;