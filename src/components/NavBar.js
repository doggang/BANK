import React, { useState } from 'react';
import styles from '../styles/NavBar.module.css';
import Card from './NavBarCard.js';


function NavBar(){

  let [cardDetail0] = useState(["카드 이벤트", "나의 BEST 카드 찾기", "인기 카드 TOP 10", 
  "연회비 지원 상품", "테마별 카드추천", "신용카드 추천"]);
  let [cardDetail1] = useState(["자취족, 싱글족을 위한 카드", "주유 할인 카드", "온라인쇼핑 할인카드",
  "주부를 위한 카드", "편의점 할인카드"]);
  let [cardDetail2] = useState(["디자인이 이쁜 카드", "항공 마일리지 카드", "후불 하이패스 카드",
  "KTX 할인카드"]);
  let [cardDetail3] = useState(["최고의 신용카드를 고르는 법", "신용카드 기본기",
  "신용카드 할부결제 취소하려면?", "카드 분실 시 대처법", "PP카드 없이 공항라운지 이용하는 법"]);

    return(
      <div>
        <div className={styles.container}>
          <img className={styles.nav_logo} src="./img/logo.jpg" alt=""/>
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
        <Card cardDetail0={cardDetail0} cardDetail1={cardDetail1} 
        cardDetail2={cardDetail2} cardDetail3={cardDetail3}
        />
      </div>
    )
  }

export default NavBar;