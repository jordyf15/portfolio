import {
  BackupTable,
  DarkMode,
  Home,
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

const Header = () => {
  const location = useLocation();

  return (
    <Stack
      bgcolor="#252733"
      direction="row"
      color="#C9D1D9"
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
          color="#C9D1D9"
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
              color: "#8B949E",
            }}
          />
          Home
          <Box
            position="absolute"
            height="5px"
            bottom={0}
            left={0}
            width="100%"
            bgcolor="#F78166"
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
          color="#C9D1D9"
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
              color: "#8B949E",
            }}
          />
          Projects
          <Box
            position="absolute"
            height="5px"
            bottom={0}
            left={0}
            width="100%"
            bgcolor="#F78166"
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

  useEffect(() => {}, []);
  return isMobile ? (
    <Box component="div" position="relative">
      <IconButton
        aria-label="open setting modal"
        sx={{
          color: "#C9D1D9",
        }}
        onClick={toggleShowSettingModal}
        ref={settingButtonRef}
      >
        <Settings
          sx={{
            color: "#8B949E",
          }}
        />
      </IconButton>
      {showSettingModal ? (
        <Stack
          position="absolute"
          bottom="-75px"
          right={0}
          zIndex={5}
          bgcolor="white"
          width="175px"
          borderRadius="5px"
          boxShadow="0 4px 12px 2px rgba(0,0,0,0.25)"
          ref={settingModalRef}
        >
          <Button
            sx={{
              // bgcolor: "red",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              fontWeight: "bold",
              color: "black",
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
              // bgcolor: "orange",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              fontWeight: "bold",
              color: "black",
              pl: "15px",
              textTransform: "none",
            }}
            variant="text"
            startIcon={<DarkMode />}
          >
            Dark Mode
          </Button>
          <Box
            height={0}
            width={0}
            borderLeft="7px solid transparent"
            borderRight="7px solid transparent"
            borderBottom="7px solid white"
            position="absolute"
            top="-7px"
            right="13px"
          />
        </Stack>
      ) : null}
    </Box>
  ) : (
    <Box>
      <Button
        variant="text"
        sx={{
          color: "#C9D1D9",
          textTransform: "none",
        }}
        startIcon={<Translate sx={{ color: "#8B949E" }} />}
      >
        Japanese
      </Button>
      <IconButton>
        <DarkMode sx={{ color: "#8B949E" }} />
      </IconButton>
    </Box>
  );
};

export default Header;
