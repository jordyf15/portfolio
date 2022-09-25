import { Box, Stack, Typography } from "@mui/material";

interface ProjectLanguageProps {
  language: "Kotlin" | "Javascript" | "Ruby" | "Go" | "Typescript";
}

const ProjectLanguage = ({ language }: ProjectLanguageProps) => {
  return (
    <Stack mb="10px" direction="row" alignItems="center">
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
        Language:{" "}
      </Typography>
      <Stack direction="row" alignItems="center">
        <LanguageColor language={language} />
        <Typography
          position="relative"
          top="1px"
          component="span"
          lineHeight="unset"
          sx={{
            fontSize: {
              xs: "13px",
              md: "15px",
            },
          }}
        >
          {language}
        </Typography>
      </Stack>
    </Stack>
  );
};

const LanguageColor = ({ language }: ProjectLanguageProps) => {
  let languageColor = "";
  switch (language) {
    case "Go":
      languageColor = "#00ADD8";
      break;
    case "Javascript":
      languageColor = "#f1e05a";
      break;
    case "Kotlin":
      languageColor = "#A97BFF";
      break;
    case "Ruby":
      languageColor = "#701516";
      break;
    case "Typescript":
      languageColor = "#3178c6";
      break;
  }

  return (
    <Box
      borderRadius="50%"
      bgcolor={languageColor}
      mr="7px"
      sx={{
        width: {
          xs: "13px",
          md: "15px",
        },
        height: {
          xs: "13px",
          md: "15px",
        },
      }}
    ></Box>
  );
};

export default ProjectLanguage;
