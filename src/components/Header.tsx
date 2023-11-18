import {
  BackupTable,
  DarkMode,
  Home,
  LightMode,
  Settings,
  Translate,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toggleLanguage } from "../features/language";
import { toggleTheme } from "../features/theme";
import { useAppDispatch, useAppSelector } from "../hook";

type DisplayedContent = "home" | "projects";

const Header = ({
  displayedContent,
  setDisplayedContent,
}: {
  displayedContent: DisplayedContent;
  setDisplayedContent: (displayedContent: DisplayedContent) => void;
}) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

  return (
    <Stack
      bgcolor="headerBackground"
      direction="row"
      color="onHeader"
      alignItems="center"
      px="10px"
      justifyContent="space-between"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Typography>Jordyf15</Typography>
      <Stack direction="row" height="100%">
        <Typography
          onClick={() => setDisplayedContent("home")}
          display="flex"
          flexDirection="row"
          alignItems="center"
          color="onHeader"
          px="5px"
          py="15px"
          position="relative"
          sx={{
            textDecoration: "none",
            fontSize: {
              xs: language === "jp" ? "12px" : "16px",
              sm: language === "jp" ? "14px" : "16px",
            },
          }}
          fontWeight="bold"
          fontSize={language === "jp" ? "14px" : "16px"}
        >
          <Home
            sx={{
              mr: "5px",
              color: "headerIcon",
              fontSize: "1.5rem",
            }}
          />
          {t("header.home")}
          <Box
            position="absolute"
            height="5px"
            bottom={0}
            left={0}
            width="100%"
            bgcolor="primary.main"
            sx={{
              visibility: displayedContent === "home" ? "show" : "hidden",
            }}
          />
        </Typography>
        <Typography
          display="flex"
          flexDirection="row"
          alignItems="center"
          onClick={() => setDisplayedContent("projects")}
          color="onHeader"
          px="5px"
          py="15px"
          sx={{
            textDecoration: "none",
            fontSize: {
              xs: language === "jp" ? "12px" : "16px",
              sm: language === "jp" ? "14px" : "16px",
            },
          }}
          height="100%"
          position="relative"
          fontWeight="bold"
        >
          <BackupTable
            sx={{
              mr: "5px",
              color: "headerIcon",
              fontSize: "1.5rem",
            }}
          />
          {t("header.projects")}
          <Box
            position="absolute"
            height="5px"
            bottom={0}
            left={0}
            width="100%"
            bgcolor="primary.main"
            sx={{
              visibility: displayedContent === "projects" ? "show" : "hidden",
            }}
          ></Box>
        </Typography>
      </Stack>
      <SettingMenu />
    </Stack>
  );
};

const SettingMenu = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [showSettingModal, setShowSettingModal] = useState(false);
  const settingButtonRef = useRef<HTMLButtonElement>(null);
  const settingModalRef = useRef<HTMLDivElement>(null);
  const language = useAppSelector((state) => state.language);
  const { t } = useTranslation();

  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener("click", hideSettingModal, true);
  }, []);

  const toggleShowSettingModal = () => {
    setShowSettingModal(!showSettingModal);
  };

  const hideSettingModal = (e: MouseEvent) => {
    if (
      settingButtonRef &&
      settingModalRef &&
      settingModalRef.current &&
      settingButtonRef.current &&
      !settingButtonRef.current.contains(e.target as Node) &&
      !settingModalRef.current.contains(e.target as Node)
    ) {
      setShowSettingModal(false);
    }
  };

  const onToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const onToggleLanguage = () => {
    dispatch(toggleLanguage());
  };

  useEffect(() => {}, []);
  return isMobile ? (
    <Box component="div" position="relative">
      <IconButton
        aria-label="open setting modal"
        sx={{
          color: "onHeader",
        }}
        onClick={toggleShowSettingModal}
        ref={settingButtonRef}
      >
        <Settings
          sx={{
            color: "headerIcon",
          }}
        />
      </IconButton>
      {showSettingModal ? (
        <Stack
          position="absolute"
          bottom="-75px"
          right={0}
          zIndex={5}
          bgcolor={theme === "Dark" ? "headerBackground" : "background.default"}
          width="175px"
          borderRadius="5px"
          boxShadow="0 4px 12px 2px rgba(0,0,0,0.25)"
          ref={settingModalRef}
        >
          <Button
            sx={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              fontWeight: "bold",
              color: "secondary.main",
              pl: "15px",
              textTransform: "none",
            }}
            variant="text"
            startIcon={<Translate />}
            onClick={onToggleLanguage}
          >
            {t("header.language")}
          </Button>
          <Button
            sx={{
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              fontWeight: "bold",
              color: "secondary.main",
              pl: "15px",
              textTransform: "none",
              fontSize: language === "jp" ? "14px" : "16px",
            }}
            variant="text"
            onClick={onToggleTheme}
            startIcon={theme === "Dark" ? <LightMode /> : <DarkMode />}
          >
            {theme === "Dark" ? t("header.lightTheme") : t("header.darkTheme")}
          </Button>
          <Box
            height={0}
            width={0}
            borderLeft="7px solid transparent"
            borderRight="7px solid transparent"
            position="absolute"
            top="-7px"
            right="13px"
            sx={{
              borderBottomWidth: "7px",
              borderBottomStyle: "solid",
              borderBottomColor:
                theme === "Dark" ? "headerBackground" : "background.default",
            }}
          />
        </Stack>
      ) : null}
    </Box>
  ) : (
    <Box>
      <Button
        variant="text"
        sx={{
          color: "onHeader",
          textTransform: "none",
          fontWeight: "bold",
        }}
        startIcon={<Translate sx={{ color: "headerIcon" }} />}
        onClick={onToggleLanguage}
      >
        {t("header.language")}
      </Button>
      <IconButton onClick={onToggleTheme}>
        {theme === "Dark" ? (
          <LightMode sx={{ color: "headerIcon" }} />
        ) : (
          <DarkMode sx={{ color: "headerIcon" }} />
        )}
      </IconButton>
    </Box>
  );
};

export default Header;
