import { Stack, SvgIcon, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ReactComponent as AndroidLogoDark } from "../../assets/icons/android-dark.svg";
import { ReactComponent as AndroidLogoLight } from "../../assets/icons/android-light.svg";
import { ReactComponent as BackendLogoDark } from "../../assets/icons/backend-dark.svg";
import { ReactComponent as BackendLogoLight } from "../../assets/icons/backend-light.svg";
import { ReactComponent as FrontendLogoDark } from "../../assets/icons/frontend-dark.svg";
import { ReactComponent as FrontendLogoLight } from "../../assets/icons/frontend-light.svg";
import { ReactComponent as FullStackLogoDark } from "../../assets/icons/fullstack-dark.svg";
import { ReactComponent as FullStackLogoLight } from "../../assets/icons/fullstack-light.svg";
import { ReactComponent as OtherLogoDark } from "../../assets/icons/other-dark.svg";
import { ReactComponent as OtherLogoLight } from "../../assets/icons/other-light.svg";
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
  let icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  let viewBox = "0 10 150 110";
  const theme = useAppSelector((state) => state.theme);
  switch (type) {
    case "frontend":
      icon = theme === "Light" ? FrontendLogoLight : FrontendLogoDark;
      break;
    case "backend":
      icon = theme === "Light" ? BackendLogoLight : BackendLogoDark;
      viewBox = "0 10 140 110";
      break;
    case "fullstack":
      icon = theme === "Light" ? FullStackLogoLight : FullStackLogoDark;
      viewBox = "0 10 130 110";
      break;
    case "other":
      icon = theme === "Light" ? OtherLogoLight : OtherLogoDark;
      viewBox = "0 5 150 110";
      break;
    case "android":
      icon = theme === "Light" ? AndroidLogoLight : AndroidLogoDark;
      viewBox = "0 30 170 110";
      break;
  }

  return <SvgIcon viewBox={viewBox} component={icon}></SvgIcon>;
};

export default ProjectType;
