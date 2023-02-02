function formatter(string) {
  let salida = [];
  arrayString = string.split("-");
  arrayString.forEach((element) => {
    element = element.replace(element[0], element[0].toUpperCase());
    salida.push(element);
  });
  return salida.join(" ");
}


function formatter(string) {
  let salida = [];
  arrayString = string.split("-");
  arrayString.forEach((element) => {
    element = element.replace(element[0], element[0].toUpperCase());
    salida.push(element);
  });
  return salida.join(" ");
}


async function searchUrl(url) {
  let response = await fetch(url);
  salida = await response.json();
  return salida;
}


function formatSearch(string) {
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
        if (document.getElementById("contenedor") != null) {
          document.getElementById("contenedor").remove();
        }

        let cardPokemon = document.createElement("div");
        cardPokemon.innerHTML = `
              <div id="contenedor">
                <div class="card shadow-sm mb-3" >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 col-sm-4" id="pkmPrincipal">
                        <div>
                          <h4 class="text-center" id="pkmName"></h4>
                          <img class="w-100 h-100 mb-3" id="pkmSprite" hidden>
                          <div class="d-flex justify-content-around mb-5" id="pkmTypes"></div>
                        </div>
                      </div>
          
                      <div class="col-12 col-sm-8 p-3" id="pkmDescription">
                        <div id="abilities">
                            <h5>Abilities:</h5>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <table class="table text-center w-100">
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
                            <tr id="moveDate">
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
                  </div>
                </div>
                <div class="card shadow-sm">

                  <div class="card-body">
                    <table class="table text-center w-100" id="myTable">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Power</th>
                          <th>Accuracy</th>
                          <th>PP</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody id="moveDescription">
                        
                      </tbody>
                    </table>
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
              ]["front_default"] || pokemon["sprites"]["versions"]["generation-v"]["black-white"]["front_default"];
            pkmSprite.hidden = false;

            //Numero y pokemon
            document.getElementById("pkmName").innerHTML = `#${
              pokemon["id"]
            } ${formatter(pokemon["name"])}`;

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

            //MOVES
            let tbody = document.getElementById("moveDescription");
            pokemon.moves.forEach(element =>
            {
              let move = searchUrl(element.move.url);
              move.then((moveData) =>
              {
                let tr = document.createElement("tr");
                let tdName = document.createElement("td");
                let tdType = document.createElement("td");
                let tdCategory = document.createElement("td");
                let tdPp = document.createElement("td");
                let tdPower = document.createElement("td");
                let tdAccuracy = document.createElement("td");
                let tdDescription = document.createElement("td");
                let imgType = document.createElement("img");
                let imgCategory = document.createElement("img");
                

                imgType.src = `img/types/${moveData.type.name}.png`;
                tdName.innerHTML = formatter(moveData.name);
                imgCategory.src = `img/categories/${moveData.damage_class.name}.png`;
                tdPp.innerHTML = moveData.pp;
                tdPower.innerHTML = moveData.power ? moveData.power : "-";
                tdAccuracy.innerHTML = moveData.accuracy ? moveData.accuracy: "-";

                tdType.append(imgType);
                tdCategory.append(imgCategory);
                tr.append(tdType);
                tr.append(tdName);
                tr.append(tdCategory);
                tr.append(tdPower);
                tr.append(tdAccuracy);
                tr.append(tdPp);
                tr.append(tdDescription);

          
                tbody.append(tr);
              })
              
            });
            //Fin then            
          });
          
        break;

      case "ability":
        if (document.getElementById("contenedor") != null) {
          document.getElementById("contenedor").remove();
        }

        let cardAbility = document.createElement("div");
        cardAbility.innerHTML = `
                  <div id="contenedor">
                  <div class="row">
                    <div class="col-6">
                      <div class="card shadow-sm mb-3">
                        <div class="card-body">
                            <h4 id="abilityName"></h4>
                            <p id="abilityDescription"></p>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="card">
                          <div class="card-body">
                              <table class="table">
                                  <tbody>
                              
                                  </tbody>
                              </table>
                          </div>
                      </div>
                    </div>
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


            if (ability.effect_entries[0].language.name == "en") {
              document.getElementById("abilityDescription").innerHTML =
                ability.effect_entries[0].effect;
            } else {
              document.getElementById("abilityDescription").innerHTML =
                ability.effect_entries[1].effect;
            }

            //LISTA DE POKEMONS
            ability.pokemon.forEach((element) => {
              let tr = document.createElement("tr");
              let tdName = document.createElement("td");
              let tdImg = document.createElement("td");
              let tdTypes = document.createElement("td");

              proba = searchUrl(element.pokemon.url);
              proba.then((data) => {
                tdImg.innerHTML = `<img src=${data["sprites"]["versions"]["generation-viii"]["icons"]["front_default"]} class="w-50 h-50"></img>`;

                data.types.forEach((type) => {
                  let imgType = document.createElement("img");

                  imgType.src = `img/types/${type.type.name}.png`;
                  tdTypes.append(imgType);
                  tdTypes.classList.add("w-10");
                });
              });

              tdName.innerHTML = formatter(element.pokemon.name);

              tr.classList.add("align-middle");

              tr.append(tdImg);
              tr.append(tdTypes);
              tr.append(tdName);

              document.querySelector("tbody").append(tr);
            });
          });

        break;

      
      
      case "move":
        fetch(`https://pokeapi.co/api/v2/move/${searchName}`)
          .then((response) => {
            if (response.ok) return response.json();
            return Promise.reject(response);
          })
          .then((data) => {
            let move = data;

            if (document.getElementById("contenedor") != null) {
              document.getElementById("contenedor").remove();
            }
    
            let cardMove = document.createElement("div");
            cardMove.innerHTML = `
              <div id="contenedor">
                <div class="row">
                  <div class="col-4">
                    <div class="card shadow">
                      <div class="card-body">
                        <h3 id="moveName" class="d-inline align-middle">Earthquake</h3>
                      </div>
                      <table class="table table-striped">
                        <tbody class="text-center">
                          <tr>
                            <td>Type</td>
                            <td><img id="moveType" src="" /></td>
                          </tr>
                          <tr>
                            <td>Category</td>
                            <td><img id="moveCategory" src="" alt="" /></td>
                          </tr>
                          <tr>
                            <td>Power</td>
                            <td id="movePower">100</td>
                          </tr>
                          <tr>
                            <td>Accuracy</td>
                            <td id="moveAccuracy">100</td>
                          </tr>
                          <tr>
                            <td>PP</td>
                            <td id="movePp">15</td>
                          </tr>
                          <tr id="trPriority" hidden>
                            <td>Priority</td>
                            <td id="movePriority">0</td>
                          </tr>
                          <tr id="trCritical" hidden>
                            <td>Critical</td>
                            <td id="moveCritical">0</td>
                          </tr>
                          <tr id="trPriority" hidden>
                            <td>Priority</td>
                            <td id="movePriority">0</td>
                          </tr>
                          <tr id="trAilment" hidden>
                            <td>State Changes</td>
                            <td id="move">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
        
                  <div class="col-8">
                    <div class="card shadow mb-4">
                      <div class="card-body">
                        <h5>Description:</h5>
                        <p id="moveDescription">
                          
                        </p>
                      </div>
                    </div>

                    <div class="card shadow">
                          <div class="card-body">
                              <table class="table" >
                                  <tbody id="pokemonList">
                              
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
                </div>
              </div>`;
            document.getElementById("container").append(cardMove)

            document.getElementById("moveName").innerHTML = formatter(move.name);
            document.getElementById("moveType").src = `img/types/${move.type.name}.png`;
            document.getElementById("moveCategory").src = `img/categories/${move.damage_class.name}.png`;
            document.getElementById("movePower").innerHTML = move.power;
            document.getElementById("moveAccuracy").innerHTML = move.accuracy;
            document.getElementById("movePp").innerHTML = move.pp;
            document.getElementById("movePriority").innerHTML = move.priority;
            document.getElementById("moveDescription").innerHTML = move.effect_entries[0].effect;

            move.learned_by_pokemon.forEach((element) => {
              let tr = document.createElement("tr");
              let tdName = document.createElement("td");
              let tdImg = document.createElement("td");
              let tdTypes = document.createElement("td");

              proba = searchUrl(element.url);
              proba.then((data) => {
                tdImg.innerHTML = `<img src=${data["sprites"]["versions"]["generation-viii"]["icons"]["front_default"]} class="w-50 h-50"></img>`;

                data.types.forEach((type) => {
                  let imgType = document.createElement("img");

                  imgType.src = `img/types/${type.type.name}.png`;
                  tdTypes.append(imgType);
                  tdTypes.classList.add("w-10");
                });
              });

              tdName.innerHTML = formatter(element.name);

              tr.classList.add("align-middle");

              tr.append(tdImg);
              tr.append(tdTypes);
              tr.append(tdName);

              document.getElementById("pokemonList").append(tr);
            });
          })
          break;
    }

    //Fin if e.code == enter
  }
  //Fin evento  
  
});











async function getPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemonData = await response.json();

  const types = pokemonData.types.map(type => type.type.name);
  console.log(types.join(", "));

  const weaknesses = [];
  const resistances = [];
  const immunities = [];

  for (const type of types) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const typeData = await response.json();

    for (const weakness of typeData.damage_relations.double_damage_from) {
        weaknesses.push(weakness.name);
    }

    for (const resistance of typeData.damage_relations.half_damage_from) {
      resistances.push(resistance.name);
    }

    for (const immunity of typeData.damage_relations.no_damage_from) {
      immunities.push(immunity.name);
    }
  }

  console.log(weaknesses);
  console.log(resistances);
  console.log(immunities);
}

getPokemonData("charizard");