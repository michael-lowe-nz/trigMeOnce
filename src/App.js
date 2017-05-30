import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import LogoTriangle from './components/LogoTriangle'
import CalculatorTriangle from './components/CalculatorTriangle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CalculatorTriangle />
      </div>
    )
  }
}

export default App;
