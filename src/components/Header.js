import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Trig me once...</h1>
        <p>Title: {this.props.title}</p>
      </div>
    );
  }
}

export default Header;
