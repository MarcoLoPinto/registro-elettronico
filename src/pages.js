import React from "react";

import MainButton from "./components/MainButton/MainButton";
import MainTable from "./components/MainTable/MainTable";
import AreaInputText from "./components/AreaInputText/AreaInputText";
import MainDropDown from "./components/MainDropDown/MainDropDown";
import Timeline, { TimelineElement } from "./components/Timeline/Timeline";
import Popup, { PopupHeader, PopupCloseIcon, PopupBody, PopupFooter, PopupCloseButton } from "./components/Popup/Popup";
import MainTextarea from "./components/MainTextarea/MainTextarea";
import ImportFileList, { ImportList, ImportFile } from "./components/ImportFileList/ImportFileList";
import Alert from "./components/Alert/Alert";
import FileManager from "./components/FileManager/FileManager";
import EmailPopup from "./macrocomponents/EmailPopup/EmailPopup";

export const Mainpage = () => {
    return (
        <div>
            <MainTable className="table-centered table-min-width table-margin-top-height">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds Futterkiste Papaos</td>
                        <td>Maria Anders</td>
                        <td><AreaInputText placeholder="Inserisci orario..." className="input-invisible" /></td>
                    </tr>
                    <tr>
                        <td>Berglunds snabbköp</td>
                        <td><MainDropDown options={["puoi", "inserire tante cose", "qui"]} className="btn-success dropdown-centered transparent-dropdown expanded-dropdown" /></td>
                        <td>Sweden</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </tbody>
            </MainTable>
        </div>
    );
}
export const Profilo = () => {
    return (
        <div>
            <h2 className="d-flex justify-content-center">
                Profilo
            </h2>

            <div className="width-50">
                <FileManager name="NomeFile" date="Data" category="Categoria" type="Tipo" viewable="true" downloadable="true" />
                <FileManager name="NomeFile" date="Data" category="Categoria" type="Tipo" viewable="true" deletable="true" />
                <FileManager name="NomeFile" date="Data" category="Categoria" type="Tipo" downloadable="true" deletable="true" />
            </div>
        </div>
    );
}
export const Messaggi = () => {
    return(
        <div>
            <h2 className="d-flex justify-content-center">Messaggi</h2>
            <MainDropDown options={["puoi", "inserire tante cose", "qui"]} maxwidth={"18%"} className="dropdown-centered btn-success" />
            <ImportFileList className="btn-success">Allega File</ImportFileList>
        </div>
    )
}

export const Logout = () => {
    return(
        <div>
            <h2 className="d-flex justify-content-center">Logout</h2>

            <MainButton data-toggle="modal" data-target="#popup-target">
                {"Hello, it's me"}
            </MainButton>

            <Popup id="popup-target" labelledby="inviaMail" title="Scrivi e-mail">
                <PopupHeader labelledby="inviaMail" title="Invia email">
                    <PopupCloseIcon />
                </PopupHeader>
                <PopupBody>
                    <AreaInputText className="input-visible-classic" placeholder="Destinatario" />
                    <AreaInputText className="input-visible-classic" placeholder="Oggetto" />
                    <div className="dropdown-divider"></div>
                    <MainTextarea rows="8"></MainTextarea>
                    <div className="dropdown-divider"></div>
                    <ImportFileList className="btn-success">Allega File</ImportFileList>
                </PopupBody>
                <PopupFooter>
                    <PopupCloseButton>Indietro</PopupCloseButton>
                    <button type="button" className="btn btn-success">Invia</button>
                </PopupFooter>
            </Popup>

            <h2 className="d-flex justify-content-center">Vero popup funzionante:</h2>

            <MainButton data-toggle="modal" data-target="#newPopupEmail">
                Popup vero
            </MainButton>

            <EmailPopup id="newPopupEmail" title="Invia email" labelledby="inviaMail" />

            <MainButton data-toggle="modal" data-target="#alert-popup">
                {"Show Alert"}
            </MainButton>
            <Alert id="alert-popup" seconds="3" labelledby="inviaMail" className="alert-bottom relative-center" alertclass="alert-style-material" >
                Allerta qualcosa! Testo più lungo per provare, ancora più luuuungo! Moooolto di piuuuu
            </Alert>
            <h2 className="d-flex justify-content-center">Altro testo</h2>
        </div>
    );
};

export const TimelineLink = () => {
    return (
        <Timeline title="Notizie">
            <TimelineElement title="Giornata nazionale della pizza" date="22 Aprile, 1995">
                La pizza è, con la pasta, una passione in Italia e nel Mondo. Non c'è un posto in cui la pizza non abbia saputo affermarsi. La pizza margherita è nata a Napoli
            </TimelineElement>
            <TimelineElement title="Sospensione Attività" date="12 Maggio, 2909">
                Il presidente della Regione Mario Oliverio si è recato questa mattina, a Crotone, sui luoghi colpiti dalla tromba d'aria ed ha visitato le aziende ecc.
            </TimelineElement>
            <TimelineElement title="Marco è fico!" date="22 Marzo, 1465">
                Dopo un'attenta analisi, si scopre che Marco è veramente tanto fico, mamma mia che fico, scrivo altre cose così diventa un testo lungo, moolto lungo, ma tanto!
            </TimelineElement>
        </Timeline>
    );
}