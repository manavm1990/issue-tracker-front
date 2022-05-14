import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import DarkModeToggle from "../DarkModeToggle";

const label = { inputProps: { "aria-label": "Dark mode toggle" } };

export default function Header({ changeHandler }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      component="header"
      alignItems="baseline"
      justifyContent="center"
    >
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
    </Stack>
  );
}

Header.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};
