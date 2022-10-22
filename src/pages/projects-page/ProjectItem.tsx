import { Box, Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../hook";
import Project from "../../models/Project";
import ProjectLanguage from "./ProjectLanguage";
import ProjectLink from "./ProjectLink";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectType from "./ProjectType";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const language = useAppSelector((state) => state.language);
  return (
    <Stack
      width="85%"
      borderRadius="12px"
      mt="40px"
      alignItems="center"
      sx={{
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        maxWidth: {
          xs: "400px",
          sm: "1000px",
        },
        px: {
          sm: "30px",
          md: "40px",
        },
        py: {
          sm: "20px",
          md: "25px",
          lg: "35px",
        },
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "border",
      }}
    >
      <Box
        component="img"
        src={project.imageUrl}
        sx={{
          borderTopRightRadius: {
            xs: "12px",
            sm: "unset",
          },
          borderTopLeftRadius: {
            xs: "12px",
            sm: "unset",
          },
          width: {
            xs: "100%",
            sm: "45%",
          },
          maxWidth: {
            xs: "unset",
            sm: "350px",
            md: "500px",
          },
          mr: {
            xs: "unset",
            sm: "15px",
            md: "25px",
          },
        }}
      />
      <Stack width="80%">
        <Typography
          color="primary.main"
          fontWeight="bold"
          sx={{
            textAlign: {
              xs: "center",
              sm: "left",
            },
            fontSize: {
              xs: language === "en" ? "16px" : "14px",
              md: language === "en" ? "20px" : "18px",
            },
            mt: {
              xs: "15px",
              sm: "unset",
              lg: "unset",
            },
            mb: language === "jp" ? "2px" : "unset",
          }}
        >
          {project.title}
        </Typography>
        <Typography
          mt="5px"
          textAlign="justify"
          lineHeight="unset"
          sx={{
            fontSize: {
              xs: language === "en" ? "13px" : "11px",
              md: language === "en" ? "15px" : "13px",
            },
          }}
          color="secondary.main"
        >
          {project.description}
        </Typography>
        <Stack
          sx={{
            flexDirection: {
              md: "row",
            },
            mt: {
              xs: "10px",
              md: "20px",
            },
            mb: {
              md: project.technologies.length > 0 ? "5px" : "10px",
            },
          }}
        >
          <ProjectType type={project.type} />
          <ProjectLanguage programmingLanguage={project.language} />
        </Stack>
        {project.technologies.length > 0 && (
          <ProjectTechnologies
            projectID={project.id}
            technologies={project.technologies}
          />
        )}
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            justifyContent: {
              xs: project.demoUrl.length > 0 ? "space-between" : "center",
              sm: "flex-start",
            },
            mb: {
              xs: "15px",
              sm: "unset",
            },
          }}
        >
          {project.demoUrl.length > 0 && (
            <ProjectLink
              href={project.demoUrl}
              text="button.liveDemo"
              sx={{
                mr: {
                  sm: "20px",
                },
              }}
            />
          )}
          <ProjectLink href={project.repoUrl} text="button.viewMore" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectItem;
