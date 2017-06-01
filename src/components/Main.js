import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LogoTriangle from './LogoTriangle'
import CalculatorTriangle from './CalculatorTriangle'

module.exports = ({ state, dispatch, sideType }) => {
  return (
    <Switch>
      <Route exact path="/" component={LogoTriangle}/>
      <Route path="/calculator" render={ () => <CalculatorTriangle state={state} dispatch={dispatch}/>}/>
    </Switch>
  )
}
