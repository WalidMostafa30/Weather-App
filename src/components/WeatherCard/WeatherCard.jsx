/* eslint-disable react/prop-types */
import "./WeatherCard.css";
import humimg from "../../assets/Images/humidity.svg";
import windimg from "../../assets/Images/wind.svg";
import Clouds from "../../assets/Images/icons/Clouds.png";
import Clear from "../../assets/Images/icons/Clear.png";
import Drizzle from "../../assets/Images/icons/Drizzle.png";
import Fog from "../../assets/Images/icons/Fog.png";
import Rain from "../../assets/Images/icons/Rain.png";
import Snow from "../../assets/Images/icons/Snow.png";
import Windy from "../../assets/Images/icons/Windy.png";

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
          <img src={humimg} />
          <div className="WeatherCard__info-content">
            <h2>{data.data.main.humidity} %</h2>
            <p>Humidity</p>
          </div>
        </div>

        <div className="WeatherCard__info">
          <img src={windimg} />
          <div className="WeatherCard__info-content">
            <h2>{data.data.wind.speed} km/h</h2>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
