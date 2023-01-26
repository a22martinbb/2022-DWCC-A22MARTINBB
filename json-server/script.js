const newProduct = {
  name: "nome",
  descrip: "descricion",
};
const peticion = new XMLHttpRequest();
peticion.open("POST", "http://localhost:3000/produtos");
// Sempre ten que estar esta liña se se envían datos
peticion.setRequestHeader("Content-type", "application/json");
// Hai que convertir o obxecto a unha cadena de texto JSON para envialo
peticion.send(JSON.stringify(newProduct));
