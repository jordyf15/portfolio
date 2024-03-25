import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import AndroidLogoDark from "../../assets/technology-icons/android-dark.png";
import AndroidLogoLight from "../../assets/technology-icons/android-light.png";
import BackendLogoDark from "../../assets/technology-icons/backend-dark.png";
import BackendLogoLight from "../../assets/technology-icons/backend-light.png";
import FrontendLogoDark from "../../assets/technology-icons/frontend-dark.png";
import FrontendLogoLight from "../../assets/technology-icons/frontend-light.png";
import FullStackLogoDark from "../../assets/technology-icons/fullstack-dark.png";
import FullStackLogoLight from "../../assets/technology-icons/fullstack-light.png";
import OtherLogoDark from "../../assets/technology-icons/other-dark.png";
import OtherLogoLight from "../../assets/technology-icons/other-light.png";
import { useAppSelector } from "../../hook";

interface ProjectTypeProps {
  type: "frontend" | "backend" | "android" | "other" | "fullstack";
}

const ProjectType = ({ type }: ProjectTypeProps) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

  return (
    <Stack
      direction="row"
      alignItems="center"
      mb={language === "en" ? "10px" : "12px"}
      sx={{
        mr: {
          md: "25px",
        },
      }}
    >
      <Typography
        fontWeight="bold"
        mr="10px"
        sx={{
          fontSize: {
            xs: language === "en" ? "13px" : "11px",
            md: language === "en" ? "15px" : "13px",
          },
        }}
        color="secondary.main"
      >
        {t("project.type")}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        px="10px"
        py="3px"
        borderRadius="25px"
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "border",
        }}
      >
        <Typography
          component="span"
          lineHeight="unset"
          mr="8px"
          sx={{
            fontSize: {
              xs: language === "en" ? "13px" : "11px",
              md: language === "en" ? "15px" : "13px",
            },
          }}
          color="secondary.main"
        >
          {t(type)}{" "}
        </Typography>
        <TypeIcon type={type} />
      </Stack>
    </Stack>
  );
};

const TypeIcon = ({ type }: ProjectTypeProps) => {
  let icon: string;

  const theme = useAppSelector((state) => state.theme);
  switch (type) {
    case "frontend":
      icon = theme === "Light" ? FrontendLogoLight : FrontendLogoDark;
      break;
    case "backend":
      icon = theme === "Light" ? BackendLogoLight : BackendLogoDark;
      break;
    case "fullstack":
      icon = theme === "Light" ? FullStackLogoLight : FullStackLogoDark;
      break;
    case "other":
      icon = theme === "Light" ? OtherLogoLight : OtherLogoDark;
      break;
    case "android":
      icon = theme === "Light" ? AndroidLogoLight : AndroidLogoDark;
      break;
  }

  return <Box src={icon} component="img" width="20px" height="20px" />;
};

export default ProjectType;
