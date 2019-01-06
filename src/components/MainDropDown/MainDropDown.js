import React from "react";
import "./MainDropDown.css";

class MainDropDown extends React.Component{
    
    render(){
        let {className =  "", maxWidth = "100%", ...cProps} = this.props;
        return(
            <select {...cProps} 
            className={"dropdown-style btn "+(this.props.className!==undefined?this.props.className:"")} 
            style={{maxWidth:this.props.maxwidth} } >
                {this.props.options.map(
                    (i)=>{
                        return <option key={i+"Dropdown"} value={i}>{i}</option>
                    })
                }
            </select>
        );
    }
}

/* declare as:
<MainDropDown options={["puoi", "inserire tante cose", "qui"]} maxwidth={"18%"} className="dropdown-centered btn-success" />
*/

export default MainDropDown;