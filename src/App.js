import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Triangle from './components/Triangle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"Hello Triangle"}/>
        <Triangle />
      </div>
    );
  }
}

export default App;
