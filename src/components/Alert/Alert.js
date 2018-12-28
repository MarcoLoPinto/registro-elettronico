/** 
 * Creates an alert at the top or bottom of the screen (decided by css rules in Alert.css)
 * <Alert
 *      id:
 *          Needed, to invoke the component, for example, with a button: 
 *          ------------------------------------------------------------------
 *          |   <MainButton data-toggle="modal" data-target="#alert-popup">  |
 *          |       {"Show Alert"}                                           |
 *          |   </MainButton>                                                |
 *          |   <Alert id="alert-popup" ...                                  |
 *          ------------------------------------------------------------------
 * 
 *      seconds: 
 *          After how much seconds (float) the alert will disappear (MUST be >0 or -1 to set it to infinite time)
 * 
 *      className:
 *          Css rules for the entire component
 *          if you want it at bottom screen -> "alert-bottom"
 *          if you want it at top screen -> "alert-top"
 *          if you want it centered in the relative div wrapper -> "relative-center"
 * 
 *      alertclass:
 *          Css rules for only the alert style
 *          premade css rules: 
 *                          "alert-style-classic"
 *                          "alert-style-material"
 * 
 *      ...props:
 *          Other attributes that affects the entire component (see code below)
 * 
 * > Text of the alert goes here </Alert>
*/

import React from "react";
import "./Alert.css";

class Alert extends React.Component {

    constructor(props){
        super(props);
        this.state = { seconds: parseFloat(props.seconds) || -1 };
        
        this.alert = React.createRef();
        this.timeout = [];

        this.toggleAlert = this.toggleAlert.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
        this.showAlert = this.showAlert.bind(this);
    }

    componentDidMount(){
        const $ = $ || window.$;
        if(this.state.seconds<-1) throw "Seconds must be >= -1";
        else if(this.state.seconds!=-1) {
            $('#'+this.props.id).on('shown.bs.modal', (e)=> {
                this.timeout.push(setTimeout(() => this.closeAlert(), this.state.seconds*1000));
            });
        }
    }

    toggleAlert(){
        const $ = $ || window.$;
        $('#'+this.props.id).modal("toggle");
        this.timeout.map((timeoutElement)=> clearTimeout(timeoutElement) );
        //TODO try to use this.alert to remove jQuery
    }

    closeAlert(){
        const $ = $ || window.$;
        $('#'+this.props.id).modal("hide");
        this.timeout.map((timeoutElement)=> clearTimeout(timeoutElement) );
        //TODO try to use this.alert to remove jQuery
    }

    showAlert(){
        const $ = $ || window.$;
        this.timeout.map((timeoutElement)=> clearTimeout(timeoutElement) );
        $('#'+this.props.id).modal("show");
        //TODO try to use this.alert to remove jQuery
    }


    render() {
        return (
            <div>
                <div {...this.props} ref={this.alert} data-backdrop="false" className={"modal fade"+(this.props.className!==undefined?" "+this.props.className:"")} tabIndex="-1" role="dialog" aria-labelledby={this.props.labelledby} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content transparent-style">
                            <div className={"modal-header"+(this.props.alertclass!==undefined?" "+this.props.alertclass:"")} >
                                {/* <h5 className="modal-title" id={this.props.labelledby}></h5> */}
                                {this.props.children}
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeAlert}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Alert;