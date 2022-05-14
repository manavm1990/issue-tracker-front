import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import DarkModeToggle from "../DarkModeToggle";

const label = { inputProps: { "aria-label": "Dark mode toggle" } };

export default function Header({ changeHandler }) {
  return (
    <header>
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        mt={16}
        textAlign="center"
      >
        Issue Tracker
      </Typography>
      <DarkModeToggle defaultChecked {...label} onChange={changeHandler} />
    </header>
  );
}

Header.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};
