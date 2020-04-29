class UI {
    constructor() {
        this.temperature = document.getElementById("temperature");
        this.humidity = document.getElementById("humidity");
        this.description = document.getElementById("description");
        this.windspeed = document.getElementById("windspeed");
        this.cloudiness = document.getElementById("cloudiness");
        this.city = document.getElementById("city");
    }

    showInformation(weather) {
        this.temperature.innerHTML = Math.round(weather.main.temp - 272.15) + "&degC";
        this.humidity.innerHTML = weather.main.humidity + "%";
        this.description.innerHTML = weather.weather[0].description;
        this.windspeed.innerHTML = Math.round(weather.wind.speed) + "km/h";
        this.cloudiness.innerHTML = weather.clouds.all + "%";
        this.city.innerHTML = searchCity;
    }

    clearOutput() {
        document.getElementById("search_input").value = "";
        document.getElementById("city").innerHTML = "";
        document.getElementById("temperature").innerHTML = "";
        document.getElementById("humidity").innerHTML = "";
        document.getElementById("description").innerHTML = "";
        document.getElementById("windspeed").innerHTML = "";
        document.getElementById("cloudiness").innerHTML = "";
    }
    showNotFound() {
        document.getElementById("notfound").innerHTML = "City Not Found";
        setTimeout(() => {
            document.getElementById("notfound").innerHTML = "";
        }, 3000);
    }
}
class Weather {
    constructor() {
        this.api_key = "753817e77bafd9796a32d0ba7e32ba54";
    }

    async getWeather(searchCity) {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${this.api_key}`);

        const weather = await weatherResponse.json();

        return {
            weather
        }
    }
}
// Init Weather
const weather = new Weather();
// Init UI
const ui = new UI();

// User searched city
let searchCity;

document.getElementById("second-btn").addEventListener('click', (e) => {

    //Search input
    searchCity = document.getElementById("search_input").value;
    if (searchCity === "") {
        ui.showNotFound();
    } else {
        //Make HTTP call
        weather.getWeather(searchCity)
            .then((data) => {
                ui.showInformation(data.weather);
            });
    }
    e.preventDefault();
});

document.getElementById("first-btn").addEventListener("click", (e) => {
    // Clear the output
    ui.clearOutput();
    e.preventDefault();
});