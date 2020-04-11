"use strict";

// Init Weather
const weather = new Weather;
// Init UI
const ui = new UI;

let searchCity;


document.getElementById("second-btn").addEventListener('click', (e) => {
    //Search input
    searchCity = document.getElementById("search_input").value;
    if (searchCity === "") {
        console.log("Not found");
    } else {
        //Make HTTP call
        weather.getWeather(searchCity)
            .then(data => {
                ui.showInformation(data.weather);
            })
    }
    e.preventDefault();
});

document.getElementById("first-btn").addEventListener("click", (e) => {
    // Clear the output
    ui.clear();
});