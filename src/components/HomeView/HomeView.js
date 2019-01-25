import React, { Component } from 'react';
import styles from './HomeView.module.css';
import CoolBackGround from '../CoolBackGround/CoolBackGround';
import ContentContainer from '../ContentContainer.js';

export class HomeView extends Component {

  render() {
    return (
      <div className={styles.homeView}>
          <CoolBackGround bgColor='#282c34' textColor='#414652' />
          <div style={containerWrapperStyle}>
            <ContentContainer />
          </div>
      </div>
    )
  }
}

const containerWrapperStyle = {
  display: 'flex',
  maxWidth: '100%',
  width: '100vw',
  height: '100vh',
  padding: '6vh 5vw 6vh 5vw',
  outline: '25px solid #fff',
  outlineOffset: '-3vw',
  outlineRadius: '10%'

}

export default HomeView
