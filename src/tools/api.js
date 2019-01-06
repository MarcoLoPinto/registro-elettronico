//all the api calls are wrapped in their own functions

/**
 * Sends a POST request to the url specified with the provided data
 * @param {String} url - Url to make the post request to 
 * @param {Object} data - Json object that will be sent with the request
 * @returns Promise that resolves with the requested data if the request was accepted
 */
function postData(url = "", data = {}) {
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data),
    })
    .then(response => {
        if(!response.ok){
            return Promise.reject(response);
        }
        else{
            return response.json();
        }
    });
}

/**
 * Makes a GET request to the specified url
 * @param {String} url - Url to make the get request to 
 * @returns Promise that resolves with the requested data if the request was accepted
 */
function getData(url = ""){
    return fetch(url).then(response => {
        if(!response.ok){
            return Promise.reject(response);
        }
        else{
            return response.json();
        }
    });
}

/**
 * If there is a token stored, retieves it
 */
export function getToken(){
    let token = sessionStorage.getItem("token");
    if(token == null && (token = localStorage.getItem("token")) ){
        sessionStorage.setItem("token",token);
    }
    return token;
}

/**
 * Saves a token to use when making an api call
 * @param {String} token - The token to store 
 * @param {Boolean} keep - Wheter to keep the token after the tab is closed 
 */
export function setToken(token, keep){
    if(keep){
        localStorage.setItem("token",token);
        sessionStorage.setItem("token",token);
    }
    else{
        sessionStorage.setItem("token",token);
    }
}

/**
 * Removes the previously stored token, even if it was set on "keep"
 */
export function removeToken(){
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
}

/**
 * Tries to login, returns a promise 
 * @param {String} username 
 * @param {String} password
 * @returns Promise that resolve with the token or reject with the error 
 */
export function login(username,password){
    //STUB CODE FOR TESTING
    return new Promise((resolve,reject) => {setTimeout(()=>resolve("DEV_TOKEN001"),2000);});

    return new Promise((resolve,reject) => {
        const data = {username,password};
        postData("/login",data).then(res => {
            if(res.result <= 0){
                reject(res.error);
            }
            else{
                resolve(res.data);
            }
        })
        .catch(error => {
            reject(error);
        });
    });
}

/**
 * Tries to signup, returns a promise 
 * @param {String} username 
 * @param {String} password
 * @returns Promise that resolve with the token or reject with the error 
 */
export function signup(username,password){
    return new Promise((resolve,reject) => {
        const data = {username,password};
        postData("/signup",data).then(res => {
            if(res.result <= 0){
                reject(res.error);
            }
            else{
                resolve(res.data);
            }
        })
        .catch(error => {
            reject(error);
        });
    });
}


export function getSomeInfo(data1){
    return new Promise((resolve,reject) => {
        resolve({debug: "This just a stub, bro !"});
    });
}

export function setSomeInfo(data1){
    return new Promise((resolve,reject) => {
        resolve({debug: "This again a stub, bro !"});
    });
}

/* target-functions */

/**
 * 
 * @param {String} dest - email's addressee
 * @param {String} obj - email's object
 * @param {String} text - textarea email field
 * @param {Array} files - A File array to attach
 */
export function sendEmail(dest,obj,text,files){
    return new Promise((resolve,reject) => {
        resolve({sent: true});
    });
}

/**
 * 
 * @param {String} nome - user's name
 * @param {String} cognome - user's surname
 * @param {String} annoNascita - user's birthday
 * @param {Array} luogoNascita - user's birth place
 * @param {Array} codiceFiscale - user's CF
 * @param {Array} tipoProfilo - user type ("Insegnante","Studente","Genitore")
 */
export function createUserProfile(nome,cognome,annoNascita,luogoNascita,codiceFiscale,tipoProfilo){
    return new Promise((resolve,reject) => {
        resolve({sent: true});
    });
}

export function getUserInfo(){
    return new Promise((resolve,reject) =>{
        resolve({nome:"Paolo",cognome:"Rossi",tipo:"Insegnante"});
    });
}

//get timeline object: {title:string,elements:array}
export function getTimelineCircolari(){
    return new Promise((resolve,reject) => {
        resolve([{title:"titolo1",date:"date1"},{title:"titolo2",date:"date2"}]);
    });
}
export function getTimelineProfiloStudente(){
    return new Promise((resolve,reject) => {
        resolve([{title:"titolo1",date:"date1"},{title:"titolo2",date:"date2"}]);
    });
}

export function getDocuments(){
    return new Promise((resolve,reject) => {
        resolve([
            {
                oggetto: "Licenza Maternità",
                data: "12/12/12",
                categoria: "Licenze"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            },
            {
                oggetto: "Pagellino Alberto Santi",
                data: "1/3/2018",
                categoria: "Pagelle"
            }
        ]);
    });
}


export function searchDocuments(da,a,categoria,keyword){
    return new Promise((resolve,reject) => {
        resolve([
            {
                oggetto: "Licenza Maternità " + keyword,
                data: da,
                categoria: categoria
            },
            {
                oggetto: "Pagellino Alberto Santi " + keyword,
                data: a,
                categoria: categoria
            }
        ]);
    });
}

export function getUserlist(inputNome,inputCognome,inputDataNascita,inputLuogoNascita,inputCodiceFiscale){
    return new Promise((resolve,reject) => {
        resolve([
            {
                ID: "ID1",
                nome: "nome1",
                cognome: "cognome1",
                CF: "codice fiscale1",
                data_di_nascita: "data/di/nascita1",
                luogo_di_nascita: "luogo di nascita1",
                tipo: "insegnante"
            },
            {
                ID: "ID2",
                nome: "nome2",
                cognome: "cognome2",
                CF: "codice fiscale2",
                data_di_nascita: "data/di/nascita2",
                luogo_di_nascita: "luogo di nascita2",
                tipo: "studente"
            },
            {
                ID: "ID3",
                nome: "nome3",
                cognome: "cognome3",
                CF: "codice fiscale3",
                data_di_nascita: "data/di/nascita3",
                luogo_di_nascita: "luogo di nascita3",
                tipo: "genitore"
            },
            {
                ID: "ID4",
                nome: "nome4",
                cognome: "cognome4",
                CF: "codice fiscale4",
                data_di_nascita: "data/di/nascita4",
                luogo_di_nascita: "luogo di nascita4",
                tipo: "segreteria"

            }
        ]);
    });
}