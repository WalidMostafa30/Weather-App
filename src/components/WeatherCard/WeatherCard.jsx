/* eslint-disable react/prop-types */
import "./WeatherCard.css";
import humimg from "../../assets/Images/humidity.svg";
import windimg from "../../assets/Images/wind.svg";

const WeatherCard = ({ data }) => {
  return (
    <div className="WeatherCard">
      <h1 className="WeatherCard__title">{data.data.name}</h1>
      <img
        className="WeatherCard__img"
        src={`/public/icons/${data.data.weather[0].main}.png`}
        alt="img"
      />

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
