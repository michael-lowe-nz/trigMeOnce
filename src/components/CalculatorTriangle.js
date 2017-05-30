import React, { Component } from 'react'

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
        <input maxLength="3" onChange={this.handleChangeHyp} value={this.props.state.triangle.hypotenuse}  className="circle grow hypotenuse"></input>
        <input type="tel" maxLength="3" onChange={this.handleChangeAdj} value={this.props.state.triangle.adjacent} className="circle grow adjacent"></input>
        <input type="tel" onChange={this.handleChangeOpp} maxLength="3" value={this.props.state.triangle.opposite} className="circle grow opposite"></input>
      </div>
    )
  }
}

export default Calculator
