import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import './index.css';

import reducer from './reducer'

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

const { dispatch, getState, subscribe } = createStore(reducer, initialState)

subscribe(() => {
  render(<App state={getState()} dispatch={dispatch}/>, root)
})

dispatch({type: 'INIT'})
