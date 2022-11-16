console.log(document.getElementById("age-table"));
 
console.log(document.getElementsByTagName("label"));

console.log(document.getElementById("age-table").getElementsByTagName("td")[0]);

console.log(document.getElementsByTagName("form").namedItem("search"));
formSearch = document.getElementsByTagName("form").namedItem("search");

console.log(formSearch.getElementsByTagName("input")[0]);

formSearchLongitud = formSearch.getElementsByTagName("input").length;
console.log(formSearchLongitud);
console.log(formSearch.getElementsByTagName("input")[formSearchLongitud-1]);