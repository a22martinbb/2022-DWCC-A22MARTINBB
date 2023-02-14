let lat;
let lng;
let formulario = document.getElementById("formulario");
let latitudeSpan = document.getElementById("latitude");
let longitudSpan = document.getElementById("longitud");
// let pines = [{
  
//     "description": "cangas",
//     "latitude": 43.495654,
//     "longitud": -8.215468,
  
// }];


if (localStorage.getItem("pinesStorage") != null) {
  pines = JSON.parse(localStorage.getItem("pinesStorage"));
  pines = pines.pines
} else {
  let pines = [];
}



if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    //Inicializar el Mapa
    const map = L.map("map").setView([lat, lng], 7);

    //Cargar la el mapa
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">Cositas Del Martin</a>',
    }).addTo(map);


    console.log(pines);
    if (pines != null) {
      pines.forEach((element) => {
        console.log(element);
          let card = document.createElement("div");
          card.innerHTML = `<div class="col-6 mb-3">
                                  <div class="card shadow-sm">
                                      <div class="card-body">
                                          <h5>${element.description}</h5>
                                          <p> ${element.latitude} |
                                          ${element.longitud}</p>
                                          <button class="btn btn-primary btn-sm">Centrar</button>
                                      </div>
                                  </div>
                              </div>`;
        
          let marker = L.marker([element.latitude, element.longitud]).addTo(map);
        
          marker.bindPopup(element.description).openPopup();
          let marcadores = document.getElementById("marcadores");
          marcadores.append(card);
        });
    }
   






    function onMapClick(e) {
      formulario.hidden = false;
      latitudeSpan.innerHTML = e.latlng.lat;
      longitudSpan.innerHTML = e.latlng.lng;

      latitud = e.latlng.lat;
      longitud = e.latlng.lng;
    }

    map.on("click", onMapClick);




    document.getElementById("savePin").addEventListener("click", () => {
      let description = document.getElementById("description").value;

      pines.push({
        "description": description,
        "latitude": latitud,
        "longitud": longitud,
      });

      localStorage.setItem("pinesStorage", JSON.stringify({ pines }))

      location.reload();
      


    });
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}


