function formatter(string) {
        
    return string;
};





input = document.getElementById("search");
// input.addEventListener("keydown", function (e){
//     if(e.code == "Enter"){
        

        //var search = document.getElementById("search").value;
        //search = search.toLowerCase();
        //search = search.replace(" ", "-");

        var httpRequest = new XMLHttpRequest;
        httpRequest.open("GET", `pokemon.json`);
        httpRequest.send();
        httpRequest.addEventListener("load", () => {
            var salida= httpRequest.response;
            var pokemon = JSON.parse(salida);
            
            //Sprites
            let pkmSprite = document.getElementById("pkmSprite");
            pkmSprite.src = pokemon["sprites"]["front_default"];
            pkmSprite.hidden = false;


            //Numero y pokemon
            document.getElementById("pkmName").innerHTML = `#${pokemon["order"]} ${formatter(pokemon["name"])}`
            

            //TYPES
            pokemon["types"].forEach(pkmType => {                    
                let type = document.createElement("span");
                type.innerHTML = formatter(pkmType["type"]["name"]);
                let divTypes = document.getElementById("pkmTypes");
                divTypes.append(type); 
            });

            //STATS
            let contador = 0;
            pkmStats = document.getElementsByClassName("pkmStats");
            pokemon["stats"].forEach(stat => {
                pkmStats[contador].innerHTML = stat["base_stat"];
                contador++;
               
            })


            //HABILITIES
            let abilitySection = document.getElementById("abilities")

            pokemon["abilities"].forEach(ability => {
                let abilityName = document.createElement("p");
                abilityName.classList.add("pHead");
                abilityName.innerHTML = ability["ability"]["name"];
                abilitySection.append(formatter(abilityName));
                
                
                
            });
        })
//     }
// })
