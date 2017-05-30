import React, { Component } from 'react';

import Nav from './components/Nav'
import LogoTriangle from './components/LogoTriangle'
import CalculatorTriangle from './components/CalculatorTriangle'

import {trigCalculator} from 'trigonometry-calculator'

let unsolvedTriangle = {
  angles: { 2: 117 },
  sides: { 0: 6.9, 1: 2.6 }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <CalculatorTriangle state={this.props.state} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

export default App;
