import PropTypes from "prop-types";

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  assignee: PropTypes.shape({ login: PropTypes.string.isRequired }),
  comments: PropTypes.number.isRequired,
  user: PropTypes.shape({ login: PropTypes.string.isRequired }).isRequired,
  created_at: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  state: PropTypes.oneOf(["open", "closed"]).isRequired,
}).isRequired;
