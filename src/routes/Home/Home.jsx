import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <Typography className="my-4 text-center">
        Enter a GitHub username and a repo name that belongs to that particular
        GitHub user.
      </Typography>
      <Box component="form" className="flex justify-center gap-8">
        <TextField
          id="owner"
          label="Owner"
          variant="outlined"
          placeholder="@manavm1990"
          size="small"
        />
        <TextField
          id="repo"
          label="Repo"
          variant="outlined"
          placeholder="issue-tracker"
          size="small"
        />
        <Button variant="contained" size="small" className="rounded-full">
          Go!
        </Button>
      </Box>
    </>
  );
}
