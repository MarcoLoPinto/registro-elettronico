import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends React.Component{

    render(){
        return(
            <div {...this.props} className={"navbar-nav navbar-default sidebar-content "+(this.props.className!==undefined?" "+this.props.className:"")} 
            role="navigation"  >
                {this.props.children}
            </div>
        );
    }
}

/* declare as:
<SideBar>
    <SidebarLink to="/path/to/page">Name</SidebarLink>
</SideBar>
thanks to props.children
*/

export function SidebarLink(props){
    return(
        <Link {...props} className="nav-link link-sidebar sidebar-element" >{props.children}</Link>
    );
}

export default Sidebar;