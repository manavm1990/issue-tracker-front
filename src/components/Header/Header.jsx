import { Typography } from "@mui/material";
import DarkModeToggle from "../DarkModeToggle";

const label = { inputProps: { "aria-label": "Dark mode toggle" } };

export default function Header() {
  return (
    <header>
      <Typography variant="h3" component="h1" textAlign="center">
        Issue Tracker
      </Typography>
      <DarkModeToggle sx={{ m: 1 }} defaultChecked {...label} />
    </header>
  );
}
