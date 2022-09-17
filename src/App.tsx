import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/home-page";
import ProjectPage from "./pages/projects-page";

const appTheme = createTheme({
  typography: {
    fontFamily: `"Roboto", sans-serif`,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Stack
          direction="column"
          minHeight="100vh"
          justifyContent="space-between"
        >
          <Header />
          <Routes>
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
