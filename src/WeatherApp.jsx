import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Search for city",
    feelsLike: null,
    temp: null,
    tempMin: null,
    tempMax: null,
    humidity: null,
    weather: null,
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h2>Search for Weather</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}