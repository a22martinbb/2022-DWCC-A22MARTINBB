console.log(document.getElementsByTagName("form")[0].getElementsByTagName("label")[3].innerHTML);

console.log(document.getElementsByTagName("form")[0].getElementsByTagName("label")[3].textContent);

console.log(document.getElementsByName("sexo")[0].value);

inputSexo = document.getElementsByName("sexo");
inputSexo.forEach(input => {
    if (input.checked == true) {
        console.log("Valor do input sexo = " + input.value);
    }
})









lengthLigazon = document.getElementsByTagName("a").length;

//console.log(document.getElementsByTagName("a"));