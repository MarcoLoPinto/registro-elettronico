import React from "react";
import "./FileManager.css";
import MainButton from "../MainButton/MainButton";

class FileManager extends React.Component{

    render(){
        return(
            <div className="d-flex flex-row box-size align-items-center justify-content-between margin-filemanager">
                <i className="material-icons md-48 md-dark">insert_drive_file</i>
                <div className="d-flex flex-column">
                    <p className="no-margin-p">{this.props.name}</p>
                    <p className="no-margin-p">{this.props.date} - {this.props.category}</p>
                    {this.props.type?<p className="no-margin-p">{this.props.type}</p>:""}
                </div>
                <div className="d-flex flex-column align-items-stretch buttonlist-stretch">
                    {this.props.viewable?<MainButton className="no-padding-btn margin-btn" onClick={this.props.view}>Visualizza</MainButton>:""}
                    {this.props.downloadable?<MainButton className="no-padding-btn margin-btn" onClick={this.props.download}>Scarica</MainButton>:""}
                    {this.props.deletable?<MainButton className="no-padding-btn margin-btn" onClick={this.props.delete}>Elimina</MainButton>:""}
                </div>
                
            </div>
        );
    }
}

export default FileManager;