import React, { Component } from 'react'
import './CoolBackGround.css'

export class CoolBackGround extends Component {
  render() {
    return (
      <div className="CoolBackGround">
        {generateBackground(1000)}
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

    output += randomNumber < 0.5 ? fslash : bslash;

    if (i % 30 == 0) {
      output += '\n';
    }
  }

  return output;
}

export default CoolBackGround
