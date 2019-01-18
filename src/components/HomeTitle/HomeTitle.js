import React, { Component } from 'react'
import './HomeTitle.css'

export class HomeTitle extends Component {
  render() {
    return (
      <div className="HomeTitle">
        <span className="Name">{fname}</span> <br></br>
        <span className="Name">{lname}</span><br></br>
        <span className="Blurb">{blurb}</span>
      </div>
    )
  }
}

const fname = "⧅ Sam";
const lname = "Dravitzki";
const blurb = "Just a dude"

export default HomeTitle
