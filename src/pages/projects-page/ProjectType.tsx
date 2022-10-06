import { Stack, SvgIcon, Typography } from "@mui/material";
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
  type: "Front-end" | "Back-end" | "Android" | "Other" | "Full Stack";
}

const ProjectType = ({ type }: ProjectTypeProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      mb="10px"
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
            xs: "13px",
            md: "15px",
          },
        }}
        color="secondary.main"
      >
        Type:{" "}
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
              xs: "13px",
              md: "15px",
            },
          }}
          color="secondary.main"
        >
          {type}{" "}
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
    case "Front-end":
      icon = theme === "Light" ? FrontendLogoLight : FrontendLogoDark;
      break;
    case "Back-end":
      icon = theme === "Light" ? BackendLogoLight : BackendLogoDark;
      viewBox = "0 10 140 110";
      break;
    case "Full Stack":
      icon = theme === "Light" ? FullStackLogoLight : FullStackLogoDark;
      viewBox = "0 10 130 110";
      break;
    case "Other":
      icon = theme === "Light" ? OtherLogoLight : OtherLogoDark;
      viewBox = "0 5 150 110";
      break;
    case "Android":
      icon = theme === "Light" ? AndroidLogoLight : AndroidLogoDark;
      viewBox = "0 30 170 110";
      break;
  }

  return <SvgIcon viewBox={viewBox} component={icon}></SvgIcon>;
};

export default ProjectType;
