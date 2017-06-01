import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './App';
import CalculatorTriangle from './components/CalculatorTriangle'
import reducer from './reducer'
import './index.css';

const root = document.getElementById('root')

var initialState = {
  triangle: {
    hypotenuse: 50,
    adjacent: 30,
    opposite: 40,
    a: null,
    b: null,
    c: null
  }
}

const { getState, dispatch, subscribe} = createStore(reducer, initialState)

subscribe(() => {
  render(<App state={getState()} dispatch={dispatch}/>, root)
})

dispatch({type: 'INIT'})
