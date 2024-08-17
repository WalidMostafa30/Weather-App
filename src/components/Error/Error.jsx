/* eslint-disable react/prop-types */
import "./Error.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Error = ({ error }) => {
  return (
    <div className="Error">
      <FontAwesomeIcon
        icon={error === "Enter valid location" ? faLocationDot : faTriangleExclamation}
      />

      <h1 className="Error__text">{error}</h1>
    </div>
  );
};

export default Error;
