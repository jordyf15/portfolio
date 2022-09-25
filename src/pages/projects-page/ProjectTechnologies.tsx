import { Stack, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as D3jsLogo } from "../../assets/icons/d3js.svg";
import { ReactComponent as ExpressLogo } from "../../assets/icons/expressjs.svg";
import { ReactComponent as GinLogo } from "../../assets/icons/gin.svg";
import { ReactComponent as HapiLogo } from "../../assets/icons/hapi.svg";
import { ReactComponent as MongoDBLogo } from "../../assets/icons/mongodb.svg";
import { ReactComponent as PostgresLogo } from "../../assets/icons/postgres.svg";
import { ReactComponent as ReactLogo } from "../../assets/icons/react.svg";
import { ReactComponent as RedisLogo } from "../../assets/icons/redis.svg";
import { ReactComponent as ReduxLogo } from "../../assets/icons/redux.svg";

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
  let viewBox = "0 35 200 100";

  switch (technology) {
    case "D3js":
      icon = D3jsLogo;
      viewBox = "-35 30 200 100";
      break;
    case "Express":
      icon = ExpressLogo;
      viewBox = "-25 45 200 100";
      break;
    case "Gin":
      icon = GinLogo;
      viewBox = "0 55 150 50";
      break;
    case "Hapi":
      icon = HapiLogo;
      viewBox = "0 250 500 50";
      break;
    case "MongoDB":
      icon = MongoDBLogo;
      viewBox = "0 250 500 50";
      break;
    case "Postgres":
      icon = PostgresLogo;
      viewBox = "0 250 600 50";
      break;
    case "React":
      icon = ReactLogo;
      viewBox = "-13 50 150 50";
      break;
    case "Redis":
      icon = RedisLogo;
      viewBox = "0 400 1000 50";
      break;
    case "Redux":
      icon = ReduxLogo;
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
