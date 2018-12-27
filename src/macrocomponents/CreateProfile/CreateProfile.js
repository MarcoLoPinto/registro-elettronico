import React from "react";
import AreaInputText from "../../components/AreaInputText/AreaInputText";
import MainDropDown from "../../components/MainDropDown/MainDropDown";

class CreateProfile extends React.Component{ //TODO

    constructor(props){
        super(props);

        this.postData = this.postData.bind(this);
    }

    postData(e){
        e.preventDefault();
        var inputElement = e.target.elements["name"].value;

        createUserProfile(resultToPutHere); //API
    }

    render(){
        return(
            <form onSubmit={this.postData}>
                
            </form>
        );
    }
}

export default CreateProfile;