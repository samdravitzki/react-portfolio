import React, { Component } from 'react';
import './App.css';
import HomeView from "./components/HomeView/HomeView.js"
import EducationView from "./components/EducationView/EducationView.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeView />
        <EducationView />
      </div>
    );
  }
}

export default App;
