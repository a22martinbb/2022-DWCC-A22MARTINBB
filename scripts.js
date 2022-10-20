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
 
const array2 = [4, 8, 3, 10, 5];
console.log(mostrarArray(array2));


let compareFn = function (a, b) {
    if (a < b) {
        return -1;
    }
    if(b < a) {
        return 1;
    }

    return 0;
}
array2.sort(compareFn(a, b));
console.log(mostrarArray(array2));
