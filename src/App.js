import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SketchExample from './components/sketch-example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p className="logo">🎨</p>
          <h2>Welcome to Gamut</h2>
        </div>
       <div className="wrapper">
         <SketchExample/>
        </div>
      </div>
    );
  }
}

export default App;
