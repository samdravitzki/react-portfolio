import React, { Component } from 'react'
import styles from './CoolBackGround.module.css'

export class CoolBackGround extends Component {
  render() {
    return (
      // <div className="CoolBackGround" style={{backgroundColor: this.props.bgColor, color: this.props.textColor}}>
      //   <span class="pattern"> {generateBackground(999)} </span>
      //</div>
      
      <div className={styles.CoolBackGround} style={{backgroundColor: this.props.bgColor, color: this.props.textColor}}>
        <div className={styles.gridContainer}> 
          {generateSlashes(1000).map(slash => (
            <div>{slash}</div>
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
