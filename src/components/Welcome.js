import React from 'react'
import { Link } from 'react-router-dom'

module.exports = () =>
    <div className="content center-align">
      <img src="triangle.svg" className="triangle" alt="triangle"/>
      <h1 className="mainTitle center-align">trigMeOnce</h1>
      <p>A right angled triangle calculator.</p>
      <button><Link to="/calculator">start calculator</Link></button>
    </div>
