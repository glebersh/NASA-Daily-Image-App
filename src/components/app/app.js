import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import './app.css';

import ErrorBoundary from '../error-boundary';
import AboutPage from '../about-page';
import ArchivePage from '../archive-page';
import HomePage from '../home-page';
import Layout from '../layout';

export const HomePageHandlers = createContext();

const App = () => {
  const [currentTheme, changeColorTheme] = useLocalStorage('light');

  return (
    <ErrorBoundary>
      <div className='app' data-theme={currentTheme}>
        <HomePageHandlers.Provider
          value={{ currentTheme, changeColorTheme }}>
          <Routes>
            <Route path='/' element={<Layout theme={currentTheme} />}>
              <Route index element={<HomePage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='archive' element={<ArchivePage />} />
            </Route>
          </Routes>
        </HomePageHandlers.Provider>
      </div>
    </ErrorBoundary>
  )
};

export default App;
