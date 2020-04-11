"use strict";
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

    clear = function clearOutput() {
        document.getElementById("search_input").value = "";
        document.getElementById("city").innerHTML = "";
        document.getElementById("temperature").innerHTML = "";
        document.getElementById("humidity").innerHTML = "";
        document.getElementById("description").innerHTML = "";
        document.getElementById("windspeed").innerHTML = "";
        document.getElementById("cloudiness").innerHTML = "";
    }
}