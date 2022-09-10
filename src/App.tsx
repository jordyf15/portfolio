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
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Stack direction="column">
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
