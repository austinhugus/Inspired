import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import ClockController from "./controllers/clock-controller.js";
//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController();
    this.clockController = new ClockController();

  }
}

window["app"] = new App();