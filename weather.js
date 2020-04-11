"use strict";
class Weather {
    constructor() {
        this.api_key = "753817e77bafd9796a32d0ba7e32ba54";
    }

    async getWeather(searchCity) {
        const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${this.api_key}`);

        const weather = await weatherResponse.json();

        return {
            weather
        }
    }
}