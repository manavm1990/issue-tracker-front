import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const { owner, repo } = Object.fromEntries(new FormData(e.target));

    navigate(`/issues/${owner}/${repo}`);
  };

  return (
    <>
      <Typography className="my-4 text-center">
        Enter a GitHub username and a repo name that belongs to that particular
        GitHub user.
      </Typography>
      <Box
        component="form"
        className="flex justify-center gap-8"
        onSubmit={handleSubmit}
      >
        <TextField
          id="owner"
          name="owner"
          label="Owner"
          variant="outlined"
          placeholder="@manavm1990"
          size="small"
        />
        <TextField
          id="repo"
          name="repo"
          label="Repo"
          variant="outlined"
          placeholder="issue-tracker"
          size="small"
        />
        <Button
          variant="contained"
          size="small"
          className="rounded-full"
          type="submit"
        >
          Go!
        </Button>
      </Box>
    </>
  );
}
