import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter as Router, Switch} from "react-router-dom";

class App extends React.Component {

	render() {
		return (
			<Router>
				<Switch>
					<Navigation />
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);