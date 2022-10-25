const players = [
    [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
    ],
    [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
    ],
];

//EXERCICIO 1
//1 - A
let players1 = players[0];
let players2 = players[1];

console.log(players1);
console.log(players2);

//1 - B
let gk = players1[0];
console.log(gk);
let fieldPlayers = [];
players1.splice(0, 1);
fieldPlayers = players1;
console.log(fieldPlayers);

//1 - C
let allPLayers = [gk, ...players1, ...players2];
console.log(allPLayers);

//1 - D
let players1Final = [gk, ...players1, "Thiago", "Coutinho", "Periscic"];
console.log(players1Final);



//EXERCICIO 2
function capitalize(string) {
    cadena = string.split(" ");

    newCadena = [];

    cadena.forEach(element => {        
        entrada = element[0].toUpperCase() + element.slice(1)
        newCadena.push(entrada)
    });

    return newCadena;
}

function camelCase(nome, apelido) {
    let resultado = [];

    nome = nome.toLowerCase();
    nomeSeparado = nome.split("_")
    joroba = capitalize(nomeSeparado[1]);

    resultado.push(nomeSeparado[0] + joroba);
    
    apelido = apelido.toLowerCase();
    apelidoSeparado = apelido.split("_")
    joroba = capitalize(apelidoSeparado[1]);




    return resultado
}

console.log(camelCase("Martin_Miguel","Del Río"));