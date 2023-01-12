ex1 = document.getElementById("ex1");
btnOcultar = document.getElementById("ocultar");
texto = document.getElementById("texto");
input = document.getElementById("textoExercicio1");


btnOcultar.addEventListener("focus", () => {
    ex1.innerHTML = "Ratón focus on button.";
    texto.hidden = true;
})

btnOcultar.addEventListener("blur", () => {
    ex1.innerHTML = "Blur on the button.";
    texto.hidden = false;
})

input.addEventListener("keypress", (value) => {
    texto.hidden = false;    
    texto.innerHTML +=` ${value.key} keycode: ${value.code}`;
})