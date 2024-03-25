import { Box, Stack, Tooltip, Typography } from "@mui/material";
import D3jsLogoLight from "../../assets/technology-icons/d3js-light.png";
import ExpressLogoLight from "../../assets/technology-icons/expressjs-light.png";
import GinLogoLight from "../../assets/technology-icons/gin-light.png";
import HapiLogoLight from "../../assets/technology-icons/hapi-light.png";
import MongoDBLogoLight from "../../assets/technology-icons/mongodb-light.png";
import PostgresLogoLight from "../../assets/technology-icons/postgres-light.png";
import ReactLogoLight from "../../assets/technology-icons/react-light.png";
import RedisLogoLight from "../../assets/technology-icons/redis-light.png";
import ReduxLogoLight from "../../assets/technology-icons/redux-light.png";

import { useTranslation } from "react-i18next";
import D3jsLogoDark from "../../assets/technology-icons/d3js-dark.png";
import ExpressLogoDark from "../../assets/technology-icons/expressjs-dark.png";
import FirebaseLogoDark from "../../assets/technology-icons/firebase-dark.png";
import FirebaseLogoLight from "../../assets/technology-icons/firebase-light.png";
import GinLogoDark from "../../assets/technology-icons/gin-dark.png";
import HapiLogoDark from "../../assets/technology-icons/hapi-dark.png";
import MongoDBLogoDark from "../../assets/technology-icons/mongodb-dark.png";
import PostgresLogoDark from "../../assets/technology-icons/postgres-dark.png";
import ReactLogoDark from "../../assets/technology-icons/react-dark.png";
import RedisLogoDark from "../../assets/technology-icons/redis-dark.png";
import ReduxLogoDark from "../../assets/technology-icons/redux-dark.png";
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
  | "D3js"
  | "Firebase";

interface ProjectTechnologiesProps {
  technologies: Array<Technology>;
  projectID: string;
}

const ProjectTechnologies = ({
  technologies,
  projectID,
}: ProjectTechnologiesProps) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

  return (
    <Stack
      direction="row"
      sx={{
        mb: {
          xs: "10px",
          md: "15px",
        },
      }}
      alignItems="center"
    >
      <Typography
        fontWeight="bold"
        mr="5px"
        sx={{
          fontSize: {
            xs: language === "en" ? "13px" : "11px",
            md: language === "en" ? "15px" : "13px",
          },
        }}
        color="secondary.main"
      >
        {t("project.technologies")}
      </Typography>
      <Stack direction="row" spacing={1}>
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
  let icon: string;
  const theme = useAppSelector((state) => state.theme);

  switch (technology) {
    case "D3js":
      icon = theme === "Light" ? D3jsLogoLight : D3jsLogoDark;
      break;
    case "Express":
      icon = theme === "Light" ? ExpressLogoLight : ExpressLogoDark;
      break;
    case "Gin":
      icon = theme === "Light" ? GinLogoLight : GinLogoDark;
      break;
    case "Hapi":
      icon = theme === "Light" ? HapiLogoLight : HapiLogoDark;
      break;
    case "MongoDB":
      icon = theme === "Light" ? MongoDBLogoLight : MongoDBLogoDark;
      break;
    case "Postgres":
      icon = theme === "Light" ? PostgresLogoLight : PostgresLogoDark;
      break;
    case "React":
      icon = theme === "Light" ? ReactLogoLight : ReactLogoDark;
      break;
    case "Redis":
      icon = theme === "Light" ? RedisLogoLight : RedisLogoDark;
      break;
    case "Redux":
      icon = theme === "Light" ? ReduxLogoLight : ReduxLogoDark;
      break;
    case "Firebase":
      icon = theme === "Light" ? FirebaseLogoLight : FirebaseLogoDark;
      break;
  }
  return (
    <Tooltip
      title={technology}
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -10],
            },
          },
        ],
      }}
    >
      <Box component="img" src={icon} width="25px" height="25px" />
    </Tooltip>
  );
};

export default ProjectTechnologies;
