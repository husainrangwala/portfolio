import PropTypes from "prop-types";
import "./buttonGroup.css"; // Import the CSS file

const ButtonGroup = ({ setShow }) => {
  return (
    <div className="button-group">
      <button
        onClick={() => setShow(1)}
      >
        Overview
      </button>
      <button
        onClick={() => setShow(2)}
      >
        Experience
      </button>
    </div>
  );
};

ButtonGroup.propTypes = {
  setShow: PropTypes.func.isRequired,
};

export default ButtonGroup;