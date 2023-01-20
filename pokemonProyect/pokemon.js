function formatter(string) {
  let salida = [];
  arrayString = string.split("-");
  arrayString.forEach((element) => {
    element = element.replace(element[0], element[0].toUpperCase());
    salida.push(element);
  });
  return salida.join(" ");
}

async function abilityPokemon(url) {
  let response = await fetch(url);
  salida = await response.json();
  return salida;
}

function formatSearch(string) {
  let invalidCharacters = /_|.| /;
  salida = string.replace(" ", "-");
  salida = salida.toLowerCase();
  return salida;
}

let input = document.getElementById("searchName");
input.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    let searchType = document.getElementById("searchType").value;
    let searchName = document.getElementById("searchName").value;
    searchName = formatSearch(searchName);

    switch (searchType) {
      case "pokemon":
        if (document.getElementById("card") != null) {
          document.getElementById("card").remove();
        }

        let cardPokemon = document.createElement("div");
        cardPokemon.innerHTML = `<div class="card shadow-sm" id="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4 p-3" id="pkmPrincipal">
                      <div>
                          <h4 class="text-center" id="pkmName"></h4>
                          <img class="w-100 h-100 mb-3" id="pkmSprite" hidden>
                          <div class="d-flex justify-content-around mb-5" id="pkmTypes"></div>
                          <table class="text-center">
                            <thead>
                              <tr>
                                <th>HP</th>
                                <th>ATK</th>
                                <th>DEF</th>
                                <th>SPA</th>
                                <th>SPD</th>
                                <th>SPE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="pkmStats"></td>
                                <td class="pkmStats"></td>
                                <td class="pkmStats"></td>
                                <td class="pkmStats"></td>
                                <td class="pkmStats"></td>
                                <td class="pkmStats"></td>
                              </tr>
                            </tbody>
                            
                          </table>
                          
          
                      </div>
                    </div>
          
                    <div class="col-8 p-3" id="pkmDescription">
                      <div id="abilities">
                          <h5>Abilities:</h5>
                          
                      </div>
                    </div>
                  
          
                
          
                </div>
                </div>
                  
                    </div>`;

        document.getElementById("container").append(cardPokemon);

        fetch(`https://pokeapi.co/api/v2/pokemon/${searchName}`)
          //fetch(`pokemon.json`)
          .then((response) => {
            if (response.ok) return response.json();
            return Promise.reject(response);
          })
          .then((data) => {
            let pokemon = data;

            //Sprites
            let pkmSprite = document.getElementById("pkmSprite");
            pkmSprite.src =
              pokemon["sprites"]["versions"]["generation-v"]["black-white"][
                "animated"
              ]["front_default"];
            pkmSprite.hidden = false;

            //Numero y pokemon
            document.getElementById("pkmName").innerHTML = `${
              pokemon["id"]
            }# ${formatter(pokemon["name"])}`;

            //TYPES
            pokemon["types"].forEach((pkmType) => {
              let type = document.createElement("img");
              type.src = `img/types/${pkmType["type"]["name"]}.png`;
              type.width = "50";
              let divTypes = document.getElementById("pkmTypes");
              divTypes.append(type);
            });

            //STATS
            let contador = 0;
            pkmStats = document.getElementsByClassName("pkmStats");
            pokemon["stats"].forEach((stat) => {
              pkmStats[contador].innerHTML = stat["base_stat"];
              contador++;
            });

            //ABILITIES
            let abilitySection = document.getElementById("abilities");
            pokemon["abilities"].forEach((ability) => {
              fetch(ability["ability"]["url"])
                .then((response) => {
                  if (response.ok) return response.json();
                  return Promise.reject(response);
                })
                .then((data) => {
                  let abilityName = document.createElement("p");
                  abilityName.classList.add("pHead");
                  abilityName.innerHTML = formatter(ability["ability"]["name"]);
                  abilitySection.append(abilityName);

                  let abilityDescription = document.createElement("p");
                  abilityDescription.classList.add("fs-6");
                  abilityDescription.classList.add("fw-light");

                  data["flavor_text_entries"].forEach((description) => {
                    if (description.language.name == "es")
                      abilityDescription.innerHTML = description["flavor_text"];
                  });

                  abilitySection.append(abilityDescription);
                });
            });

            //Fin then
          });
        break;

      case "ability":
        if (document.getElementById("card") != null) {
          document.getElementById("card").remove();
        }

        let cardAbility = document.createElement("div");
        cardAbility.innerHTML = `
                    <div class="card shadow-sm mb-3" id="card">
                        <div class="card-body">
                            <h4 id="abilityName"></h4>
                            <p id="abilityDescription"></p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <table class="table p-3">
                                <tbody>
                            
                                </tbody>
                            </table>
                        </div>
                    </div>`;

        document.getElementById("container").append(cardAbility);

        fetch(`https://pokeapi.co/api/v2/ability/${searchName}`)
          .then((response) => {
            if (response.ok) return response.json();
            return Promise.reject(response);
          })
          .then((data) => {
            let ability = data;
            //AbilityName
            document.getElementById("abilityName").innerHTML = formatter(
              ability.name
            );

            document.getElementById("abilityDescription").innerHTML =
              ability.effect_entries[1].effect;

            ability.pokemon.forEach((element) => {
              let tr = document.createElement("tr");
              let tdName = document.createElement("td");
              let tdImg = document.createElement("td");

              proba = abilityPokemon(element.pokemon.url).then(data);
                console.log(proba);

              tdName.innerHTML = formatter(element.pokemon.name);
              tdImg.innerHTML = `<img src=${data["sprites"]["versions"]["generation-v"]["black-white"][
                "animated"
              ]["front_default"]}></img>`;

              tr.append(tdName);

              document.querySelector("tbody").append(tr);
            });
          });

        break;
      case "move":
        break;
    }

    //Fin if e.code == enter
  }
  //Fin evento
});
