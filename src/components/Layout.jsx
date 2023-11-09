import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
