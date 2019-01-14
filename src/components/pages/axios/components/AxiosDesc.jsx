import React, {Component} from 'react';

var AxiosAPI = require('AxiosAPI');

class AxiosDesc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carsBrands: []
    }
  }
	componentDidMount() {
		AxiosAPI.get('carros/marcas').then(response => {
			var carsBrands = response.data;
			this.setState({carsBrands});
			// console.log(carsBrands);
		});
	}
  render() {
    return (
			<div className="jumbotron">
				<h1 className="display-4">Axios</h1>
				<hr className="my-4" />
				<ul>
					{this.state.carsBrands.map(carBrand =>
						<li key={carBrand.codigo}>{carBrand.nome}</li>
					)}
				</ul>
			</div>
    );
  }
}

module.exports = AxiosDesc;
