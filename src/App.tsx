import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SlideFade from "./components/SlideFade";
import { useAppSelector } from "./hook";
import "./i18n";
import HomePage from "./pages/home-page";
import ProjectPage from "./pages/projects-page";

const typography = {
  fontFamily: `"Roboto", sans-serif`,
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 700,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const lightTheme = createTheme({
  typography: typography,
  breakpoints: breakpoints,
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#F78166",
    },
    onPrimary: "#FFFFFF",
    secondary: {
      main: "#000000",
    },
    minorText: "#7B7B7B",
    border: "#D0D7DE",
    headerBackground: "#252733",
    onHeader: "#C9D1D9",
    headerIcon: "#8B949E",
    historyPillar: "#D8DEE4",
    historyBackground: "#EAEEF2",
    historyIcon: "#57606A",
    selectBackground: "#F6F8FA",
    selectPaperBackground: "#FFFFFF",
  },
});

const darkTheme = createTheme({
  typography: typography,
  breakpoints: breakpoints,
  palette: {
    background: {
      default: "#0D1117",
    },
    primary: {
      main: "#78ABEA",
    },
    onPrimary: "#FFFFFF",
    secondary: {
      main: "#C9D1D9",
    },
    minorText: "#8B949E",
    border: "#30363D",
    headerBackground: "#161B22",
    onHeader: "#F0F6FC",
    headerIcon: "#F0F6FC",
    historyPillar: "#30363D",
    historyBackground: "#30363D",
    historyIcon: "#F0F6FC",
    selectBackground: "#21262D",
    selectPaperBackground: "#21262D",
  },
});

function App() {
  const [displayedContent, setDisplayedContent] = useState<"home" | "projects">(
    "home"
  );
  const theme = useAppSelector((state) => state.theme);
  const language = useAppSelector((state) => state.language);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [displayedContent]);

  return (
    <ThemeProvider theme={theme === "Dark" ? darkTheme : lightTheme}>
      <Stack
        direction="column"
        minHeight="100vh"
        justifyContent="space-between"
        bgcolor="background.default"
      >
        <Header
          displayedContent={displayedContent}
          setDisplayedContent={setDisplayedContent}
        />
        <SlideFade
          show={displayedContent === "home"}
          slideDirection="right"
          content={<HomePage />}
        />
        <SlideFade
          show={displayedContent === "projects"}
          slideDirection="left"
          content={<ProjectPage />}
        />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
