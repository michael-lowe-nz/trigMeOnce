import React, { Component } from 'react'
import Value from './Value'


class Calculator extends Component {
  constructor(props) {
    super(props)
    this.handleChangeHyp = this.handleChangeHyp.bind(this)
    this.handleChangeAdj = this.handleChangeAdj.bind(this)
    this.handleChangeOpp = this.handleChangeOpp.bind(this)
  }
  handleChangeHyp(e) {
    this.props.dispatch(
      {
        type: 'ADD_LENGTH',
        payload: { side: 'hypotenuse', length: e.target.value}
      }
    )
  }
  handleChangeAdj(e) {
    this.props.dispatch(
      {
        type: 'ADD_LENGTH',
        payload: { side: 'adjacent', length: e.target.value}
      }
    )
  }
  handleChangeOpp(e) {
    this.props.dispatch(
      {
        type: 'ADD_LENGTH',
        payload: { side: 'opposite', length: e.target.value}
      }
    )
  }
  render() {
    return (
      <div className="calculator">
        <img src="triangle.svg" className="triangle" alt="triangle"></img>
        <Value state={this.props.state} dispatch={this.props.dispatch} sideType="hypotenuse" />
        <Value state={this.props.state} dispatch={this.props.dispatch} sideType="opposite" />
        <Value state={this.props.state} dispatch={this.props.dispatch} sideType="adjacent" />
      </div>
    )
  }
}

export default Calculator
