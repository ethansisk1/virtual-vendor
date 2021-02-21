import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ColaCo Virtual Vendor</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Sodas</Link>
          </li>
          <li className="navbar-item">
          <Link to="/edit" className="nav-link">Edit Soda</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}