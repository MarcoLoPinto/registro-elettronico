import React from "react";
import "./TimePicker.css";

export default class TimePicker extends React.Component{
    
    render(){
        let {className =  "", ...cProps} = this.props;
        className = "timepicker btn " + (this.props.className!==undefined ? this.props.className : "");
        return(
            <div className="timepicker-container">
                {this.props.label && <label>{this.props.label}</label>}
                <input type="time" className={className} {...cProps} />
            </div>
        );
    }
}

//<TimePicker className="btn-success" lebel="lebel"/>