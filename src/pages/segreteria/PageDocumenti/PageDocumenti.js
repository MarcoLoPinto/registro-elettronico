import React from "react";
import "./PageDocumenti.css";

import { getDocuments, searchDocuments } from "../../../tools/api";

import FileManager from "../../../components/FileManager/FileManager";
import MainDropDown from "../../../components/MainDropDown/MainDropDown";
import DatePicker from "../../../components/DatePicker/DatePicker";
import AreaInputText from "../../../components/AreaInputText/AreaInputText";


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

        this.search = this.search.bind(this);
    }

    async componentDidMount(){
        let documents = await getDocuments();
        this.setState({documents});
    }

    async search(e){
        e.preventDefault();
        let n = e.currentTarget;
        let documents = await searchDocuments(n.da.value,n.a.value,n.categoria.value,n.keyword.value);
        this.setState({documents});
    }


    render(){
        return (
            <div>
                <h2 className="d-flex justify-content-center">
                    Profilo
                </h2>
                <div className="horizontal-container">
                    <div className="document-block flex-fill">
                    {this.state.documents.map(
                        (document,index) => {
                            return(
                                <FileManager name={document.oggetto} date={document.data} key={index} category={document.categoria} viewable="true" downloadable="true" view={() => {alert("view")}} download={() => {alert("download")}}/>
                            )
                        }
                    )}
                    </div>
                    <form onSubmit={this.search}>
                        <div className="filter-block flex-fill">
                            <DatePicker className="btn-success" label="Da:" name="da"/>
                            <DatePicker className="btn-success" label="A:" name="a"/>
                            <MainDropDown options={["Licenza", "Ferie", "Pagelle", "Altro"]} maxwidth={"100%"} className="dropdown-centered btn-success" style={{height: "40px",margin: "0 8px", marginBottom: "6px"}} name="categoria"/>
                            <AreaInputText className="input-visible-classic input-area-documenti" name="keyword" />
                            <button type="submit" className="btn btn-success" style={{height: "40px", marginBottom: "6px"}}>Cerca</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}