import React, { Component } from 'react'
import './HomeView.css'
import Navbar from "./../Navbar/Navbar.js";
import HomeTitle from './../HomeTitle/HomeTitle.js';
import CoolBackGround from '../CoolBackGround/CoolBackGround';

export class HomeView extends Component {
  render() {
    return (
      <div className="HomeView">
          <CoolBackGround bgColor='#282c34' textColor='#414652' />
          <Navbar/>
          <HomeTitle/>
      </div>
    )
  }
}

export default HomeView
