import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul>
            <li className="button grow"><Link to="/">trigMeOnce</Link></li>
            <li className="button grow"><Link to="/calculator">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
