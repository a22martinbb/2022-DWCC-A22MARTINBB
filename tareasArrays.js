//EJERCICIOS ARRAYS
//EJERCICIO 1

function mostrarArray(variable) {
    let textoSaida = "";
    for (i = 0; i < variable.length; i++){
        if (i == variable.length - 1) {
            textoSaida += `${variable[i]} `;    
        } else {
            textoSaida += `${variable[i]}, `;
        }
    }
    return textoSaida;
}

const array = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];
console.log(mostrarArray(array));

array.splice(1,1);
console.log(mostrarArray(array));

array.splice(3, 0, "laranxas", "sandías");
console.log(mostrarArray(array));

array.splice(1, 1, "cereixas", "nésperas");
console.log(mostrarArray(array));


//EJERCICIO 2
 
const array2 = [10,1, 8, 3, 10, 5, 1];
console.log(mostrarArray(array2));

function compareNumbers(a, b) {
    return a - b;
}
array2.sort(compareNumbers);
console.log(mostrarArray(array2));

//EJERCICO 3
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábdado", "Domingo"];



function checkSPrincipio(valor) {
    if (valor[0]== "S") {
        return true;
    }
}

function checkSFinal(valor) {
    if (valor[valor.length-1]== "s") {
        return true;
    }
}

if (dias.some(checkSPrincipio)) {
    sPrincipio = "Si"
} else {
    sPrincipio = "No";
}

console.log("¿Algún día da semán comeza con S? " + sPrincipio);

if (dias.every(checkSFinal)) {
    sFinal = "Si"
} else {
    sFinal = "No";
}

console.log("Rematan todos os días da semán con S? " + sFinal);

//EJERCIO 4
function capitalize(string) {
    string = string.replaceAll(",", "");
    string = string.replaceAll(".", "");
    cadena = string.split(" ");

    newCadena = [];

    cadena.forEach(element => {        
        entrada = element[0].toUpperCase() + element.slice(1)
        newCadena.push(entrada)
    });

    return newCadena;

}

console.log(capitalize("Hola que tal, estás amigo yo todo bien la verdd"));