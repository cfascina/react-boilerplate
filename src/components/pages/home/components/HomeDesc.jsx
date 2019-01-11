import React, {Component} from 'react';

class HomeDesc extends Component {
 render() {
   return (
    <div className="jumbotron">
      <h1 className="display-4">Hi there, folks!</h1>
      <hr className="my-4" />
      <p className="lead">
        This is a boilerplate to help you quickly get up and running a basic React Web Application.
      </p>
      <p className="lead">
        It has several things implemented. Go to the About page to explore!
      </p>
    </div>
   );
 }
}

module.exports = HomeDesc;
