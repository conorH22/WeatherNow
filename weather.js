class Weather {
  constructor(city, state) {
    this.apiKey = 'eadadb06f5c9e93107d7def0669e8976';
    this.city = city;
    
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;

     
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
    
  }
}