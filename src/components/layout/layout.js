import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

const Layout = (props) => {

  return (
    <>
      <Header theme={props.theme}
        hideSidebar={props.hideSidebar} />

      <main className='main'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
};

export default Layout;