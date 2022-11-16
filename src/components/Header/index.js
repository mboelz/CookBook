import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
// import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // <div className={styles.header}>
    <div className="bg-[#EA9AB2] flex justify-around items-center p-4">
      <Logo />
      <Link to="/">
        <h1 className="text-xl font-bold">CookBook</h1>
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
