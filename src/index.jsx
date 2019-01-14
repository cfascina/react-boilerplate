import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

// Styles
require('ApplicationStyles');

// Components
var About = require('About');
var Axios = require('Axios');
var Home = require('Home');
var NotFound = require('NotFound');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/axios" component={Axios} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
