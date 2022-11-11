import React, { useEffect, useState } from 'react';
import styles from '../Main/Main.module.css';
import Introduce from './Introduce.js';

const Main = props => {
  return <div className="xl:m-20">{props.children}</div>;
};

export default Main;
