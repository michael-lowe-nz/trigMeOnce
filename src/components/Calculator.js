import React, { Component } from 'react'
import Value from './Value'


class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <img src="triangleAngle.svg" className="triangle" alt="triangle"></img>
        <Value state={this.props.state} dispatch={this.props.dispatch} sideType="hypotenuse" />
        <Value state={this.props.state} dispatch={this.props.dispatch} sideType="opposite" />
        <Value state={this.props.state} dispatch={this.props.dispatch} sideType="adjacent" />
      </div>
    )
  }
}

export default Calculator
