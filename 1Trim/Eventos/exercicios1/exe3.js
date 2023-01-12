submit = document.getElementById("submit");
texto = document.getElementById("texto");


submit.addEventListener("click", () => {
    li = document.createElement("li");
    li.innerHTML = texto.value;

    document.getElementById("mensaxes").append(li);
})