import React from 'react';

import { render } from 'react-dom';
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import reducer from './reducer'
import './index.css';

const root = document.getElementById('root')

var initialState = {
  triangle: {
    hypotenuse: 50,
    adjacent: 30,
    opposite: 40,
    a: null,
    b: 90,
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
