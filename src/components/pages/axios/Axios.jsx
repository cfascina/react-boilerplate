import React, {Component} from 'react';

// Components
var Nav = require('Nav');
var AxiosDesc = require('AxiosDesc');

class Axios extends Component {
  render() {
    return (
      <div>
        <Nav />
        <AxiosDesc />
      </div>
    );
  }
}

module.exports = Axios;
