


function crearCalendario(elemento, mes, ano) {


    calendario = document.createElement("table");
    cabeceira = document.createElement("tr");
    calendario.append(cabeceira);

    Lunes = document.createElement("th");
    Lunes.innerHTML = "L"
    cabeceira.append(Lunes);

    Martes = document.createElement("th");
    Martes.innerHTML = "M"
    cabeceira.append(Martes);

    Miercoles = document.createElement("th");
    Miercoles.innerHTML = "Mi"
    cabeceira.append(Miercoles);

    Jueves = document.createElement("th");
    Jueves.innerHTML = "J";
    cabeceira.append(Jueves);

    Viernes = document.createElement("th");
    Viernes.innerHTML = "V"
    cabeceira.append(Viernes);

    Sabado = document.createElement("th");
    Sabado.innerHTML = "S"
    cabeceira.append(Sabado);

    Domingo = document.createElement("th");
    Domingo.innerHTML = "D"
    cabeceira.append(Domingo);

    let diaStart = new Date(ano, mes, 1).getDay();
    console.log(diaStart);

    let diasMes = new Date(ano, mes, 0).getDate();
    console.log(diasMes);

    let fila = document.createElement("tr");
    calendario.append(fila);

    let diaActual = 1;
    while (diaActual <= diasMes) {
        for (let i = 0; i <= 6; i++) {
            tr = document.createElement("td");
            fila.append(tr);
            
        }    
    }
    




    return calendario;
}

document.body.append(crearCalendario("body", 11, 2022));