import React, { Component } from 'react';

import Nav from './components/Nav'
import LogoTriangle from './components/LogoTriangle'
import CalculatorTriangle from './components/CalculatorTriangle'

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
