import React from "react";
import "./MainButton.css";

class MainButton extends React.Component{
    
    render(){
        return(
            <button {...this.props} 
            type="button" 
            className={"btn btn-success"+(this.props.className!==undefined?" "+this.props.className:"")}>
                {this.props.children}
            </button>
        );
    }
}

export default MainButton;

/* declare as:
<MainButton>text</MainButton>
thanks to props.children
*/