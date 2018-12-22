import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Navigation />
				</Router>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);