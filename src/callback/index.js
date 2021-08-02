/**
 * Ejemplo 1 
 * 
 */

/**
 * 
 * @param {int} num1 
 * @param {int} num2 
 * @returns suma de num1 y num2
 */
function sum(num1, num2){ return num1 + num2; }

/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} callback: es una funcion que se pasa como parametro, no debe tener parentesis ypor convencion debe llamarse callback aunque puede llevar cualquier otro nombre
 * @returns 
 */
function calc(num1,num2,callback ){
    return callback(num1,num2);
}
console.log(calc(2,2,sum));
//
// para agregar "callback":"node src/callback/index.js"  en la seccion  de script del archivo package.json
// ejecutar el comando npm run callback para ejectur este archivo
//

/**
 * Ejemplo 2
 */
function date(callback){
    console.log(new Date)
    setTimeout(()=>{
        let date = new Date;
        callback(date);
    },3000)
}


function printDate(dateNow){
    console.log(dateNow);
}
date(printDate);