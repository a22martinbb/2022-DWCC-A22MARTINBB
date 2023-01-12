"use strict";

verify(/ca(r|t)/, ["my car", "bad cats"], ["camper", "high art"]);

verify(/p(|r)op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

verify(/ferr(et|y|ari)$/, ["ferret", "ferry", "ferrari"], ["ferrum", "ferraris", "transfer A"]);

verify(/\b\w*ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

verify(/ \./, ["bad punctuation ."], ["escape the period"]);

verify(/[A-Za-z]{6,}/,["Siebentausenddreihundertzweiundzwanzig"],["no", "three small words"]);

verify(/\b[a-df-z]+\b/i, ["red platypus", "wobbling nest"], ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
    }
}

//EXERCICIO 2
let mac = "01:32:54:67:89:AB";
let regex1 = /([A-F0-9]{2}:){5}([A-F0-9]{2})\b/ig
console.log(regex1.test(mac));
console.log(mac.match(/([A-F0-9]{2}:){5}([A-F0-9]{2})/ig));

//EXERCICIO 3
let codigo = "#EA8454"
let regex2 = /#([A-F0-9]{3}){1,2}\b/i
console.log(regex2.test(codigo));
console.log(codigo.match(regex2));

//EXERCICIO 4
let numeros = "-1.2 4 0 -123.5"
let regex3 = /[-]?[0-9]{1,}([.][0-9]{0,})?/g
console.log(regex3.test(numeros));
console.log(numeros.match(regex3));

//EXERCICIO 5

let password = "HOLAAMIGO3a";
let regex8SenEspazos = /([^\s]){8,}/;

if (regex8SenEspazos.test(password)) {
    let contador = 0;
    if (/[a-z]/.test(password)) {
        contador++;
    }
    if (/[A-Z]/.test(password)) {
        contador++;
    }
    if (/[0-9]/.test(password)) {
        contador++;
    }
    if (/[¡!$?%&#@/)=¿?*[;,:._<>+-]/.test(password)) {
        contador++;
    }
    if (contador >= 3) {
        console.log("Contraseña VALIDA");
    } else {
        console.log("Contraseña NO VALIDA");
    }
}

//EXERCICIO 6


function textoEtiquetas(linea) {
    let regexEtiquetas = /<(.*?)>/g;
    console.log(linea.replace(regexEtiquetas, ""));
}

textoEtiquetas("<h1>Hola</h1>");

//EXERCICIO 7
let insultos = ["testán", "langrán", "fervellasverzas", "baldreu", "lacazán", "pillabán"];

function palabrota(palabra) {
    asteriscos(palabra){
        numero = 
    }
    
    let regex = /.([\w\W])+/;

    let salida = palabra.replace(regex, "*");
    return salida;
}

console.log(palabrota("testán"));
