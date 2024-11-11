/* eslint-disable react/prop-types */
import ErrorIcon from "../../assets/icons/ErrorIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import "./Error.css";

const Error = ({ error }) => {
  return (
    <div className="Error">
      {error === "Enter valid location" ? <LocationIcon /> : <ErrorIcon />}

      <h1 className="Error__text">{error}</h1>
    </div>
  );
};

export default Error;
