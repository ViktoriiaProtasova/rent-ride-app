import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Blocks } from 'react-loader-spinner';

const Layout = () => {
  return (
    <>
      <Suspense
        fallback={
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        }
      >
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
