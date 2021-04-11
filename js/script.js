// define all of our variables

// Timeframe Button
let timeframeButton = document.querySelector("input[value=Timeframe]");
// Brand Button
let brandButton = document.querySelector("input[value=Brand]");
// Size Button
let sizeButton = document.querySelector("input[value=Size]");
// Type Button
let typeButton = document.querySelector("input[value=Type]");

// define our form
let formButton = document.querySelector("#button-container");

// create an event listener to them form to listen for changes
formButton.addEventListener("change", function() {

    if (timeframeButton.checked && brandButton.checked) {
        window.location.href = "./timeframe-brand.html";
    }

    if (timeframeButton.checked && sizeButton.checked) {
        window.location.href = "./timeframe-size.html";
    }

    if (timeframeButton.checked && typeButton.checked) {
        window.location.href = "./timeframe-type.html";
    }

    if (brandButton.checked && sizeButton.checked) {
        window.location.href = "./type-brand.html";
    }

    if (brandButton.checked && typeButton.checked) {
        window.location.href = "./size-brand.html";
    }

    if (sizeButton.checked && typeButton.checked) {
        window.location.href = "./type-size.html";
    }

});