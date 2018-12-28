import React from "react";
import AreaInputText from "../../../components/AreaInputText/AreaInputText";
import MainDropDown from "../../../components/MainDropDown/MainDropDown";
import { createUserProfile } from "../../../tools/api";
import Alert from "../../../components/Alert/Alert";
import "./PageCreazioneProfili.css";

class PageCreazioneProfili extends React.Component{ //TODO: auto-redirect to ricerca utenti(?)

    constructor(props){
        super(props);

        this.postData = this.postData.bind(this);

        this.alertCreation = React.createRef();
    }

    postData(e){
        e.preventDefault();
        let inputNome = e.target.elements["nome"].value;
        let inputCognome = e.target.elements["cognome"].value;
        let inputAnnoNascita = e.target.elements["annoNascita"].value;
        let inputLuogoNascita = e.target.elements["luogoNascita"].value;
        let inputCodiceFiscale = e.target.elements["codiceFiscale"].value;
        let dropTipoProfilo = e.target.elements["tipoProfilo"].value;
        if(inputNome==""||
        inputCognome==""||
        inputAnnoNascita==""||
        inputLuogoNascita==""||
        inputCodiceFiscale==""||
        dropTipoProfilo=="") this.alertCreation.current.toggleAlert();
        
        createUserProfile(inputNome,inputCognome,inputAnnoNascita,inputLuogoNascita,inputCodiceFiscale,dropTipoProfilo); //API
    }

    render(){
        return(
            <div>
                <form onSubmit={this.postData}>
                    <div className="d-flex flex-column align-items-center mt-5">
                        <div className="d-flex flex-row mt-3 justify-content-center">

                            <div className="d-flex flex-column">
                                <AreaInputText className="set-dimensions input-visible-classic" placeholder="Nome..." name="nome" />
                                <AreaInputText className="set-dimensions input-visible-classic mt-3" placeholder="Luogo di nascita..." name="luogoNascita" />
                            </div>
                            <div className="d-flex flex-column ml-3">
                                
                                <AreaInputText className="set-dimensions input-visible-classic" placeholder="Cognome..." name="cognome" />
                                <AreaInputText className="set-dimensions input-visible-classic mt-3" placeholder="Codice fiscale..." name="codiceFiscale" />

                                <button type="submit" className="btn btn-success mt-3">Crea</button>
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <AreaInputText className="set-dimensions input-visible-classic" placeholder="Anno di nascita..." name="annoNascita" />
                                <MainDropDown className="set-dimensions dropdown-centered btn-success dropdown-padding mt-3" maxwidth={"100%"} options={["Insegnante", "Studente", "Genitore"]} name="tipoProfilo" />
                            </div>
                        </div>
                        
                    </div>
                </form>

                <Alert ref={this.alertCreation} id="pageCreazioneProfili-popup-mininput" seconds="3" labelledby="pageCreazioneProfili-mininput" className="alert-bottom relative-center" alertclass="alert-style-material" >
                    I campi non possono essere vuoti!
                </Alert>
            </div>
        );
    }
}

export default PageCreazioneProfili;