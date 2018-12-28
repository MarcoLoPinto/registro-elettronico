import React from "react";
import AreaInputText from "../../../components/AreaInputText/AreaInputText";
import MainDropDown from "../../../components/MainDropDown/MainDropDown";
import { createUserProfile } from "../../../tools/api";
import Alert from "../../../components/Alert/Alert";

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
                    <div className="d-flex flex-column align-items-center mt-3">
                        <div className="d-flex flex-row mt-3 justify-content-center">

                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column">
                                    <h4 className="d-flex justify-content-center">Nome</h4>
                                    <AreaInputText className="input-visible-classic" name="nome" />
                                </div>
                                <div className="d-flex flex-column mt-3">
                                    <h4 className="d-flex justify-content-center">Luogo di nascita</h4>
                                    <AreaInputText className="input-visible-classic" name="luogoNascita" />
                                </div>
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <div className="d-flex flex-column">
                                    <h4 className="d-flex justify-content-center">Cognome</h4>
                                    <AreaInputText className="input-visible-classic" name="cognome" />
                                </div>
                                <div className="d-flex flex-column mt-3">
                                    <h4 className="d-flex justify-content-center">Codice fiscale</h4>
                                    <AreaInputText className="input-visible-classic" name="codiceFiscale" />
                                </div>

                                <button type="submit" className="btn btn-success mt-3">Crea</button>
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <div className="d-flex flex-column">
                                    <h4 className="d-flex justify-content-center">Anno di nascita</h4>
                                    <AreaInputText className="input-visible-classic" name="annoNascita" />
                                </div>
                                <div className="d-flex flex-column mt-3">
                                    <h4 className="d-flex justify-content-center">Tipo profilo</h4>
                                    <MainDropDown className="dropdown-centered btn-success" maxwidth={"100%"} options={["Insegnante", "Studente", "Genitore"]} name="tipoProfilo" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </form>

                <Alert ref={this.alertCreation} id="pageCreazioneProfili-popup-mininput" seconds="3" labelledby="pageCreazioneProfili-mininput" className="alert-bottom" alertclass="alert-style-material" >
                    I campi non possono essere vuoti!
                </Alert>
            </div>
        );
    }
}

export default PageCreazioneProfili;