/* eslint-disable react/prop-types */
import "./WeatherCard.css";
import Clouds from "../../assets/Images/weatherImages/Clouds.webp";
import Clear from "../../assets/Images/weatherImages/Clear.webp";
import Drizzle from "../../assets/Images/weatherImages/Drizzle.webp";
import Fog from "../../assets/Images/weatherImages/Fog.webp";
import Rain from "../../assets/Images/weatherImages/Rain.webp";
import Snow from "../../assets/Images/weatherImages/Snow.webp";
import Windy from "../../assets/Images/weatherImages/Windy.webp";
import WaterIcon from "../../assets/icons/WaterIcon";
import WindIcon from "../../assets/icons/WindIcon";

const WeatherCard = ({ data }) => {
  let img;
  if (data.weather[0].main === "Clouds") {
    img = Clouds;
  } else if (data.weather[0].main === "Clear") {
    img = Clear;
  } else if (data.weather[0].main === "Drizzle") {
    img = Drizzle;
  } else if (data.weather[0].main === "Fog") {
    img = Fog;
  } else if (data.weather[0].main === "Rain") {
    img = Rain;
  } else if (data.weather[0].main === "Snow") {
    img = Snow;
  } else if (
    data.weather[0].main === "Windy" ||
    data.weather[0].main === "Mist"
  ) {
    img = Windy;
  }

  return (
    <article className="WeatherCard">
      <h1 className="WeatherCard__title">{data.name}</h1>

      <div className="WeatherCard__img">
        <img src={img} alt={data.weather[0].main} loading="lazy" />
      </div>

      <div className="WeatherCard__temp">
        <h1>
          {Math.round(data.main.temp)} <span>°C</span>
        </h1>
        <p>{data.weather[0].main}</p>
      </div>

      <div className="WeatherCard__infos">
        <div className="WeatherCard__info">
          <WaterIcon />
          <div className="WeatherCard__info-content">
            <h2>{data.main.humidity} %</h2>
            <p>Humidity</p>
          </div>
        </div>

        <div className="WeatherCard__info">
          <WindIcon />
          <div className="WeatherCard__info-content">
            <h2>{data.wind.speed} km/h</h2>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WeatherCard;
