import React, { Component } from 'react'

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <img src="triangle.svg" className="triangle" alt="triangle"></img>
        <p className="hypotenuse">24</p>
        <p className="adjacent">80</p>
        <p className="opposite">65</p>
      </div>
    )
  }
}

export default Calculator
