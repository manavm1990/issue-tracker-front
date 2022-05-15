import PropTypes from "prop-types";

export default function Main({ children }) {
  return <main className="container mx-auto">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
