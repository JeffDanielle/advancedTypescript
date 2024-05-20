"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var form = document.querySelector("form");
var addressInput = document.getElementById("address");
// type GeocodingResponse = {
//     data: {
//         lat: number;
//         lon: number;
//     };
//     status: 200;
// };
var searchAddressHandler = function (e) {
    e.preventDefault();
    var enteredAddress = addressInput.value;
    axios_1.default
        .get("https://nominatim.openstreetmap.org/search?q=".concat(encodeURI(enteredAddress), "&format=json"))
        .then(function (response) {
        if (response.status !== 200) {
            throw new Error("Could not fetch location");
        }
        // const data = response.data[0];
        // const lat = data.lat;
        // const long = data.lon;
        // const coordinates = {lat: lat, long: long};
        var coordinates = response.data[0].lat + " " + response.data[0].lon;
        console.log(coordinates);
    })
        .catch(function (error) {
        alert(error.message);
        console.log(error);
    });
};
form.addEventListener("submit", searchAddressHandler);
