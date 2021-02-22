const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cc2320d0a9fdacdd2495b7390e523460`
  );
  const weatherInfo = await response.json();

  return weatherInfo;
};

const getWeather = async (city) => {
  let weatherInfo = await fetchWeather(city);
  const weather = new Weather(weatherInfo);

  return weather;
};

class Weather {
  constructor(weatherInfo) {
    this.name = weatherInfo.name;
    this.temp = `Temp: ${weatherInfo.main.temp}°C`;
    this.temp_max = `Max. Temp: ${weatherInfo.main.temp_max}°C`;
    this.temp_min = `Min. Temp: ${weatherInfo.main.temp_min}°C`;
    this.humidity = `Humidity: ${weatherInfo.main.humidity}%`;
    this.weather_main = weatherInfo.weather[0].main;
    // this.weather_icon = weatherInfo.weather[0].icon;
  }
}

export default getWeather;
