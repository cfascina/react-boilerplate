import React, {Component} from 'react';

// Components
var Nav = require('Nav');
var AboutDesc = require('AboutDesc');

class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <AboutDesc />
      </div>
    );
  }
}

module.exports = About;
