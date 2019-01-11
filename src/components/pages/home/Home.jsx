import React, {Component} from 'react';

// Components
var Nav = require('Nav');
var HomeDesc = require('HomeDesc');

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <HomeDesc />
      </div>
    );
  }
}

module.exports = Home;
