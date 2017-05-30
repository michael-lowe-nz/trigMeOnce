import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import './index.css';

import reducer from './reducer'

const root = document.getElementById('root')

var initialState = {
  triangle: {
    hypotenuse: null,
    adjacent: null,
    opposite: null,
    a: null,
    b: null,
    c: null
  }
}

const {dispatch, getState, subscribe} = createStore(reducer, initialState)

subscribe(() => {
  render(<App />, root)
})

dispatch({type: 'INIT'})
