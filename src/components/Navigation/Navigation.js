import React from "react";

import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar, { SidebarLink } from "../Sidebar/Sidebar"

import {Mainpage, Profilo, Messaggi, Logout, TimelineLink} from "../../pages";

class Navigation extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <Navbar title="Registro Elettronico" user="PersonaUtente" links-navbar="" links-toggler="" />
                
                <div className="outer-navbar">
                    {/*Sidebar sidenav*/}
                    {/*Links desktop only view*/}
                    <Sidebar className="desktop-only-visible">
                        <SidebarLink to={"/timelinelink"}>TimelineLink</SidebarLink>
                        <SidebarLink to={"/profilo"}>AltroProfilo</SidebarLink>
                        <SidebarLink to={"/profilo"}>AltroProfilo</SidebarLink>
                    </Sidebar>

                    {/*Main content routing*/}
                    <div className="main-content customScrollBar container">
                        <Route path="/" exact component={Mainpage} />
                        <Route path="/profilo" exact component={Profilo} />
                        <Route path="/messaggi" exact component={Messaggi} />
                        <Route path="/logout" exact component={Logout} />
                        <Route path="/timelinelink" exact component={TimelineLink} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Navigation;