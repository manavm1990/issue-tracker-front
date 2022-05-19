import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <>
      <Typography>
        Enter a GitHub username and a repo name that belongs to that particular
        GitHub user.
      </Typography>
      <form>
        <TextField
          id="outlined-basic"
          label="Owner"
          variant="outlined"
          defaultValue="@manavm1990"
        />
        <TextField
          id="outlined-basic"
          label="Repo"
          variant="outlined"
          defaultValue="issue-tracker"
        />
      </form>
    </>
  );
}
