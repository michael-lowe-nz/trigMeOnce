import React, { Component } from 'react'

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <img src="triangle.svg" className="triangle" alt="triangle"></img>
        <div className="hypotenuse">24</div>
        <div className="adjacent">80</div>
        <div className="opposite">65</div>
      </div>
    )
  }
}

export default Calculator
