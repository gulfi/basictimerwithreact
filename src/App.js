import React, { Component } from 'react';
import './App.css';
import BasicTimer from './BasicTimer';
import CountDownTimer from './CountDownTimer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <BasicTimer start={Date.now()}/>
        </div>
      </div>
    );
  }
}

export default App;
