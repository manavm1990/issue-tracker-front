import PropTypes from "prop-types";

export default PropTypes.shape({
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});
