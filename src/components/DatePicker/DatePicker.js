import React from "react";
import "./DatePicker.css";

export default class DatePicker extends React.Component{
    
    render(){
        let {className =  "", ...cProps} = this.props;
        className = "datepicker btn " + (this.props.className!==undefined ? this.props.className : "");
        return(
            <div className="datepicker-container">
                {this.props.label && <label>{this.props.label}</label>}
                <input type="date" className={className} {...cProps} />
            </div>
        );
    }
}

//<DatePicker className="btn-success"/>