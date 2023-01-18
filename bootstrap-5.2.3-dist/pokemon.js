function formatter(string) {
    let salida = [];
    arrayString = string.split("-");
    arrayString.forEach(element => {
        element = element.replace(element[0], element[0].toUpperCase())
        salida.push(element);
    });


    return salida.join(' ');
};



input = document.getElementById("search");


fetch("pokemon.json")
    .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
    }).then((data) => {
        let pokemon = data;
        
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

                    let abilityDescription = document.createElement("span");
                    abilityDescription.innerHTML = data["effect_entries"][1]["effect"];

                    abilitySection.append(abilityDescription);
                });


            
            
            
        })
    })           
        .catch(function (error){
            console.log("Error");
            })
//     }
// })
