import React, { Component } from 'react'
import './EducationView.css'

import CoolBackGround from '../CoolBackGround/CoolBackGround.js'

export class EducationView extends Component {
  render() {
    return (
      <div className="EducationView">
        {/* <div className="imageContainer">
        </div>
        <div className="educationInfoContainer">  */}
          <CoolBackGround  bgColor='#fff' textColor='#e8e9ed'/>
        {/* </div> */}
      </div>
    )
  }
}

export default EducationView
