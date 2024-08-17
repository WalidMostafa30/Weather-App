import "./Home.css";
import Inputs from "../../components/inputs/Inputs";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Home = () => {
  const { weather, isLoading, error } = useSelector((state) => state.weather);

  return (
    <section className="Home">
      <Inputs />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        weather && <WeatherCard data={weather} />
      )}
    </section>
  );
};

export default Home;
