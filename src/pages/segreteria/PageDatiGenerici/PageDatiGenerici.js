import React from "react";
import "./PageDatiGenerici.css";

import { getDaAOra, setDaAOra, addNewClass, getClasses } from "../../../tools/api";

import MainDropDown from "../../../components/MainDropDown/MainDropDown";
import TimePicker from "../../../components/TimePicker/TimePicker";
import AreaInputText from "../../../components/AreaInputText/AreaInputText";
import MainTable from "../../../components/MainTable/MainTable";


export default class PageDatiGenerici extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            saveBtnText: "Salva",
            daAOra: {},
            classi: []
        }

        this.setOra = this.setOra.bind(this);
        this.uploadDaAOra = this.uploadDaAOra.bind(this);
        this.addClasse = this.addClasse.bind(this);

    }

    async componentDidMount(){
        let d = await getDaAOra();
        let daAOra = {};
        for(let i=0; i<d.length; i++){
            let day = d[i].giorno_settimana;
            let hour = d[i].num_ora;
            daAOra[(1).toString()+day.toString()+hour.toString()] = d[i].da;
            daAOra[(2).toString()+day.toString()+hour.toString()] = d[i].a;
        }

        let c = await getClasses();
        let classi = []
        for(let i=0; i<c.length; i++){
            classi.push(c[i].anno_sezione + " " + c[i].sezione);
        }
        classi.sort();

        this.setState({daAOra,classi});
    }

    uploadDaAOra(){
        let fixedDaAOra = [];

        let daAOra = this.state.daAOra;
        for(let r=1; r<=9; r++){
            for(let d=1; d<=6; d++){
                let obj = {
                    giorno_settimana: d,
                    num_ora: r,
                    da: "",
                    a: ""
                }
                if(daAOra[(1).toString()+d.toString()+r.toString()]){
                    obj.da = daAOra[(1).toString()+d.toString()+r.toString()];
                }
                if(daAOra[(2).toString()+d.toString()+r.toString()]){
                    obj.a = daAOra[(2).toString()+d.toString()+r.toString()];
                }
                fixedDaAOra.push(obj);
            }
        }

        setDaAOra(fixedDaAOra).then(()=>{
            this.setState({saveBtnText:"Salvato"});
        }).catch(()=>{
            this.setState({saveBtnText:"Errore"});
        });
    }

    setOra(type,day,hour,value){
        let daAOra = this.state.daAOra;
        daAOra[type.toString()+day.toString()+hour.toString()] = value;
        this.setState({daAOra,saveBtnText:"Salva"});
    }

    addClasse(e){
        e.preventDefault();
        let anno = e.target.anno.value;
        let sezione = e.target.sezione.value;
        let obj = {
            anno_sezione: anno,
            sezione: sezione
        }

        let classi = this.state.classi;
        classi.push(anno + " " + sezione);
        classi.sort();
        this.setState({classi});

        addNewClass(obj);


    }


    render(){

        var tableBody = [];

        for(let r=1; r<=9; r++){
            var tableRow = [];
            for(let d=0; d<=6; d++){
                if(d==0){
                    tableRow.push((
                        <td>
                            <div className="__flex-row">
                                {r}
                            </div> 
                        </td>
                    ));
                }
                else{
                    tableRow.push((
                    <td>
                        <div className="__flex-row">
                            <TimePicker className="btn-success" label="Da:" name={`da${r}${d}`} value={this.state.daAOra[(1).toString()+d.toString()+r.toString()]} onChange={(e) => {this.setOra(1,d,r,e.target.value)}} />
                            <TimePicker className="btn-success" label="A:" name={`a${r}${d}`} value={this.state.daAOra[(2).toString()+d.toString()+r.toString()]} onChange={(e) => {this.setOra(2,d,r,e.target.value)}} />
                        </div> 
                    </td>
                ));
                }
                
            }
            tableBody.push((
                <tr>
                    {tableRow}
                </tr>
            ))
        }

        return (
            <div> 
                <h2 className="d-flex justify-content-center">
                    Dati Generici
                </h2>
                <button type="button" onClick={this.uploadDaAOra} className="btn btn-success btn_h40">{this.state.saveBtnText}</button>
                <MainTable className="table-centered table-min-width table-margin-top-height table-margin-bottom">
                    <thead>
                        <tr>
                            <th>Ora</th>
                            <th>Lunedi</th>
                            <th>Martedi</th>
                            <th>Mercoledi</th>
                            <th>Giovedi</th>
                            <th>Venerdi</th>
                            <th>Sabato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableBody
                        }
                        
                    </tbody>
                </MainTable>

                <div className="dropdown-divider"></div>

                <div className="__flex-row" style={{marginTop:"40px"}}>
                    <form onSubmit={this.addClasse}>
                        <AreaInputText className="input-visible-classic input-area-aggiungi-classe" name="anno" placeholder="anno" />
                        <AreaInputText className="input-visible-classic input-area-aggiungi-classe" name="sezione" placeholder="sezione" />
                        <button type="submit" className="btn btn-success btn_h40">Aggiungi classe</button>
                    </form>
                </div>

                <div>
                    <ol className="list-type_classi">
                        {this.state.classi.map((classe)=>{
                            return (
                                <li>
                                    {classe}
                                </li>
                            )
                        })}
                    </ol>
                </div>
                <div style={{height:"100px"}}/>
            </div>
            
        );
    }
}