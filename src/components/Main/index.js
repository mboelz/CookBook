import React, { useEffect, useState } from 'react';
import styles from '../Main/Main.module.css'
import Introduce from './Introduce.js'



const Main = (props) => {


    

return(
    
    <div className={styles.main}>
    {props.children}
    </div>
    
)


}

export default Main;