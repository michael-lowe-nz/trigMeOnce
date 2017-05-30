import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li className="button">trigMeOnce</li>
            <li className="button">About</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
