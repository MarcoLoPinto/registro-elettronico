import React from "react";
import "./Timeline.css";

class Timeline extends React.Component {

    render() {
        return (
            <div {...this.props}
            // className={""+(this.props.className!==undefined?" "+this.props.className:"")}
            >
            
                <h4 className="titleStyle">{this.props.title}</h4>
                <ul className="timeline">
                    {this.props.children}
                </ul>

            </div>
        );
    }
}

/* declare as:
<Timeline title="main title">
    <TimelineElement title="title1" date="date1">
        ..text1..
    </TimelineElement>
    <TimelineElement title="title2" date="date2">
        ..text2..
    </TimelineElement>
</Timeline>
*/


export function TimelineElement(props) {
    return (
        <li>
            <a>{props.title}</a>
            <a className="float-right">{props.date}</a>
            <p>{props.children}</p>
        </li>
    );
}

/* declare as:
<TimelineElement title="title" date="date">
    ..text..
</TimelineElement>
*/

export default Timeline;