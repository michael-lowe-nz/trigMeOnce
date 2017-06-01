import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Welcome from './Welcome'
import Calculator from './Calculator'
import About from './About'

module.exports = ({ state, dispatch, sideType }) =>
  <Switch>
    <Route exact path="/" component={Welcome}/>
    <Route path="/calculator" render={() => <Calculator state={state} dispatch={dispatch}/>}/>
    <Route path="/about" component={About}/>
  </Switch>
