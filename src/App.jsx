import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import Issues from "./routes/Issues/Issues";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header changeHandler={handleChange} />
      <Container maxWidth="md" component="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues/:owner/:repo" element={<Issues />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}
