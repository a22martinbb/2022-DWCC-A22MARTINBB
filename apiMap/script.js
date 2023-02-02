let lat;
let lng;
let formulario = document.getElementById("formulario");
let latitudeSpan = document.getElementById("latitude").innerHTML;
let longitudSpan = document.getElementById("longitud").innerHTML;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    //Inicializar el Mapa
    let map = L.map("map").setView([lat, lng], 7);

    //Cargar la el mapa
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">Cositas Del Martin</a>',
    }).addTo(map);

    function onMapClick(e) {
      formulario.hidden = false;
      latitudeSpan = e.latlng.lat;
      longitudSpan = e.latlng.lng;
    }
      map.on("click", onMapClick);
      

  });
} else {
  console.log("Geolocation is not supported by this browser.");
}


document.getElementById("savePin").addEventListener("click", (e) => {
    let description = document.getElementById("description").value;
  
    formulario.hidden = true;
  
    let card = document.createElement("div");
    card.innerHTML = `<div class="col-6 mb-3">
                          <div class="card">
                              <div class="card-body">
                                  <h5>${description}</h5>
                                  <p> ${latitudeSpan.innerHTML} | ${longitudSpan.innerHTML}</p>
                                  <button class="btn btn-primary btn-sm">Centrar</button>
                              </div>
                          </div>
                      </div>`;
  
    let marker = L.marker([latitudeSpan, longitudSpan]).addTo(map);
  

  
    let marcadores = document.getElementById("marcadores");
    marcadores.append(card);

  });