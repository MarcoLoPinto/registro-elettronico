import React from "react";

class Popup extends React.Component {

    togglePopup(){
        // eslint-disable-next-line
        const $ = $ || window.$;
        $('#'+this.props.id).modal("toggle");
    }

    render() {
        return(
            <div {...this.props} className="modal fade" tabIndex="-1" role="dialog" aria-labelledby={this.props.labelledby} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                            {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export class PopupHeader extends React.Component {
    
    render(){
        return(
            <div {...this.props} className="modal-header">
                <h5 className="modal-title" id={this.props.labelledby}>{this.props.title}</h5>
                {this.props.children}
                
            </div>
        );
    }
}

export function PopupCloseIcon(props){
    return(
        <button {...props} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    );
}

export class PopupBody extends React.Component {
    
    render(){
        return(
            <div {...this.props} className="modal-body">
                {this.props.children}
            </div>
        );
    }
}

export class PopupFooter extends React.Component{

    render(){
        return(
            <div {...this.props} className="modal-footer">
                {this.props.children}
            </div>
        );
    }
}

export function PopupCloseButton(props){
    return(
        <button type="button" className="btn btn-secondary" data-dismiss="modal">{props.children}</button>
    );
}

export default Popup;

