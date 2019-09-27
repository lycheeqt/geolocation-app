import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	//Not required by React. It is more of a function that belongs to a JavaScript
	constructor (props) {
		super(props);

		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// We called setState!
				this.setState({ lat: position.coords.latitude});
			},
			err => {
				this.setState({ errorMessage: err.message });
			}
		);

	}


	// React says we have to define render! to return a jsx
	render () {
		if (this.state.errorMessage && !this.state.lat){
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat){
			return <div>Latitude: {this.state.lat}</div>;
		}

		return <div>Loading...</div>;
	}
}

ReactDOM.render(
	<App />, document.querySelector('#root')

)