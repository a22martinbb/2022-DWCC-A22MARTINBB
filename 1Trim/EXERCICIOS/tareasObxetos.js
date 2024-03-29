//EXERCICIO 1
let Television = {
    marca: "Sonny",
    categoria: "televisores",
    unidadas: 4,
    prezo: 354.99,
    importe: function () {
        return this.unidadas * this.prezo;
    }
};

console.log(Television.importe());

//EXERCICIO 2
const game = {
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
};

let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

//EXERCICIO 3
const game3 = {
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"]
};

for (i = 0; i < game3.scored.length; i++){
    numGol = i + 1;
    console.log(`Gol ${numGol}: ${game3.scored[i]}`);
}


const scorers = {}
for (const xogador of game3.scored) {
    scorers[xogador] ? scorers[xogador]++ : (scorers[xogador] = 1);
}
console.log(scorers);



//EXERCICIOS 4
const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];


let nomeCompleto = inventors.map(function (inventor) {
    return inventor.first + " " + inventor.last;
})



nomeCompleto.sort((a, b) => (a[a.indexOf(" ") + 1] < b[b.indexOf(" ") + 1] ? -1 : 1));
console.log("proba");
console.log(nomeCompleto);



let inventorsNames = [];


let inventorsXVI = inventors.filter((inventor) => inventor.year > 1500 && inventor.passed < 1601);


//4-1
console.log("hola");
console.log(inventorsXVI);

//4-2

//4-3
inventors2 = inventors.sort((a, b) => (a.last < b.last) ? -1 : 1);
console.log("proba2");
console.log(inventors2);

//4-E
inventors.sort((a, b) => (a.year < b.year) ? -1 : 1);
console.log(inventors);

//4-F
let edadTotal = 0;
inventors.forEach((inventor) => {
    edadTotal += inventor.passed - inventor.year;
});


totalYear = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0)

console.log(totalYear);

//4-G
console.log( inventors.sort((a, b) => (a.passed - a.year > b.passed - b.year) ? -1 : 1));


//EXERCICIO 5
const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    "pogostick",
];
let vehiculos = {};

data.forEach(element => {
    if (vehiculos[element] == undefined) {
        vehiculos[element] = 1;
    } else {
        vehiculos[element] += 1;
    }  
});

console.log(vehiculos);











