import './App.css';
import Current_weather from './components/Current_weather/Current_weather';
import Search from './components/Search/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import { useState } from 'react';
import Forecast from './components/Forecast/Forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {

    // console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();


        setCurrentWeather({ city: searchData.label , ...weatherResponse});
        setForecast({ city: searchData.label , ...forecastResponse});
      })
      .catch((err) => console.log(err));
  }

  // console.log(currentWeather);
  // console.log(forecast);
  
  

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
      {currentWeather && <Current_weather data={currentWeather} ></Current_weather>}
      {forecast && <Forecast data={forecast}></Forecast>}
    </div>
  );
}

export default App;
