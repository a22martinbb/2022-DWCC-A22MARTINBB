// //EJERCICIO 1 -> FUNCION FRECHA

// const cuboNumero = numero => numero * numero * numero;

// console.log(cuboNumero(3));


//EJERCICIO 2 -> ARRAY SEN PARES

// const arrayNum = [4, 5, 2, 18, 45, 9, 5, 1, 3, 6, 3, 7, 8, 13];

// function arrayImpar(array) {
//     const arrayNovo = [];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
            
//         } else {
//             arrayNovo.push(array[i]);
//         }
//     }
//     console.log(arrayNovo);
// }
// arrayImpar(arrayNum);



//EJERCICIO 3 -> FUNCION QUE SUME TODOS OS ARGUMENTOS QUE SE LLE INDIQUEN

function suma(...variables) {
    let total = 0;
    for (argument of variables) {
        total += argument;
    }
    return total;
}


//EJERCICO 4 -> Calcula la media de entre todos los números pasados como parametro.

function calculoMedia(...argumentos) {
    
    sumaTotal = suma(...argumentos);

    media = sumaTotal / argumentos.length;

    return media.toFixed(2);
}

resultadoMedia = calculoMedia(2, 4, 7, 7, 8, 9);

//console.log(resultadoMedia);


//EJERCICIO 5 -> Ver se o DNI e correcto.
const dni = "12412513F"

function comprobarDni(dni) {
    //letra DNI
    dni = dni.split("");
    letraDni = dni.pop();
    
    //Numero DNI
    aux = "";
    for (i = 0; i < dni.length; i++) {
        aux += dni[i]
    }

    restoDni = aux % 23;

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (letras[restoDni] == letraDni) {
        console.log("EL DNI es CORRECTO");
    } else {
        console.log("El DNI es incorrecto");
    }
}

//comprobarDni(dni);



//EJERCICIO 6 -> BUSCAMINAS


function buscaminas(mapa) {
    const nuevoMapa = mapa;
    for (i = 0; i < mapa.length; i++){
        for (b = 0; b < mapa.length; b++){
            contador = 0;

            if (!(mapa[i][b] == -1)) {

                if (i != 0 || i != 1 || i != 2 || i != 3) {
                    if (mapa[i][b - 1] == -1) {
                        contador++;
                    }
                }
                
                if (i != 0) {
                    if (mapa[i -1][b] == -1) {
                        contador++;
                    }
                }

                if (i != 3) {
                    if (mapa[i +1][b] == -1) {
                        contador++;
                    }
                }

                if (b != 3) {
                    if (mapa[i][b + 1] == -1) {
                        contador++;
                    }
                }

                

                if (((i != 0 && b != 0) && (i != 0 && b != 1) && (i != 0 && b != 2) && (i != 0 && b != 3) && (i != 1 && b != 3) && (i != 2 && b != 3) && (i != 3 && b != 3))) {
                    if (mapa[i - 1][b + 1] == -1) {
                        contador++;
                    }
                }


                // if ((i != 0 && b != 0) || (i != 1 && b != 0) || (i != 2 && b != 0) || (i != 3 && (b != 0 || b != 1 || b != 2 || b != 3))){
                //      if (mapa[i+1][b + 1] == -1) {
                //          contador++;
                //      }
                // }

                //comprobacion
                // if ((i != 0 && b != 0) || (i != 1 && b != 0) || (i != 2 && b != 0) || (i != 3 && (b != 0 || b != 1 || b != 2 || b != 3))){
                //     if (mapa[i+1][b - 1] == -1) {
                //         contador++;
                //     }
                // }

                //comprobacion
                // if ((i != 0 && b != 0) ){
                //     if (mapa[i-1][b + 1] == -1) {
                //         contador++;
                //     }
                // }
        
                nuevoMapa[i][b] = contador;
            }            
        }
    }
    return nuevoMapa;
}


