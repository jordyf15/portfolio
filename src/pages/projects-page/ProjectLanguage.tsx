import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hook";

interface ProjectLanguageProps {
  programmingLanguage: "kotlin" | "javascript" | "ruby" | "go" | "typescript";
}

const ProjectLanguage = ({ programmingLanguage }: ProjectLanguageProps) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

  return (
    <Stack
      mb={language === "en" ? "10px" : "12px"}
      direction="row"
      alignItems="center"
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
        {t("project.language")}
      </Typography>
      <Stack direction="row" alignItems="center">
        <LanguageColor programmingLanguage={programmingLanguage} />
        <Typography
          position="relative"
          top="1px"
          component="span"
          lineHeight="unset"
          sx={{
            fontSize: {
              xs: language === "en" ? "13px" : "11px",
              md: language === "en" ? "15px" : "13px",
            },
          }}
          color="secondary.main"
        >
          {t(programmingLanguage)}
        </Typography>
      </Stack>
    </Stack>
  );
};

const LanguageColor = ({ programmingLanguage }: ProjectLanguageProps) => {
  let languageColor = "";
  switch (programmingLanguage) {
    case "go":
      languageColor = "#00ADD8";
      break;
    case "javascript":
      languageColor = "#f1e05a";
      break;
    case "kotlin":
      languageColor = "#A97BFF";
      break;
    case "ruby":
      languageColor = "#701516";
      break;
    case "typescript":
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
