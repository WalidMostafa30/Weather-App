import "./Home.css";
import Inputs from "../../components/inputs/Inputs";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, SetData] = useState([]);
  const key = "6b31bdcc4168f2f03d1d3f91838f5a53";

  const getData = async (city) => {
    try {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
      );
      SetData(res);
    } catch {
      SetData(false);
    }
  };
  return (
    <section className="Home">
      <Inputs getData={getData} />
      {data.length !== 0 && data !== false && <WeatherCard data={data} />}
      {data === false && (
        <h3 className="WeatherCard__msg-error">Enter valid location</h3>
      )}
    </section>
  );
};

export default Home;
