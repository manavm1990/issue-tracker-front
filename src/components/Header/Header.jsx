import { Typography } from "@mui/material";
import DarkModeToggle from "../DarkModeToggle";

const label = { inputProps: { "aria-label": "Dark mode toggle" } };

export default function Header() {
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
      <DarkModeToggle sx={{ m: 1 }} defaultChecked {...label} />
    </header>
  );
}
