import React, { Component } from 'react'
import './CoolBackGround.css'

export class CoolBackGround extends Component {
  render() {
    return (
      // <div className="CoolBackGround" style={{backgroundColor: this.props.bgColor, color: this.props.textColor}}>
      //   <span class="pattern"> {generateBackground(999)} </span>
      // </div>
      
      <div className="CoolBackGround" style={{backgroundColor: this.props.bgColor, color: this.props.textColor}}>
        <div className="grid-container"> 
          {generateSlashes(1000).map(slash => (
            <div className="grid-cell">{slash}</div>
          ))} 
        </div>
      </div>
    )
  }
}

// REFACTOR to use array methods
const generateSlashes = (slashCount) => {
  const fslash = '⋰';
  const bslash = '⧅';
  
  let output = [];

  for(let i = 0; i < slashCount; i++){
    let randomNumber = Math.random();

    output.push(randomNumber < 0.7 ? fslash : bslash);
  }

  return output;
}

export default CoolBackGround
