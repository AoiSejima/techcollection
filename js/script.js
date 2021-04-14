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

// Submit Button
let submitButton = document.querySelector("input[value=Save]");

// create an event listener to them form to listen for changes
formButton.addEventListener("click", function() {
    
    if (timeframeButton.checked && brandButton.checked) {
        window.location.href = "./brand-timeframe.html";
    }
    if (timeframeButton.checked && sizeButton.checked) {
        window.location.href = "./timeframe-size.html";
    }
    if (timeframeButton.checked && typeButton.checked) {
        window.location.href = "./type-timeframe.html";
    }
    if (brandButton.checked && sizeButton.checked) {
        window.location.href = "./brand-size.html";
    }
    if (brandButton.checked && typeButton.checked) {
        window.location.href = "./brand-type.html";
    }
    if (sizeButton.checked && typeButton.checked) {
        window.location.href = "./type-size.html";
    }
});