import React from "react";
import Timeline, {TimelineElement} from "../../components/Timeline/Timeline";
//import { getTimelineCircolari, getTimelineProfiloStudente} from "../../tools/api";

//props.fetchData -> funzione da invocare (promise) per ottenere determinati dati

class TimelineAsync extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            elements = [
                {
                    title: "Caricamento...",
                    date: "...",
                    text: "Caricamento " + props.title +" in corso"
                }
            ]
        }
    }

    async componentDidMount(){

        if(this.props.fetchData && typeof this.props.fetchData == "function"){
            let elements = await this.props.fetchData();
            this.setState({elements});
        }
    }

    render(){
        return(
            <Timeline title={this.props.title}>
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

/**
 * declare as (example):
 *                          name                    function                
 * <TimelineAsync title="Circolari" fetchData={getTimelineCircolari} />
 */
