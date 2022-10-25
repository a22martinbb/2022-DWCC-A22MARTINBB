//EJERCICIOS STRINGS
//EJERCICIO 1

function retorcerCadena(cadena) {
    let array = "";
    for (i = cadena.length - 1; i >= 0; i--){
        array += cadena[i];
    }
    return cadena.split("").reverse().join("");
}

console.log(retorcerCadena("Hola que tal amigo"));

//EJERCICIO 2

function elimnaCaracteres(string, array) {
    for (i = 0; i < array.length; i++){
        string = string.replaceAll(array[i], "");
    }
    return string;
}

console.log(elimnaCaracteres("hola que tal estás amigo", ["a", "o"]));

//EJERCICIO 3

function cuenta(texto) {
    var mensaje = texto;
    var cadena = mensaje.split('');
    var contador = [];
    
    cadena.forEach(function (valor) {
        if (contador[valor] === undefined) {contador[valor] = 1} else {contador[valor] += 1}
    });

    console.log(contador);
    let auxRepeticion;
    let auxLetra    
    Object.entries(contador).forEach(([key, value]) => {
        if (auxRepeticion === undefined || value >= auxRepeticion) {
            auxRepeticion = value
            auxLetra = key;
        }
    });

    return `Letra: ${auxLetra} \nAparece: ${auxRepeticion} veces`
}

console.log(cuenta("Holaquetalamigo"));


//EJERCICIO 4

function cadenaNumeros(cadena) {
    let cadenaAux = ""
    for (i = 0; i < cadena.length - 4; i++){
        cadenaAux += "*";
    }
    ultimosCuatro = cadena.slice(cadena.length - 4);

    
    cadenaAux = cadenaAux.concat("", ultimosCuatro);
    return cadenaAux;
}

console.log(cadenaNumeros("458754259999"));


//EJERCICIO 5
const flightsInfo ="_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

function infoAeroporto(archivo) {
    let array = [];
    vuelos = archivo.split("+");

    vuelos.forEach(function (entrada) {
        entrada = entrada.split(";");
        array.push(entrada);
    });

    array.forEach(function (movimiento) {
        movimiento[0] = movimiento[0].slice(1);
        movimiento[0] = movimiento[0].replaceAll("_", " ");

        movimiento[1] = movimiento[1].slice(0, 3);
        movimiento[1] = movimiento[1].toUpperCase();

        movimiento[2] = movimiento[2].slice(0, 3);
        movimiento[2] = movimiento[2].toUpperCase();

        movimiento[3] = `(${movimiento[3]})`;
    });

    for (i = 0; i < array.length; i++){
        array[i] = (`${array[i][0]} ${array[i][1]} ${array[i][2]} ${array[i][3]}`);
    }

    let longitudArrayLargo = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].length > longitudArrayLargo) {
            longitudArrayLargo = array[i].length;
        }
    }

    for (i = 0; i < array.length; i++) {        
        if (longitudArrayLargo != array[i].length) {
            espacios = longitudArrayLargo - array[i].length;
            var alinear = "";
            for (j = 0; j < espacios; j++){
                alinear += " ";
            }
            array[i] = alinear + array[i];
        }
        console.log(array[i]);
    }    
}

infoAeroporto(flightsInfo);


//EJERCICIO 1
let minuto = 293;

function formateaMinutos(minutos) {
    let horas = minutos / 60;
    horas = Math.round(horas);
    if (horas < 10) {
        horas = "0" + horas;
    }
    let resto = minutos % 60;
    if (resto < 10) {
        resto = "0" + resto;
    }
    return horas + ":" + resto;
}
console.log(minuto + "min");
console.log(formateaMinutos(minuto));

//EJERCICIO 2

function calculoRadio(radio) {
    area = Math.PI * (Math.pow(radio, 2));
   
    return area;
}

console.log(calculoRadio(12));