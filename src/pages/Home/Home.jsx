import "./Home.css";
import Inputs from "../../components/inputs/Inputs";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Home = () => {
  const { weather, loading, error } = useSelector((state) => state.weather);

  return (
    <section className="Home">
      <div className="Home__container">
        <Inputs />
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : (
          weather && <WeatherCard data={weather} />
        )}
      </div>
    </section>
  );
};

export default Home;
