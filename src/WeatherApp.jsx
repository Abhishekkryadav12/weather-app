import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [getWeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze"
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="WeatherApp">
      <h1>Weather APP</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={getWeatherInfo} />
    </div>
  );
}
