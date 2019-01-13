import React, { Component } from 'react'
import "./Navbutton.css"

export class Navbutton extends Component {

  
  
  render() {
    return (
      <button className="Navbutton">{this.props.label}</button>
    )
  }
}

export default Navbutton

