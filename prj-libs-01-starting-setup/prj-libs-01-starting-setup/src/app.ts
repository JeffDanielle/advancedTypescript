const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enterAddress = addressInput.value;

    // send to Google API
}

form.addEventListener("submit", searchAddressHandler);
