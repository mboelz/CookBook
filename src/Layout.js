import Header from "./components/Header";
// import Main from "./components/Main";
import Footer from './components/Footer';

import React from 'react'

const Layout = (props) => {
  return (
    <>
    <Header/>
    <div>{props.children}</div>
    <Footer/>
    </>
  )
}

export default Layout