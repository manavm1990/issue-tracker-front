import { CssBaseline, LinearProgress, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import Error from "./components/Error";
import Header from "./components/Header/Header";
import IssuesList from "./components/IssuesList/IssuesList";
import useIssuesQuery from "./utils/useIssuesQuery";

const OWNER = "rails";
const REPO = "rails";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  const issuesQuery = useIssuesQuery({
    owner: OWNER,
    repo: REPO,
    filters: { state: "all" },
  });

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const { data, isLoading, isError } = issuesQuery;

  const handleChange = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {isLoading ? <LinearProgress /> : <div className="bg-yellow h-1" />}
      <Header changeHandler={handleChange} />
      <Container maxWidth="md" component="main">
        {isError && <Error error={issuesQuery.error.message} />}

        {data && (
          <Grid container spacing={2}>
            <Grid item xs={8} component="section">
              <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                className="text-yellow-500"
              >
                Issues List{" "}
              </Typography>
              <IssuesList issues={data} />
            </Grid>
          </Grid>
        )}
      </Container>
    </ThemeProvider>
  );
}
