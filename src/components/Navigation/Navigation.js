import React from "react";

import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar, { SidebarLink } from "../Sidebar/Sidebar"

import { getUserInfo } from "../../tools/api";

import {Mainpage, Profilo, Messaggi, Logout, TimelineLink} from "../../pages";
import PageDocumenti from "../../pages/segreteria/PageDocumenti/PageDocumenti";
import PageCreazioneProfili from "../../pages/segreteria/PageCreazioneProfili/PageCreazioneProfili";
import PageDatiGenerici from "../../pages/segreteria/PageDatiGenerici/PageDatiGenerici";
import PageRicercaUtenti from "../../pages/segreteria/PageRicercaUtenti/PageRicercaUtenti";
import "./Navigation.css";

class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: "User"
        }
    }

    async componentDidMount(){
        let user = await getUserInfo();
        let username = user.nome + " " + user.cognome;
        this.setState({username});
    }

    render() {
        return (
            <div className="app-wrapper">
                <Navbar title="Registro Elettronico" user={this.state.username} links-navbar="" links-toggler="" />
                
                <div className="outer-navbar">
                    {/*Sidebar sidenav*/}
                    {/*Links desktop only view*/}
                    <Sidebar className="desktop-only-visible">
                        <SidebarLink to={"/timelinelink"}>TimelineLink</SidebarLink>
                        <SidebarLink to={"/profilo"}>AltroProfilo</SidebarLink>
                        <SidebarLink to={"/documenti"}>Documenti</SidebarLink>
                        <SidebarLink to={"/creazioneprofili"}>Creazione Profili</SidebarLink>
                        <SidebarLink to={"/datigenerici"}>Dati Generici</SidebarLink>
                        <SidebarLink to={"/ricercautenti"}>Ricerca Utenti</SidebarLink>
                    </Sidebar>

                    {/*Main content routing*/}
                    <div className="main-content customScrollBar container relative-main">
                        <Route path="/" exact component={Mainpage} />
                        <Route path="/profilo" exact component={Profilo} />
                        <Route path="/messaggi" exact component={Messaggi} />
                        <Route path="/logout" exact component={Logout} />
                        <Route path="/timelinelink" exact component={TimelineLink} />
                        <Route path="/documenti" exact component={PageDocumenti} />
                        <Route path="/creazioneprofili" exact component={PageCreazioneProfili} />
                        <Route path="/datigenerici" exact component={PageDatiGenerici} />
                        <Route path="/ricercautenti" exact component={PageRicercaUtenti} />
                    </div>

                </div>
            </div>
        );
    }
}

export default Navigation;