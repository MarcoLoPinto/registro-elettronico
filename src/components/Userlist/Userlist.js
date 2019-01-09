import React from "react";
import "./Userlist.css";

class Userlist extends React.Component{

    render(){
        return(
            <div {...this.props} className={"userlist-content"+(this.props.className!==undefined?" "+this.props.className:"")}>
                {this.props.children}
            </div>
        );
    }
}

export default Userlist;

export function UserListElement(props){
    return(
        <p {...props} className={"userlist-element"+(props.className!==undefined?" "+props.className:"")}>{props.children}</p>
    );
}