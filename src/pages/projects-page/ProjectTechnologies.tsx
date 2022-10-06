import { Stack, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as D3jsLogoLight } from "../../assets/icons/d3js-light.svg";
import { ReactComponent as ExpressLogoLight } from "../../assets/icons/expressjs-light.svg";
import { ReactComponent as GinLogoLight } from "../../assets/icons/gin-light.svg";
import { ReactComponent as HapiLogoLight } from "../../assets/icons/hapi-light.svg";
import { ReactComponent as MongoDBLogoLight } from "../../assets/icons/mongodb-light.svg";
import { ReactComponent as PostgresLogoLight } from "../../assets/icons/postgres-light.svg";
import { ReactComponent as ReactLogoLight } from "../../assets/icons/react-light.svg";
import { ReactComponent as RedisLogoLight } from "../../assets/icons/redis-light.svg";
import { ReactComponent as ReduxLogoLight } from "../../assets/icons/redux-light.svg";

import { ReactComponent as D3jsLogoDark } from "../../assets/icons/d3js-dark.svg";
import { ReactComponent as ExpressLogoDark } from "../../assets/icons/expressjs-dark.svg";
import { ReactComponent as GinLogoDark } from "../../assets/icons/gin-dark.svg";
import { ReactComponent as HapiLogoDark } from "../../assets/icons/hapi-dark.svg";
import { ReactComponent as MongoDBLogoDark } from "../../assets/icons/mongodb-dark.svg";
import { ReactComponent as PostgresLogoDark } from "../../assets/icons/postgres-dark.svg";
import { ReactComponent as ReactLogoDark } from "../../assets/icons/react-dark.svg";
import { ReactComponent as RedisLogoDark } from "../../assets/icons/redis-dark.svg";
import { ReactComponent as ReduxLogoDark } from "../../assets/icons/redux-dark.svg";
import { useAppSelector } from "../../hook";

type Technology =
  | "React"
  | "MongoDB"
  | "Redux"
  | "Express"
  | "Gin"
  | "Redis"
  | "Postgres"
  | "Hapi"
  | "D3js";

interface ProjectTechnologiesProps {
  technologies: Array<Technology>;
  projectID: string;
}

const ProjectTechnologies = ({
  technologies,
  projectID,
}: ProjectTechnologiesProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        mb: {
          xs: "10px",
          md: "15px",
        },
      }}
    >
      <Typography
        fontWeight="bold"
        mr="5px"
        sx={{
          fontSize: {
            xs: "13px",
            md: "15px",
          },
        }}
        color="secondary.main"
      >
        Technologies:{" "}
      </Typography>
      <Stack direction="row">
        {technologies.map((technology) => (
          <TechnologyIcon
            key={`${projectID}-technology-${technology}`}
            technology={technology}
          />
        ))}
      </Stack>
    </Stack>
  );
};

interface TechnologyIconProps {
  technology: Technology;
}

const TechnologyIcon = ({ technology }: TechnologyIconProps) => {
  let icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  const theme = useAppSelector((state) => state.theme);
  let viewBox = "0 35 200 100";

  switch (technology) {
    case "D3js":
      icon = theme === "Light" ? D3jsLogoLight : D3jsLogoDark;
      viewBox = "-35 30 200 100";
      break;
    case "Express":
      icon = theme === "Light" ? ExpressLogoLight : ExpressLogoDark;
      viewBox = "-25 45 200 100";
      break;
    case "Gin":
      icon = theme === "Light" ? GinLogoLight : GinLogoDark;
      viewBox = "0 55 150 50";
      break;
    case "Hapi":
      icon = theme === "Light" ? HapiLogoLight : HapiLogoDark;
      viewBox = "0 250 500 50";
      break;
    case "MongoDB":
      icon = theme === "Light" ? MongoDBLogoLight : MongoDBLogoDark;
      viewBox = "0 250 500 50";
      break;
    case "Postgres":
      icon = theme === "Light" ? PostgresLogoLight : PostgresLogoDark;
      viewBox = "0 250 600 50";
      break;
    case "React":
      icon = theme === "Light" ? ReactLogoLight : ReactLogoDark;
      viewBox = "-13 50 150 50";
      break;
    case "Redis":
      icon = theme === "Light" ? RedisLogoLight : RedisLogoDark;
      viewBox = "0 400 1000 50";
      break;
    case "Redux":
      icon = theme === "Light" ? ReduxLogoLight : ReduxLogoDark;
      viewBox = "0 200 400 50";
      break;
  }
  return (
    <SvgIcon
      viewBox={viewBox}
      component={icon}
      sx={{
        position: "relative",
        bottom: technology === "Gin" ? "3px" : "unset",
        mx: technology === "MongoDB" ? "0" : "3px",
        width: {
          xs: "25px",
          md: "30px",
        },
        height: {
          xs: "25px",
          md: "30px",
        },
      }}
    />
  );
};

export default ProjectTechnologies;
