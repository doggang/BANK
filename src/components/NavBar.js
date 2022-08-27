import React, { useState } from 'react';
import styles from '../styles/NavBar.module.css';

function NavBar(){
    return(
      <div className={styles.container}>
        <img className={styles.nav_logo} src="/img/logo.jpg" alt=""/>
        <ul className={styles.nav_ul}>
          <li className={styles.nav_li}>카드</li>
          <li className={styles.nav_li}>은행</li>
          <li className={styles.nav_li}>투자</li>
          <li className={styles.nav_li}>대출</li>
          <li className={styles.nav_li}>연금</li>
          <li className={styles.nav_li}>핀테크</li>
          <li className={styles.nav_li}>매거진</li>
        </ul>
      </div>
    )
  }

export default NavBar;