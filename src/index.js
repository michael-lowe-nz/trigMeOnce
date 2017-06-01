import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

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
  render(
    <BrowserRouter>
      <App state={getState()} dispatch={dispatch}/>
    </BrowserRouter>
    , root)
})

dispatch({type: 'INIT'})
