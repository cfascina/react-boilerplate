import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
var Nav = require('Nav');

class NotFound extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="jumbotron">
          <div className="display-4 text-center">Sorry!<br />The page was not found =(</div>
          <p className="lead text-center mt-4">Go back to <Link to="/">Home</Link></p>
        </div>
      </div>
    );
  }
}

module.exports = NotFound;
