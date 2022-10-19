//EJERCICIO 1

let fecha = new Date("July 25, 2000");
let diaSemana = fecha.getDay();

let resultado;


switch (diaSemana) {
    case 0:
        resultado = "Domingo";
        break;
    case 1:
        resultado = "Lunes";
        break;
    case 2:
        resultado = "Martes";
        break;
    case 3:
        resultado = "Miercoles";
        break;
    case 4:
        resultado = "Jueves";
        break;
    case 5:
        resultado = "Viernes";
        break;
    case 6:
        resultado = "Sábado";
        break;
}

console.log(`Naciches un ${resultado}`);

//EJERCICIO 2

fecha = new Date("June 25, 2022");
diaSemana = fecha.getDay();

resultado;


switch (diaSemana) {
    case 0:
        resultado = "Domingo";
        break;
    case 1:
        resultado = "Lunes";
        break;
    case 2:
        resultado = "Martes";
        break;
    case 3:
        resultado = "Miercoles";
        break;
    case 4:
        resultado = "Jueves";
        break;
    case 5:
        resultado = "Viernes";
        break;
    case 6:
        resultado = "Sábado";
        break;
}

console.log(`O 25 de Julio de este ano foi ${resultado}`);

//EJERCICIO 3

fecha = new Date("July 25, 2000");

fecha2 = new Date("October 13, 2022");


let diasPasados =  fecha2.valueOf() - fecha.valueOf() ;

segundos = diasPasados / 1000;
minutos = segundos / 60;
horas = minutos / 60;
dias = horas / 24;
console.log(`Pasaron un total de ${dias} días`);


//EJERCICIO 4

function diasEnUnMes(año, mes) {
	return new Date(año, mes, 0).getDate();
}

console.log(diasEnUnMes(2020, 2));

//EJERCICIO 5

function comprobarFinde(año, mes, dia) {
    dia = new Date(año, mes, dia).getDay();

    if (dia == 0 || dia == 6) return "Fin de semana"; else return "Día laboral";
}

console.log(comprobarFinde(2022, 10, 14));

//EJERCICIO 6

function diasTranscurridos(año, mes, dia) {
    fecha = new Date(año, mes, dia).valueOf();       

    inicioAño = new Date(año, 1, 0).valueOf();

    fechaPasado = fecha - inicioAño;
    segundos = fechaPasado / 1000;
    minutos = segundos / 60;
    horas = minutos / 60;
    diasFecha = horas / 24;

    return diasFecha;
}

console.log(`Han pasado ${diasTranscurridos(2022, 10, 14)} desde el principio del año`);
