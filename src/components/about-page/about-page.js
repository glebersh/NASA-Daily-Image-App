import React from 'react';

import './about-page.css';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className='about-page__text-container'>
        <h2 className='about-page__title'>
          About this project
        </h2>
        <p className='about-page__parapraph'>This project is using NASA free
          <a href='https://api.nasa.gov/'
            className='about-page__socials-link'> APOD (Astronomy Picture of the Day) API.</a>
        </p>
        <p className='about-page__parapraph'>Created by Gleb Ershov, 2022.</p>

        <h4 className='about-page__list-title'>Tech Stack</h4>
        <ul className='about-page__list'>
          <li>React</li>
          <li>Moment JS</li>
          <li>React Router v6</li>
        </ul>

        <h4 className='about-page__list-title'>Contact:</h4>
        <ul className='about-page__list'>
          <li><a href='https://github.com/glebersh'
            target='_blank'
            className='about-page__socials-link'>GitHub
          </a></li>
          <li><a href='https://www.linkedin.com/in/gleb-ershov-804b50232/'
            target='_blank'
            className='about-page__socials-link'>LinkedIn</a></li>
          <li><a href='mailto:glebersh00@gmail.com'
            target='_blank'
            className='about-page__socials-link'>Mail me</a> (glebersh00@gmail.com)</li>
        </ul>
      </div>
    </div >
  )
};

export default AboutPage;