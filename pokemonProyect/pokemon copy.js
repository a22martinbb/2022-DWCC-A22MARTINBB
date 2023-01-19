function formatter(string) {
    let salida = [];
    arrayString = string.split("-");
    arrayString.forEach(element => {
        element = element.replace(element[0], element[0].toUpperCase())
        salida.push(element);
    });
    return salida.join(' ');
};


let input = document.getElementById("searchName");
input.addEventListener("keypress", (e) => {
    if (e.code == "Enter") {

        let searchType = document.getElementById("searchType").value;
        let searchName = document.getElementById("searchName").value;

        switch(searchType){
            case "pokemon":
                //fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}`)
                fetch(`pokemon.json`)
                    .then((response) => {
                        if (response.ok) return response.json();
                        return Promise.reject(response);
        
                    }).then((data) => {
                        console.log(pokemon);
                        let pokemon = data;
                        
                        //Sprites
                        let pkmSprite = document.getElementById("pkmSprite");
                        pkmSprite.src = pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
                        pkmSprite.hidden = false;
        
        
                        //Numero y pokemon
                        document.getElementById("pkmName").innerHTML = `#${pokemon["id"]} ${formatter(pokemon["name"])}`
                        
        
                        //TYPES
                        pokemon["types"].forEach(pkmType => {                    
                            let type = document.createElement("img");
                            type.src = `img/types/${pkmType["type"]["name"]}.png`;
                            type.width = "50"
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
        
        
                        //ABILITIES
                        let abilitySection = document.getElementById("abilities")
                        pokemon["abilities"].forEach(ability => {
                            
                            fetch(ability["ability"]["url"])
                                .then((response) => {
                                    if (response.ok) return response.json();
                                    return Promise.reject(response);
                                })
                                .then((data) => {
                                    let abilityName = document.createElement("p");
                                    abilityName.classList.add("pHead");
                                    abilityName.innerHTML = formatter(ability["ability"]["name"]);
                                    abilitySection.append((abilityName));
        
                                    let abilityDescription = document.createElement("p");
                                    abilityDescription.classList.add("fs-6");
                                    abilityDescription.classList.add("fw-light");
        
                                    data["flavor_text_entries"].forEach(description => {
                                        if(description.language.name == "es") abilityDescription.innerHTML = description["flavor_text"];
                                    });
        
                                    abilitySection.append(abilityDescription);
                                });
                        })
        
                    //Fin then
                    }) 
                break;
            
            case "abilty":

                break;
            case "move":
                
                break;
        }



        
    //Fin if e.code == enter
    }
//Fin evento
});


          
        
