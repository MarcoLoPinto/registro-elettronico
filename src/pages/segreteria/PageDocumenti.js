import React from "react";
import "./PageDocumenti.css";

import { getDocuments } from "../../tools/api";

import FileManager from "../../components/FileManager/FileManager";
import MainDropDown from "../../components/MainDropDown/MainDropDown";
import DatePicker from "../../components/DatePicker/DatePicker";
import TimePicker from "../../components/TimePicker/TimePicker";


export default class PageDocumenti extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            documents:[
                {
                    oggetto: "Caricamento...",
                    data: "...",
                    categoria: "..."
                }
            ]
        }
    }

    async componentDidMount(){
        let documents = await getDocuments();
        this.setState({documents});
    }


    render(){
        return (
            <div>
                <h2 className="d-flex justify-content-center">
                    Profilo
                </h2>
                <div className="horizontal-container">
                    <div className="width-50 flex-fill">
                    {this.state.documents.map(
                        document => {
                            return(
                                <FileManager name={document.oggetto} date={document.data}  category={document.categoria} viewable="true" downloadable="true" view={() => {alert("view")}} download={() => {alert("download")}}/>
                            )
                        }
                    )}
                    </div>
                    <div className="filter-block flex-fill">
                        <DatePicker className="btn-success" label="Da:"/>
                        <DatePicker className="btn-success" label="A:"/>
                        <MainDropDown options={["Licenza", "Ferie", "Pagelle", "Altro"]} maxwidth={"100%"} className="dropdown-centered btn-success" />
                    </div>
                </div>
            </div>
        );
    }
}