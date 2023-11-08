import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
