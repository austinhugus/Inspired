import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.


function drawWeather() {
  let weather = store.State.weather;
  let template = ""
  if (weather) {
    template += weather.TemplateF
  }
  document.getElementById("weather").innerHTML = template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }

  Far() {
    let fahrenheit = store.State.weather.TemplateF
    document.getElementById("weather").innerHTML = fahrenheit
  }


  Cel() {
    let celcius = store.State.weather.TemplateC
    document.getElementById("weather").innerHTML = celcius
  }
}

