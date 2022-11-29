let ul = document.getElementById("ul");
let lis = document.getElementsByTagName("li");

for (const li of lis) {
   li.hidden = true;
}

ul.addEventListener("click", () => {
   for (const li of lis) {
      li.hidden = false;
   }
});
