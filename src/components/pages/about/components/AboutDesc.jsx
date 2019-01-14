import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as jQueryLog from 'jQueryLog';


class AboutDesc extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		}

		this.sayHello = this.sayHello.bind(this);
	}
	componentDidMount() {
		jQueryLog.getInputInfo();
	}
	sayHello(e) {
		var nameLenght = e.target.value.length;

		if(nameLenght === 0) {
			this.setState({name: ''});
		}
		else {
			this.setState({name: 'Hello '  + e.target.value + '!'});
		}
	}
	render() {
		return (
			<div className="jumbotron about">
				<h1 className="display-4">About</h1>
				<hr className="my-4" />
				<p className="lead">
					1. As you can see, it has <span className="badge badge-info">Bootstrap 4</span> already implemented.
				</p>
				<p className="lead">
					2. A simple React feature to test it out:
				</p>
				<div className="row mb-2">
					<div className="col-md-4 col-sm-12">
						<input type="text" className="form-control" id="name" placeholder="Type your name" onChange={this.sayHello} />
					</div>
					<div className="col-md-8 col-sm-8">
						<p className="lead hello">{this.state.name}</p>
					</div>
				</div>
				<p className="lead feature-jquery">
					3. It comes with <span className="badge badge-info">jQuery</span> too (check your browser log).
				</p>
				<p className="lead">
					4. The SASS is already configured. You can create your <span className="badge badge-info">.scss</span> files on <span className="badge badge-info">/src/scss/</span> folder.
				</p>
				<p className="lead">
					5. The <span className="badge badge-info">Hot Reload</span> feature is already working. Update any file and check the browser without refreshing.
				</p>
				<p className="lead">
					6. On components changes, only them are being refreshed. Change from Home and About page and observe how the navbar does not reaload.
				</p>
				<p className="lead">
					7. There is standard page configuration for non-existent URLs. You can check clicking <Link to="/something">here</Link> or typing anything except <span className="font-weight-bold">home</span> or <span className="font-weight-bold">about</span> after the last slash on the browser URL.
				</p>
			</div>
		);
	}
}

module.exports = AboutDesc;
