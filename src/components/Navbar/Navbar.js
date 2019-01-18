import React, { Component } from 'react'
import Navbutton from "./../Navbutton/Navbutton.js"
import "./Navbar.css"

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [
        {
          id: 0,
          label: 'Home'
        },
        {
          id:1,
          label: 'Education'
        },
        {
          id:2,
          label: 'History'
        }
      ]
    }
  }
  

  render() {
    return (
      <div className="Navbar">
        
        {
          this.state.buttons.map(button => {
            return <Navbutton label={button.label} />})
        }
      </div>
    )
  }
}

export default Navbar
