import "./Home.css";
import Inputs from "../../components/inputs/Inputs";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { useSelector } from "react-redux";

const Home = () => {
  const { weather, isLoading, error } = useSelector((state) => state.weather);

  return (
    <section className="Home">
      <Inputs />
      {isLoading && <h3 className="weather-msg">Loading...</h3>}
      {error && <h3 className="weather-msg">{error}</h3>}
      {weather && !error && !isLoading && <WeatherCard data={weather} />}
    </section>
  );
};

export default Home;
