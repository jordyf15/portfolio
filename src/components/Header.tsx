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
import { Link, useLocation } from "react-router-dom";
import { toggleTheme } from "../features/theme";
import { useAppDispatch, useAppSelector } from "../hook";

const Header = () => {
  const location = useLocation();

  return (
    <Stack
      bgcolor="headerBackground"
      direction="row"
      color="onHeader"
      alignItems="center"
      px="10px"
      justifyContent="space-between"
    >
      <Typography>Jordyf15</Typography>
      <Stack direction="row" height="100%">
        <Typography
          component={Link}
          to="/"
          display="flex"
          flexDirection="row"
          alignItems="center"
          color="onHeader"
          px="5px"
          py="15px"
          position="relative"
          sx={{
            textDecoration: "none",
          }}
        >
          <Home
            sx={{
              mr: "5px",
              color: "headerIcon",
            }}
          />
          Home
          <Box
            position="absolute"
            height="5px"
            bottom={0}
            left={0}
            width="100%"
            bgcolor="primary.main"
            sx={{
              visibility: location.pathname === "/" ? "show" : "hidden",
            }}
          />
        </Typography>
        <Typography
          display="flex"
          flexDirection="row"
          alignItems="center"
          component={Link}
          to="/projects"
          color="onHeader"
          px="5px"
          py="15px"
          sx={{
            textDecoration: "none",
          }}
          height="100%"
          position="relative"
        >
          <BackupTable
            sx={{
              mr: "5px",
              color: "headerIcon",
            }}
          />
          Projects
          <Box
            position="absolute"
            height="5px"
            bottom={0}
            left={0}
            width="100%"
            bgcolor="primary.main"
            sx={{
              visibility: location.pathname === "/projects" ? "show" : "hidden",
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
    dispatch(toggleTheme({}));
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
          >
            Japanese
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
            }}
            variant="text"
            onClick={onToggleTheme}
            startIcon={theme === "Dark" ? <LightMode /> : <DarkMode />}
          >
            {theme === "Dark" ? "Light Mode" : "Dark Mode"}
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
        }}
        startIcon={<Translate sx={{ color: "headerIcon" }} />}
      >
        Japanese
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
