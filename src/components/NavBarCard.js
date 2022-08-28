import React, { useState } from 'react';
import styles from '../styles/NavBar.module.css';

function Card(props){


    return(
      <div className={styles.card}>
  
          {
            <ul className={styles.cardUl}>
              <li>카드 추천</li>
              {
                props.cardDetail0.map((detail)=>{
                  return(
                    <li>{detail}</li>
                  )
                })
              }
            </ul>
          }
          
          {
            <ul className={styles.cardUl}>
              <li>상황별 추천카드</li>
              {
                props.cardDetail1.map((detail)=>{
                  return(
                    <li>{detail}</li>
                  )
                })
              }
            </ul>
          }
  
        {
            <ul className={styles.cardUl}>
              <li>테마별 추천카드</li>
              {
                props.cardDetail2.map((detail)=>{
                  return(
                    <li>{detail}</li>
                  )
                })
              }
            </ul>
          }
  
        {
            <ul className={styles.cardUl}>
              <li>카드 상식</li>
              {
                props.cardDetail3.map((detail)=>{
                  return(
                    <li>{detail}</li>
                  )
                })
              }
            </ul>
          }

      </div>
    )
  }
  export default Card;