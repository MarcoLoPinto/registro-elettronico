import React from "react";
import "./MainTable.css";

class MainTable extends React.Component{
    
    render(){
        return(
            <table {...this.props}
            className={"maintable-style"+(this.props.className!==undefined?" "+this.props.className:"")}>
                {this.props.children}
            </table>
        );
    }
}

export default MainTable;

/* declare as:
<MainTable className="table-centered table-min-width table-margin-top-height">
    <thead>
        <tr>
            <th>...</th>
            ...
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>...</td>
            ...
        </tr>
        ...
    </tbody>
</MainTable>
thanks to props.children
*/