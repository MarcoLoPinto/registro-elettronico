import React from "react";
import Userlist, {UserListElement} from "../../../components/Userlist/Userlist";
import AreaInputText from "../../../components/AreaInputText/AreaInputText";
import DatePicker from "../../../components/DatePicker/DatePicker";
import Alert from "../../../components/Alert/Alert";
import { getUserlist } from "../../../tools/api";
import Popup from "../../../components/Popup/Popup";

class PageRicercaUtenti extends React.Component{

    constructor(props){
        super(props);

        this.state = { elements:[], popupBody:(<div></div>) };

        this.getData = this.getData.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.alertCreation = React.createRef();
        this.popupUser = React.createRef();
    }

    getData(e){
        e.preventDefault();
        let inputNome = e.target.elements["nome"].value;
        let inputCognome = e.target.elements["cognome"].value;
        let inputDataNascita = e.target.elements["dataNascita"].value;
        let inputLuogoNascita = e.target.elements["luogoNascita"].value;
        let inputCodiceFiscale = e.target.elements["codiceFiscale"].value;
        if(inputNome==""&&
        inputCognome==""&&
        inputDataNascita==""&&
        inputLuogoNascita==""&&
        inputCodiceFiscale=="") this.alertCreation.current.toggleAlert();
        else getUserlist(inputNome,inputCognome,inputDataNascita,inputLuogoNascita,inputCodiceFiscale).then((elements)=>{
            this.setState({elements});
        }); //API
    }

    openPopup(index){
        console.log(this.state.elements[index]);
        let popupBody;
        switch(this.state.elements[index].tipo){
            case "genitore":
                popupBody = (
                    <div className="dropdown-divider"></div>
                );
                break;
            default:
                popupBody = (
                    <div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-divider"></div>
                    </div>
                );
                break;
        }
        this.setState({popupBody});
        this.popupUser.current.togglePopup();
    }

    render(){
        return(
            <div>
                <form className="d-flex flex-column mt-3 align-items-center" onSubmit={this.getData}>
                    <div className="d-flex flex-column align-items-center mt-5">
                        <div className="d-flex flex-row mt-3 justify-content-center">

                            <div className="d-flex flex-column">
                                <AreaInputText className="set-dimensions input-visible-classic" placeholder="Nome..." name="nome" />
                                <AreaInputText className="set-dimensions input-visible-classic mt-3" placeholder="Cognome..." name="cognome" />
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <DatePicker className="btn-success" name="dataNascita"/>
                                <button type="submit" className="btn btn-success mt-3">Cerca</button>
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <AreaInputText className="set-dimensions input-visible-classic" placeholder="Luogo di nascita..." name="luogoNascita" />
                                <AreaInputText className="set-dimensions input-visible-classic mt-3" placeholder="Codice fiscale..." name="codiceFiscale" />
                            </div>
                        </div>
                        
                    </div>
                    <Userlist className="mt-3">
                        {this.state.elements.map( (item,index) =>(
                            <UserListElement key={index} className="mouse-hover" onClick={() => this.openPopup(index)}>{Object.keys(item).map( (element) => (item[element]+" ") )}</UserListElement>
                        ))}
                    </Userlist>
                </form>
                <Alert ref={this.alertCreation} id="pageCreazioneProfili-popup-mininput" seconds="3" labelledby="pageCreazioneProfili-mininput" className="alert-bottom relative-center" alertclass="alert-style-material" >
                    I campi non possono essere vuoti!
                </Alert>
                <Popup id="popup-user" ref={this.popupUser}>
                    {this.state.popupBody}
                </Popup>
            </div>
        );
    }
}

export default PageRicercaUtenti;