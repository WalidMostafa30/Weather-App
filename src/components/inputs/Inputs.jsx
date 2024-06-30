import "./Inputs.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { getWeather } from "../../rtk/weatherSlice";

const Inputs = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    
  inputRef.current.focus()
  }, []);

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
    <form className="form" onSubmit={onSubmitHandler}>
      <input
        ref={inputRef}
        className="form__input"
        placeholder="Enter Your Location.."
        onChange={onChangeHandler}
        value={input}
      />
      <button className="form__btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Inputs;
