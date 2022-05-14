import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Main({ children }) {
  return (
    <main className="flex h-screen justify-center items-center">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
