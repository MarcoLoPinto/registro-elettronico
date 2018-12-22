import React from "react";
import "./MainTextarea.css";

class MainTextarea extends React.Component{

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
            <textarea {...this.props}
            onChange={this.handleChange}
            defaultValue={this.state.value}
            className={"success-area"+(this.props.className!==undefined?" "+this.props.className:"")} />
        );
    }
}

export default MainTextarea;

/* declare as:
<MainTextarea rows="8"></MainTextarea>
*/