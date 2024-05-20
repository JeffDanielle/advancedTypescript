import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

// type GeocodingResponse = {
//     data: {
//         lat: number;
//         lon: number;
//     };
//     status: 200;
// };

const searchAddressHandler = (e: Event) => {
    e.preventDefault();

    const enteredAddress = addressInput.value;

    axios
        .get(`https://nominatim.openstreetmap.org/search?q=${encodeURI(enteredAddress)}&format=json`)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error("Could not fetch location");
            }
            // const data = response.data[0];
            // const lat = data.lat;
            // const long = data.lon;

            // const coordinates = {lat: lat, long: long};
            const coordinates = response.data[0].lat + " " + response.data[0].lon;
            console.log(coordinates);
        })
        .catch((error) => {
            alert(error.message);
            console.log(error);
        });
};

form.addEventListener("submit", searchAddressHandler);
