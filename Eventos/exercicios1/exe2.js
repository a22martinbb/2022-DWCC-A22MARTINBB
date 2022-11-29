link = document.getElementById("ligazon");
span = document.getElementById("adicional");

link.addEventListener("click", () => {
    span.hidden = false;  
    link.hidden = true;
})