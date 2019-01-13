import React, { Component } from 'react'
import './CoolBackGround.css'

export class CoolBackGround extends Component {
  render() {
    return (
      <div className="CoolBackGround" style={{backgroundColor: this.props.bgColor, color: this.props.textColor}}>
        <span class="pattern"> {generateBackground(999)} </span>
      </div>
    )
  }
}

const generateBackground = (slashCount) => {
  const fslash = '⋰';
  const bslash = '⧅';
  
  let output = "";

  for(let i = 0; i < slashCount; i++){
    let randomNumber = Math.random();

    output += randomNumber < 0.7 ? fslash : bslash;

    if (i % 30 === 0) {
      output += '\n';
    }
  }

  return output;
}

export default CoolBackGround
