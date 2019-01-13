import React, { Component } from 'react'
import './EducationView.css'

import CoolBackGround from '../CoolBackGround/CoolBackGround.js'

export class EducationView extends Component {
  render() {
    return (
      <div className="EducationView">
        <CoolBackGround bgColor='#fff' textColor='#e8e9ed'/>
        <h1>Education</h1>
      </div>
    )
  }
}

export default EducationView
