/* eslint-disable react/prop-types */
import "./WeatherCard.css";
import Clouds from "../../assets/Images/Clouds.webp";
import Clear from "../../assets/Images/Clear.webp";
import Drizzle from "../../assets/Images/Drizzle.webp";
import Fog from "../../assets/Images/Fog.webp";
import Rain from "../../assets/Images/Rain.webp";
import Snow from "../../assets/Images/Snow.webp";
import Windy from "../../assets/Images/Windy.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faWind } from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({ data }) => {
  let img;
  if (data.data.weather[0].main === "Clouds") {
    img = Clouds;
  } else if (data.data.weather[0].main === "Clear") {
    img = Clear;
  } else if (data.data.weather[0].main === "Drizzle") {
    img = Drizzle;
  } else if (data.data.weather[0].main === "Fog") {
    img = Fog;
  } else if (data.data.weather[0].main === "Rain") {
    img = Rain;
  } else if (data.data.weather[0].main === "Snow") {
    img = Snow;
  } else if (data.data.weather[0].main === "Windy") {
    img = Windy;
  }

  return (
    <div className="WeatherCard">
      <>
        <h1 className="WeatherCard__title">{data.data.name}</h1>
        <img className="WeatherCard__img" src={img} alt="img" />

        <div className="WeatherCard__temp">
          <h1>
            {Math.round(data.data.main.temp)} <span>°C</span>
          </h1>
          <p>{data.data.weather[0].main}</p>
        </div>

        <div className="WeatherCard__infos">
          <div className="WeatherCard__info">
            <FontAwesomeIcon icon={faWater} />
            <div className="WeatherCard__info-content">
              <h2>{data.data.main.humidity} %</h2>
              <p>Humidity</p>
            </div>
          </div>

          <div className="WeatherCard__info">
            <FontAwesomeIcon icon={faWind} />
            <div className="WeatherCard__info-content">
              <h2>{data.data.wind.speed} km/h</h2>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default WeatherCard;
