import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

class Navbar extends React.Component {

    render() { // title, user, 
        return (
            //Navigation top bar
            <nav {...this.props} className="navbar navbar-dark bg-success navbar-expand-md justify-content-center navbar-height" role="navigation">

                {/*Logo&Name*/}
                <div className="navbar-brand w-50 mr-auto">
                    <img src={require("./logo.svg")} width="30" className="d-inline-block align-top" alt="logo"></img>
                    <Link className="text-white no-link-style" to="/">
                        {this.props.title}
                    </Link>
                </div>

                {/*Toggler*/}
                <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                    <ul className="navbar-collapse navbar-nav mr-auto w-100 justify-content-center">

                        {/*User Name*/}
                        <li className="nav-item active nav-link">
                            {this.props.user}
                        </li>

                    </ul>

                    <ul className="navbar-nav mr-auto ml-auto w-100 justify-content-end">
                        {/*Links mobile only view*/}
                        <Link className="nav-link link-text mobile-only-visible" to="/timelinelink">{"TimelineLink"}</Link>


                        <div className="dropdown-divider mobile-only-visible"></div>

                        {/*Desktop+Mobile view*/}
                        <Link className="nav-link link-text" to="/profilo">{"Profilo"}</Link>
                        <Link className="nav-link link-text" to="/messaggi">{"Messaggi"}</Link>
                        <Link className="nav-link link-text" to="/logout">{"Logout"}</Link>

                    </ul>

                </div>

            </nav>

        );
    }



}

export default Navbar;