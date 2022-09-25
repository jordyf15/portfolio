import { Stack } from "@mui/material";
import Project from "../../models/Project";
import ProjectItem from "./ProjectItem";

interface ProjectListProps {
  projects: Array<Project>;
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
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
  );
};

export default ProjectList;
