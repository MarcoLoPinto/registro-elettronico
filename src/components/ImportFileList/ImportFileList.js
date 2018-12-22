import React from "react";
import "./ImportFileList.css";

class ImportFileList extends React.Component{

    constructor(props){
        super(props);

        this.importFile = React.createRef();
        this.importList = React.createRef();
        this.setList = this.setList.bind(this);
        
        window.printElements = () =>{
            console.log("-------------------------------");
            console.log("File CONDIVISI di ImportFile");
            console.log(this.importFile.current.state.files); //log files
            console.log("File CONDIVISI di ImportList");
            console.log(this.importList.current.state.items); //log files
            console.log("-------------------------------");
        }
        
    }
    
    setList(){
        this.importFile.current.handleInputChange( (files) =>{
            this.importList.current.setState({ items: files });
            if(this.props.passData && typeof this.props.passData == "function") 
                this.props.passData(files);
        });
        
    }

    getFiles(){
        return this.importFile.current.files;
    }

    render(){
        return(
            <div className="import-flex-center">
                <ImportFile className="btn-success" ref={this.importFile} onChange={this.setList}>{this.props.children}</ImportFile>
                <ImportList ref={this.importList} />
            </div>
        );
    }
}

export default ImportFileList;

export class ImportFile extends React.Component {

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();

        this.state = { files: [] };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(callback){
        var fileList = this.fileInput.current.files;
        let files = [];
        for(var i=0; i<fileList.length;i++){
            console.log(fileList.item(i));
            let f = new File([fileList.item(i)],fileList.item(i).name,{type: fileList.item(i).type});
            files.push(f);
        }
        this.fileInput.current.value = ""; //flush values so it can load same files

        this.setState({ files: this.state.files.concat(files) }, ()=>{
            callback(this.state.files);
        }); 

    }

    //DEPRECATED
    handleInputChangeDeprecated(callback){
        var files = this.fileInput.current.files;
        var newfiles = [];

        for (var i = 0; i < files.length; i++) { //for multiple files
            var endedPush = 0;          
            ( (file) => {
                var name = file.name;
                var reader = new FileReader();
                reader.onload = (e) => {  
                    // get file content 
                    endedPush++;
                    var text = e.target.result;
                    newfiles.push({name:name, data:text});
                    if(endedPush === files.length){
                        this.setState({ files: this.state.files.concat(newfiles) }, ()=>{
                            this.fileInput.current.value = ""; //flush values so it can load same files
                            callback(this.state.files);
                        }); 
                    }
                }
                reader.readAsText(file, "UTF-8");
            })(files[i]);
        }
        
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.fileInput.current.files); //TODO
    }

    render() {
        return (
            <div {...this.props} className={"fileContainer"+(this.props.className!==undefined?" "+this.props.className:"")}>
                {this.props.children}
                <input type="file" ref={this.fileInput} name="file" multiple />
            </div>
        );
    } //onChange={this.handleInputChange}

}

export class ImportList extends React.Component{

    constructor(props){
        super(props);

        this.state = { items: [] };

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(index){
        var newlist = this.state.items;
        newlist.splice(index,1);

        this.setState({ items: newlist });
    }

    render(){
        return(
            <div {...this.props} className="import-list-style">
                {this.state.items.map( (item,index) => (
                    <div key={"div-in"+index} className="d-flex justify-content-between">
                        <li key={index}>{item.name}</li>
                        <button type="button" key={"b"+index} onClick={() => this.removeItem(index)} className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                ) )}
            </div>
        );
    }
}
