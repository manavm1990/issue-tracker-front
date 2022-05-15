import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useQuery } from "react-query";
import apiService from "./api.service";
import Header from "./components/Header/Header";
import IssuesList from "./components/IssuesList/IssuesList";
import Main from "./components/Main/Main";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  const userQuery = useQuery(["rails"], () => apiService.getIssues());

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const { data, isLoading, isError } = userQuery;

  const handleChange = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="bg-yellow h-[5px]" />
      <Header changeHandler={handleChange} />
      <Main>
        {isLoading && <p className="text-orange-500">Loading...</p>}
        {isError && <p className="text-red-500">Error</p>}
        {data && <IssuesList issues={data} />}
      </Main>
    </ThemeProvider>
  );
}
