import React from "react";
import Popup, { PopupHeader, PopupCloseIcon, PopupBody, PopupFooter, PopupCloseButton } from "../../components/Popup/Popup";
import MainTextarea from "../../components/MainTextarea/MainTextarea";
import AreaInputText from "../../components/AreaInputText/AreaInputText";
import ImportFileList from "../../components/ImportFileList/ImportFileList";
import { sendEmail } from "../../tools/api";


class EmailPopup extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            files: []
        }

        this.getFileData = this.getFileData.bind(this);
        this.postData = this.postData.bind(this);
    }

    getFileData(files){
        this.setState({files});
    }

    postData(e){
        e.preventDefault();
        console.log(e);
        var toField = e.target.elements["toField"].value;
        var objectField = e.target.elements["objectField"].value;
        var textareaField = e.target.elements["textareaField"].value;
        var files = this.state.files;

        console.log([toField,objectField,textareaField,files]);

        sendEmail(toField,objectField,textareaField,files);
    }

    render(){
        return(
            //set id,labelledby and title
            <form onSubmit={this.postData}>
                <Popup {...this.props} labelledby={this.labelledby} title={this.props.title}>
                    <PopupHeader labelledby={this.labelledby} title={this.props.title}>
                        <PopupCloseIcon />
                    </PopupHeader>

                    
                    <PopupBody>
                        <AreaInputText className="input-visible-classic" name="toField" placeholder="Destinatario" />
                        <AreaInputText className="input-visible-classic" name="objectField" placeholder="Oggetto" />
                        <div className="dropdown-divider"></div>
                        <MainTextarea name="textareaField" rows="8"></MainTextarea>
                        <div className="dropdown-divider"></div>
                        <ImportFileList passData={this.getFileData} className="btn-success">Allega File</ImportFileList>
                    </PopupBody>
                    <PopupFooter>
                        <PopupCloseButton>Indietro</PopupCloseButton>
                        <button type="submit" className="btn btn-success">Invia</button>
                    </PopupFooter>
                </Popup>
            </form>
        );
    }
}

export default EmailPopup;