import React from "react";
import Timeline, {TimelineElement} from "../../components/Timeline/Timeline";
//import { getTimelineCircolari, getTimelineProfiloStudente} from "../../tools/api";

//props.type -> tipo di funzione da invocare (promise) per ottenere determinati dati

class TimelineAsync extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title = "",
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
        //Right?
        // switch(this.props.type){
        //     case "circolari":
        //         this.setState({ getTimelineCircolari() });//segreteria+studente+insegnante
        //         break;
        //     case "profiloStudente":
        //         this.setState({ getTimelineProfiloStudente() });
        //         break;
        //     default:
        //         break;
        // }

        /**
         * Ritengo sia più corretto cosi. Si passa il titolo come prop a se,
         * mentre per recuperare i vari elementi si usa una funzione, sempre passata come prop, che ritorna i vari elementi salvati poi
         * nello stato
         * --- ho modificato anche le funzioni in api.js per riflettere il nuovo utilizzo ---
         * 
         * 
         * Esempio 
         * <TimelineAsync title="Circolari" fetchData={getTimelineCircolari} type="tipo" />
         */


        if(this.props.fetchData && typeof this.props.fetchData == "function"){
            let elements = await this.props.fetchData();
            this.setState({elements});
        }
    }

    render(){
        return(
            <Timeline title={this.props.title} type={this.props.type}>
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