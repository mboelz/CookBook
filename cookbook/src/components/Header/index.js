import React from 'react';
import Logo from "./Logo"
import Navigation from './Navigation';
import styles from '../Header/Header.module.css'



const Header = () => {
  return <div className={styles.header}>
   
<Logo />
<h1>CookBook</h1>
<Navigation/>

  </div>;
};

export default Header;
