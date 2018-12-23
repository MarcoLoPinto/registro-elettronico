import React from "react";
import Timeline, {TimelineElement} from "../../components/Timeline/Timeline";
import { getTimeline } from "../../tools/api";

//props.type -> tipo di funzione da invocare (promise) per ottenere determinati dati

class TimelineAsync extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title = "",
            elements = []
        }
    }

    componentDidMount(){
        //Right?
        switch(this.props.type){
            case "circolari":
                this.setState({ getTimelineCircolari() });//segreteria+studente+insegnante
                break;
            case "profiloStudente":
                this.setState({ getTimelineProfiloStudente() });
                break;
            default:
                break;
        }
    }

    render(){
        return(
            <Timeline title={this.state.title} type={this.props.type}>
                {this.state.elements.map(
                    (timelineElement)=>{
                        return (
                            <TimelineElement title={timelineElement.title} date={timelineElement.date}>
                                {timelineElement.text}
                            </TimelineElement>
                        );
                    })
                }
            </Timeline>
        );
    }
}