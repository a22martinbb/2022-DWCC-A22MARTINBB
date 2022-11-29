button = document.getElementById("button");

button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("1"));
button.onclick = () => console.log(2);