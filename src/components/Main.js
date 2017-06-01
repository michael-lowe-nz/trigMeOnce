import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Welcome from './Welcome'
import CalculatorTriangle from './CalculatorTriangle'
import About from './About'

module.exports = ({ state, dispatch, sideType }) =>
  <Switch>
    <Route exact path="/" component={Welcome}/>
    <Route path="/calculator" render={ () => <CalculatorTriangle state={state} dispatch={dispatch}/>}/>
    <Route path="/about" component={About}/>
  </Switch>
