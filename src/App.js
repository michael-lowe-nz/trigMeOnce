import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import LogoTriangle from './components/LogoTriangle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LogoTriangle />
      </div>
    );
  }
}

export default App;
