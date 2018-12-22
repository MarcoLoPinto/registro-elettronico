/** 
 * Creates an invisible input text (if no css rules are specified) always listening to the input (state.value)
 * 
 * <AreaInputText
 *      placeholder:
 *          The placeholder attribute that specifies a short hint that describes the expected value of the input field
 *      
 *      className:
 *          Css rules for the entire component
 *          to make it visible, use the class "visible"
 * 
 *      ...props:
 *          Other attributes that affects the entire component (see code below)
 * />
 */

import React from "react";
import "./AreaInputText.css";

class AreaInputText extends React.Component{


    /**
     * 
     * @param {Object} props - props of the component
     * @param {String} props.placeholder - The placeholder attribute that specifies a short hint that describes the expected value of the input field
     */
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    
    render(){
        return(
            <input {...this.props}
            type="text" 
            onChange={this.handleChange}
            defaultValue={this.state.value}
            className={"input-style"+(this.props.className!==undefined?" "+this.props.className:"")} />
        );
    }
}

export default AreaInputText;