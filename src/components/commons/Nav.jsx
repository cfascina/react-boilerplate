import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <span className="navbar-brand">React Boilerplate</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/axios" className="nav-link">Axios</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Nav;