const mapa = [
    [0, 0, 0, 0],
    [0, -1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]
console.log(mapa);

console.log(buscaminas(mapa));





















































































//EJERCICIO 1
/*let diaSemana = prompt("Indíca o día da seman.");
while (diaSemana == null || diaSemana == "")  {
    console.log("Escribe algo mongolín");
    diaSemana = prompt("Indíca o día da seman.");
}
diaSemana = diaSemana.toLowerCase();

switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log("Es un día laborable");
        break;
    case "sabado":
    case "sábado":
    case "domingo":
        console.log("NO es un día laborable");
        break;
    default:
        console.log("No te he entendido.");
        break;
}
    
*/

//EJERCICIO 2


// let number1 = parseInt(prompt('Escribe el primer número:'));
// let number2 = parseInt(prompt('Escribe el segundo número:'));
// let number3 = parseInt(prompt('Escribe el tercer número:'));

// if (number1 > number2 && number1 > number3) {
//     number1 = number;
//     console.log("O Primeiro Número " +  number + " é o maior.");

// } else if (number2 > number1 && number2 > number3) {
//     number2 = number;
//     console.log("O Segundo Número " +  number + " é o maior.");

// } else if (number3 > number1 && number3 > number2) {
//     number3 = number
//     console.log("O Terceiro Número " +  number + "  é o maior.");

// } else if (number1 == number2 && number1 == number3) {
//     console.log("Todos son iguais");

// }



//EJERCICIO 3
// let numerosPares = [];
// for (i = 1; i <= 30; i++){
//     if (i % 2 == 0) {
//         numerosPares.push(i);
//     }
// }

// console.log(numerosPares);


//EJERCICIO 4
// let mensaje;
// for (let i = 0; i <= 20; i++){
//     let potencia = 2**i
//     console.log("2 elevado a " + i + " = " + potencia);
// }


//EJERCICIO 5
// let respuesta;
// numeroRandom = Math.floor(Math.random() * 100);
// let continuar = true;

// while (continuar) {
//     respuesta = prompt('ADIVINA EL NÚMERO\nEscribe un número del 1 al 100');    

//     if (respuesta < numeroRandom) {
//         alert("Escribe un número más alto.");
//     }

//     if (respuesta > numeroRandom) {
//         alert("Escribe un número mas bajo.");
//     }

//     if (respuesta == numeroRandom) {
//         alert("HAS ACERTADO");
//         continuar = false;
//     }
// }


//EJERCICIO 6

// let numero = parseInt(prompt('Escribe un número para calcular su factorial.'));
// mensaje = numero + "! = ";
// let total = numero;
// for (i = numero; i > 0; i--){
//     //mensaje
//     if (i == 0) {
//         mensaje += i
//     } else {
//         mensaje += i + "*"
//     }

//     //calculo
//     total = total * i
// }

// console.log(mensaje + " " + total);


//EJERCICIO 7


//BUCLE FOR
// let numero = prompt('Escribe un número');
// let array = [];
// let suma = 0;
// for (i = 0; i <= numero; i++){
//     array.push(i);
//     suma += i;
// }
// console.log(array);
// console.log(suma);

//FOR IN
// let numero = 5;
// let array = [];
// let suma = 0;

// for (i = 0; i <= numero; i++){
//     array.push(i);
// }

// for (i in array) {
//     console.log(i);
// }

// for (i of array) {
//     console.log(i)
// }

// console.log(suma);




//EJERCICIO 8
// user = [];

// altura = prompt('Escribe la altura del primer usuario:');
// peso = prompt('Escribe el peso del primer usuario:');
// imc = (peso / Math.pow(altura, 2));
// user1 = imc;

// altura = prompt('Escribe la altura del segundo usuario:');
// peso = prompt('Escribe el peso del segundo usuario:');
// imc = (peso / Math.pow(altura, 2));
// user2 = imc;

// if (user1 > user2) {
//     console.log("O IMC da primeira persoa " + user1 + " é maior que o IMC da segunda persoa " + (user2));
// } else {
//     console.log("O IMC da segunda persoa " + user2 + " é maior que o IMC da primeira persoa " + (user1));
// }










