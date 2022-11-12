import React, { Component } from 'react';
import './error-boundary.css';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <h1 className='error-boundary__title'>Oops, something went wrong...</h1>
          <img src={process.env.PUBLIC_URL + 'assets/images/nasa_error_img.gif'}
            className='error-boundary__gif'></img>
          <p className='error-boundary__description'>We already fixing this issue,
            please try again later</p>
        </div>
      )
    }
    else {
      return this.props.children
    }
  }
};