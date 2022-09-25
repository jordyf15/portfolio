import { Stack, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as AndroidLogo } from "../../assets/icons/android.svg";
import { ReactComponent as BackendLogo } from "../../assets/icons/backend.svg";
import { ReactComponent as FrontendLogo } from "../../assets/icons/frontend.svg";
import { ReactComponent as FullStackLogo } from "../../assets/icons/fullstack.svg";
import { ReactComponent as OtherLogo } from "../../assets/icons/other.svg";

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
      >
        Type:{" "}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        border="1px solid #D0D7DE"
        px="10px"
        py="3px"
        borderRadius="25px"
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
  switch (type) {
    case "Front-end":
      icon = FrontendLogo;
      break;
    case "Back-end":
      icon = BackendLogo;
      viewBox = "0 10 140 110";
      break;
    case "Full Stack":
      icon = FullStackLogo;
      viewBox = "0 10 130 110";
      break;
    case "Other":
      icon = OtherLogo;
      viewBox = "0 5 150 110";
      break;
    case "Android":
      icon = AndroidLogo;
      viewBox = "0 30 170 110";
      break;
  }

  return <SvgIcon viewBox={viewBox} component={icon}></SvgIcon>;
};

export default ProjectType;
