import React from 'react';
import logo from '../../Assets/img/logo.png';
import styles from '../Header/Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo CookBook" />
    </div>
  );
};

export default Logo;
