import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	//Not required by React. It is more of a function that belongs to a JavaScript
	constructor (props) {
		super(props);

		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position),
			(err) =>  console.log(err)
		);

	}


	// React says we have to define render! to return a jsx
	render () {

		return <div>Latitude: {this.state.lat} </div>;
	}
}

ReactDOM.render(
	<App />, document.querySelector('#root')

)