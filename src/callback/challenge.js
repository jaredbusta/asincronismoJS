/**
 * instalar paquete xmlhttprequest --save
 * donde --save es qeu se instala en modo desarrollo
 * npm install xmlhttprequest --save
 * 
 * este paquete es para:
 * permite hacer peticiones a servicios a la nube 
 */

let XMLHttpRequest =require('xmlhttprequest').XMLHttpRequest;
const API="https://rickandmortyapi.com/api/character/";

function fetchData(url_api,callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url_api,true); // true es para activar el asincronismo
    xhttp.onreadystatechange = function (event){
        /**
         * readyState tiene 5 estados:
         * 0.- inicializado
         * 1.- cargando
         * 2.- ya cargado
         * 3.- si hay desarga o alguna informacion
         * 4.- se ha completado
         */
        if(xhttp.readyState === 4 ){
            if(xhttp.status===200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error: '+ url_api);
                return callback(error,null);
            }
        }
    }
    xhttp.send();
}

fetchData(API,function(error1,data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id,function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url,function(error3,data3){
            if(error3)return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
});