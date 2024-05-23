/* eslint-disable react/prop-types */
import "./Inputs.css";
import { useState } from "react";
import srchIcon from "../../assets/Images/Search-Icon.png";

const Inputs = ({ getData }) => {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      getData(input);
      // setInput("");
    }
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <input
        className="form__input"
        placeholder="Enter Your Location."
        onChange={onChangeHandler}
        value={input}
      />
      <button className="form__btn">
        <img src={srchIcon} />
      </button>
    </form>
  );
};

export default Inputs;
