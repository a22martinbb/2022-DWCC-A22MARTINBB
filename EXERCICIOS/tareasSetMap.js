//EXERCICIO 1
// 1 - A
const gameEvents = new Map([
    [17, "GOAL"],
    [36, "Substitution"],
    [47, "GOAL"],
    [61, "Substitution"],
    [64, "Yellow card"],
    [69, "Red card"],
    [70, "Substitution"],
    [72, "Substitution"],
    [76, "GOAL"],
    [80, "GOAL"],
    [92, "Yellow card"],
]);

let eventos = new Set(gameEvents.values());
console.log(eventos);

//1 - B
for (const [key, value] of gameEvents) {
    key < 45 ? console.log(`[PRIMERA PARTE] ${value}`) : console.log(`[SEGUNDA PARTE] ${value}`);
}

verduras = ["Lechuga", "Tomate", "Cebolla", "Pimientos"];

const precio = verduras.map(function (verd) {
    return 2 * verd.length;
});


console.log(precio);



