import React from "react";
import "./TimePicker.css";

export default class TImePicker extends React.Component{
    
    render(){
        let {className =  "", ...cProps} = this.props;
        className = "timepicker btn " + (this.props.className!==undefined ? this.props.className : "");
        return(
            <input type="time" className={className} {...cProps} />
        );
    }
}

//<TimePicker className="btn-success"/>