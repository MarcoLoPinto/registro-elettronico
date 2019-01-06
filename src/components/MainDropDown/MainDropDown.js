import React from "react";
import "./MainDropDown.css";

class MainDropDown extends React.Component{
    
    render(){
        let {className =  "", maxWidth = "100%", style = {}, ...cProps} = this.props;
        style.maxWidth = maxWidth;
        return(
            <select {...cProps} 
            className={"dropdown-style btn "+(this.props.className!==undefined?this.props.className:"")} 
            style={style} >
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