import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../store/weatherSlice";
import "./Inputs.css";
import SearchIcon from "../../assets/icons/SearchIcon";

const Inputs = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      dispatch(getWeather(input));
    }
  };

  return (
    <form className="Form" onSubmit={onSubmitHandler}>
      <input
        className="Form__input"
        placeholder="Enter Your Location.."
        onChange={onChangeHandler}
        value={input}
      />
      <button className="Form__btn">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Inputs;
