import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import React from 'react';

const Layout = props => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
