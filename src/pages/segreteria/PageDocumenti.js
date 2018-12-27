import React from "react";
import FileManager from "../../components/FileManager/FileManager";

import { getDocuments } from "../../tools/api";


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
    
                <div className="width-50">
                {this.state.documents.map(
                    document => {
                        return(
                            <FileManager name={document.oggetto} date={document.data}  category={document.categoria} viewable="true" downloadable="true" view={() => {alert("view")}} download={() => {alert("download")}}/>
                        )
                    }
                )}
                </div>
            </div>
        );
    }
}