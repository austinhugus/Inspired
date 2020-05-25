export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.round((data.main.temp - 273.15) * (9 / 5) + 32)
    this.celcius = Math.round(data.main.temp - 273.15);
  }


  get TemplateF() {
    return `
    
     <div>
    <h4>${this.city}</h4>
   <i class="fas fa-sun fa-2x"></i>
     <h4 onclick="app.weatherController.Cel()">${this.fahrenheit} F</h4>
		</div>
    
    `

  }
  get TemplateC() {
    return `
    <div>
    <h4>${this.city}</h4>
   <i class="fas fa-sun fa-2x"></i>
    <h4 onclick="app.weatherController.Far()">${this.celcius} C</h4>
		</div>
    `
  }
}