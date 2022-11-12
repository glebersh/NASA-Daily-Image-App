import React from 'react';
import './footer.css';
import { gitSVG, linkedInSVG, mailSVG } from '../svg/svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <h3 className='footer__category-title'>Contact Info</h3>
      <div className='footer__socials-container'>
        <a className='footer__social-link'
          href='https://github.com/glebersh'
          target='_blank'>
          {gitSVG}
        </a>
        <a className='footer__social-link'
          href='https://www.linkedin.com/in/gleb-ershov-804b50232/'
          target='_blank'>
          {linkedInSVG}
        </a>
        <a className='footer__social-link'
          href='mailto:glebersh00@gmail.com'
          target='_blank'>
          {mailSVG}
        </a>
        <span className='footer__social-mail-link'>
          glebersh00@gmail.com
        </span>
      </div>
      <a className='arrow-up' href='#'>
        <span className='left-arm'></span>
        <span className='right-arm'></span>
        <span className='arrow-slide'></span>
      </a>
      <p className='footer__copyright'>Copyright &#9400; Gleb Ershov, 2022</p>
    </footer>
  )
};

export default Footer;