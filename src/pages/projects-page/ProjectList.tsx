import { SearchOffRounded } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Project from "../../models/Project";
import ProjectItem from "./ProjectItem";

interface ProjectListProps {
  projects: Array<Project>;
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const { t } = useTranslation();
  return projects.length > 0 ? (
    <Stack
      width="100%"
      alignItems="center"
      sx={{
        mt: {
          sm: "20px",
        },
      }}
    >
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </Stack>
  ) : (
    <Stack
      justifyContent="center"
      alignItems="center"
      color="minorText"
      flexGrow={1}
      px={2}
    >
      <SearchOffRounded sx={{ fontSize: { xs: "108px", sm: "132px" } }} />
      <Typography
        fontSize={{
          xs: "14px",
          sm: "16px",
        }}
        textAlign="center"
      >
        {t("filter.noResult")}
      </Typography>
    </Stack>
  );
};

export default ProjectList;
