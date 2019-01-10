import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap';
require('applicationStyles');

class MyComp extends React.Component {
  render() {
    return(
      <div>
        <h2>Boilerplate Components</h2>
        <hr/>
        <div>
          <h3><label className="success">React</label></h3>
          <h3><label className="info">React-Bootstrap</label></h3>
          <h3><label className="default">Babel</label></h3>
          <h3><label className="default">WebPack</label></h3>
        </div>
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  componentDidMount() {
    // console.log($('button').attr('id'));
  }
  render() {
    return(
      <div className="jumbotron">
        {/*<img src="./assets/media/hycabp.png" alt="HydroCarbons Boilerplates" />*/}
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <MyComp />
      </div>
    );
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('app')
);
