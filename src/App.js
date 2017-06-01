import React, { Component } from 'react';

import Main from './components/Main'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main state={this.props.state} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

export default App;
