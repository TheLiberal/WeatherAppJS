
// Init Weather
const weather = new Weather;
// Init UI
const ui = new UI;



document.getElementById("second-btn").addEventListener('click', (e) => {
    // User searched city
    let searchCity;
    //Search input
    searchCity = document.getElementById("search_input").value;
    if (searchCity === "") {
        ui.showNotFound();
    } else {
        //Make HTTP call
        weather.getWeather(searchCity)
            .then(data => {
                ui.showInformation(data.weather);
            });
    }
    e.preventDefault();
});

document.getElementById("first-btn").addEventListener("click", (e) => {
    // Clear the output
    ui.clear();
    e.preventDefault();
});
