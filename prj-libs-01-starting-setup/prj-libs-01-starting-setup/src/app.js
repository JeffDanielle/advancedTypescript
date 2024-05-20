"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ZOOM = 13;
var form = document.querySelector("form");
var addressInput = document.getElementById("address");
var map = L.map("map");
function searchAddressHandler(event) {
    event.preventDefault();
    var enteredAddress = addressInput.value;
    axios_1.default
        .get("https://nominatim.openstreetmap.org/?addressdetails=1&q=".concat(encodeURI(enteredAddress), "&format=geocodejson&limit=1"))
        .then(function (response) {
        console.log(response);
        if (!response.data.features.length) {
            throw new Error("Could not fetch location!");
        }
        var coordinates = [
            response.data.features[0].geometry.coordinates[1],
            response.data.features[0].geometry.coordinates[0],
        ];
        console.log(coordinates);
        var location = {
            city: response.data.features[0].properties.geocoding.city,
            country: response.data.features[0].properties.geocoding.country,
            postcode: response.data.features[0].properties.geocoding.postcode,
        };
        map.setView(coordinates, ZOOM);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        L.marker(coordinates)
            .addTo(map)
            .bindPopup("".concat(location.city, "<br>").concat(location.country, "<br>").concat(location.postcode))
            .openPopup();
    })
        .catch(function (error) {
        console.log(error);
    });
}
form.addEventListener("submit", searchAddressHandler);
