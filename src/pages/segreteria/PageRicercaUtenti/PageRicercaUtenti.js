import React from "react";
import Userlist, {UserListElement} from "../../../components/Userlist/Userlist";
import AreaInputText from "../../../components/AreaInputText/AreaInputText";
import DatePicker from "../../../components/DatePicker/DatePicker";
import MainTextarea from "../../../components/MainTextarea/MainTextarea";
import Alert from "../../../components/Alert/Alert";
import { getUserlist, getChildren, setAsChild, removeAsChild, getClassiAndPortfolio } from "../../../tools/api";
import Popup, {PopupBody} from "../../../components/Popup/Popup";
import MainDropDown from "../../../components/MainDropDown/MainDropDown";

class PageRicercaUtenti extends React.Component{

    constructor(props){
        super(props);

        this.state = { 
            elements:[],
            selected: {tipo: null},
            popupBody:(<div></div>),
            selectedElementsStudente: "Caricamento...",
            selectedElementsGenitore: "Caricamento...",
            selectedElementsInsegnante: "Caricamento..."
        };

        this.getData = this.getData.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.getFigli = this.getFigli.bind(this);
        this.alertCreation = React.createRef();
        this.popupUser = React.createRef();
        
        this.setChild = this.setChild.bind(this);
        this.removeChild = this.removeChild.bind(this);
        this.getStudentElements = this.getStudentElements.bind(this);
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

    async getFigli(id){
        let selectedElementsGenitore = (await getChildren(id)).map((item)=> <p onClick={()=>this.removeChild(item.ID,id)} className="mouse-hover">{"remove "+item.ID}</p>);
        this.setState({selectedElementsGenitore}/*,()=>console.log(figli)*/);
        //console.log(this.state);
    }

    async getStudentElements(id){
        let selectedElementsStudente = (await getClassiAndPortfolio(id)); //continue from here
        selectedElementsStudente.classi = ( <MainDropDown options={selectedElementsStudente.classi.map((item)=>  item.sezione+item.anno_sezione)} className="dropdown-centered btn-success" />  );
        this.setState({selectedElementsStudente}/*,()=>console.log(figli)*/);
        //console.log(this.state);
    }

    openPopup(index){
        this.setState((state) => ({selected: state.elements[index]}),()=>{
            switch(this.state.selected.tipo){
                case "genitore":
                    this.setState({selectedElementsGenitore:"Caricamento..."},()=>this.getFigli(this.state.elements[index].ID));
                    this.popupUser.current.togglePopup();
                    break;
                case "studente":
                    this.setState({selectedElementsStudente:"Caricamento..."},()=>this.getStudentElements(this.state.elements[index].ID));
                    this.popupUser.current.togglePopup();
                    break;
                default:
                    break;
            }
        });
        
    }

    setChild(e,fatherid){
        e.preventDefault();
        let inputID = e.target.elements["id"].value;
        console.log("adding "+inputID+" to father: "+fatherid);
        if(inputID=="") this.alertCreation.current.toggleAlert();
        else {
            setAsChild(inputID,fatherid); //API
            this.getFigli(fatherid);
        }
    }

    removeChild(id,fatherid){
        console.log("removing "+id+" from father: "+fatherid);
        removeAsChild(id,fatherid); //API
        this.getFigli(fatherid);

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
                    <PopupBody>
                        { 
                            this.state.selected.tipo == "genitore" && (
                                <div>
                                    <form className="d-flex flex-row justify-content-center" onSubmit={ (e) => this.setChild(e,this.state.selected.ID)}>
                                        <AreaInputText className="input-visible-classic input-area-documenti" name="id" />
                                        <button type="submit" className="btn btn-success">+</button>
                                    </form>
                                    <div className="dropdown-divider"></div>
                                    {this.state.selectedElementsGenitore}
                                </div>
                            )
                        }
                        { 
                            this.state.selected.tipo == "insegnante" && (
                                <div>
                                    <div className="d-flex flex-row justify-content-center">
                                        <AreaInputText className="input-visible-classic input-area-documenti" name="keyword" />
                                        <button type="submit" className="btn btn-success">+</button>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    {this.state.selectedElementsInsegnante?this.state.selectedElementsInsegnante:"Caricamento..."}
                                </div>
                            )
                        }
                        { 
                            this.state.selected.tipo == "studente" && (
                                <div>
                                    <form className="d-flex flex-row justify-content-center" onSubmit={ this.setPermissions }>
                                        <AreaInputText className="input-visible-classic input-area-documenti" placeholder="ritardo" name="ritardo" />
                                        <AreaInputText className="input-visible-classic input-area-documenti" placeholder="uscita" name="uscita" />
                                        {this.state.selectedElementsStudente.classi?this.state.selectedElementsStudente.classi:"Caricamento..."}
                                        <button type="submit" className="btn btn-success">Modifica</button>
                                    </form>
                                    <div className="dropdown-divider"></div>
                                    <MainTextarea value={this.state.selectedElementsStudente.portfolio?this.state.selectedElementsStudente.portfolio:"Caricamento..."}/>
                                </div>
                            )
                        }
                    </PopupBody>
                </Popup>
            </div>
        );
    }
}

export default PageRicercaUtenti;