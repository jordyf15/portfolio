import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import projectsEN from "../../datas/en/projectData";
import projectsJP from "../../datas/jp/projectData";
import { useAppSelector } from "../../hook";
import Project from "../../models/Project";
import ProjectList from "./ProjectList";

const ProjectPage = () => {
  const language = useAppSelector((state) => state.language);
  const [currentProjectList, setCurrentProjectList] = useState(
    language === "en" ? projectsEN : projectsJP
  );
  const [currentNameFilter, setCurrentNameFilter] = useState("");
  const [currentTypeFilter, setCurrentTypeFilter] = useState("all");
  const [currentLanguageFilter, setCurrentLanguageFilter] = useState("all");
  const { t } = useTranslation();

  // to adjust the project data based on the current chosen language
  useEffect(() => {
    const currentProjectMap = new Map<string, Project>();
    currentProjectList.forEach((project) => {
      currentProjectMap.set(project.id, project);
    });

    const newProjectDatas = language === "en" ? projectsEN : projectsJP;
    newProjectDatas.forEach((project) => {
      if (currentProjectMap.has(project.id)) {
        currentProjectMap.set(project.id, project);
      }
    });

    const newProjectList: Array<Project> = [];
    currentProjectMap.forEach((project, _) => {
      newProjectList.push(project);
    });

    setCurrentProjectList(newProjectList);

    // this function should only run when the language changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const onFilterName = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentNameFilter(target.value);
    const projectDatas = language === "en" ? projectsEN : projectsJP;
    const filteredByType =
      currentTypeFilter === "all"
        ? projectDatas
        : projectDatas.filter((project) => project.type === currentTypeFilter);

    const filteredByLanguage =
      currentLanguageFilter === "all"
        ? filteredByType
        : filteredByType.filter(
            (project) => project.language === currentLanguageFilter
          );

    const filteredByName = filteredByLanguage.filter((project) =>
      project.title.toLowerCase().includes(target.value.toLowerCase())
    );

    setCurrentProjectList(filteredByName);
  };

  const onFilterType = (
    { target }: SelectChangeEvent<unknown>,
    _: ReactNode
  ) => {
    setCurrentTypeFilter(target.value as string);

    const projectDatas = language === "en" ? projectsEN : projectsJP;

    const filteredByLanguage =
      currentLanguageFilter === "all"
        ? projectDatas
        : projectDatas.filter(
            (project) => project.language === currentLanguageFilter
          );

    const filteredByName = filteredByLanguage.filter((project) =>
      project.title.toLowerCase().includes(currentNameFilter.toLowerCase())
    );

    const filteredByType =
      target.value === "all"
        ? filteredByName
        : filteredByName.filter((project) => project.type === target.value);

    setCurrentProjectList(filteredByType);
  };

  const onFilterLanguage = (
    { target }: SelectChangeEvent<unknown>,
    _: ReactNode
  ) => {
    setCurrentLanguageFilter(target.value as string);

    const projectDatas = language === "en" ? projectsEN : projectsJP;

    const filteredByType =
      currentTypeFilter === "all"
        ? projectDatas
        : projectDatas.filter((project) => project.type === currentTypeFilter);

    const filteredByName = filteredByType.filter((project) =>
      project.title.toLowerCase().includes(currentNameFilter.toLowerCase())
    );

    const filteredByLanguage =
      target.value === "all"
        ? filteredByName
        : filteredByName.filter((project) => project.language === target.value);

    setCurrentProjectList(filteredByLanguage);
  };

  return (
    <Stack flex={1} py="35px" alignItems="center">
      <Typography
        component="h1"
        color="primary.main"
        fontWeight="bold"
        textAlign="center"
        sx={{
          fontSize: {
            xs: "24px",
            sm: language === "en" ? "40px" : "34px",
          },
          mt: {
            xs: "unset",
            sm: "24px",
          },
        }}
      >
        {t("title.project")}
      </Typography>
      <Typography
        textAlign="center"
        lineHeight="unset"
        sx={{
          mt: { xs: "10px", sm: "15px" },
          fontSize: {
            xs: language === "jp" ? "12px" : "1rem",
            sm: "16px",
          },
        }}
        color="secondary.main"
      >
        {t("subTitle.project")}
      </Typography>
      <Stack
        width="100%"
        alignItems="center"
        maxWidth="900px"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          mt: {
            xs: "15px",
            sm: "20px",
          },
          px: {
            xs: "unset",
            sm: "30px",
          },
        }}
      >
        <TextField
          variant="outlined"
          placeholder={
            language === "en" ? "Find a project..." : "プロジェクトを探します"
          }
          size="small"
          sx={{
            width: "90%",
            py: "5px",
            maxWidth: {
              xs: "350px",
              sm: "unset",
            },
            flexGrow: 1,
            mr: {
              xs: "unset",
              sm: "40px",
            },
            "& fieldset": {
              borderRadius: "12px",
              borderColor: "border",
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
          autoComplete="off"
          inputProps={{
            sx: {
              color: "secondary.main",
              fontSize: language === "en" ? "16px" : "14px",
            },
          }}
          onChange={onFilterName}
        />
        <Stack
          direction="row"
          justifyContent="flex-start"
          maxWidth="350px"
          sx={{
            width: { xs: "90%", sm: "unset" },
            mt: { xs: "5px", sm: "unset" },
          }}
        >
          <ProjectFilterSelect
            options={[
              "all",
              "frontend",
              "backend",
              "android",
              "fullstack",
              "other",
            ]}
            filterType="Type"
            sx={{
              minWidth:
                language === "en"
                  ? currentTypeFilter === "all"
                    ? "85px"
                    : "125px"
                  : currentTypeFilter === "all"
                  ? "90px"
                  : "140px",
              mr: { xs: "5px", sm: "8px" },
            }}
            onFilter={onFilterType}
          />
          <ProjectFilterSelect
            options={["all", "kotlin", "javascript", "ruby", "go"]}
            filterType="Language"
            sx={{
              minWidth:
                language === "en"
                  ? "125px"
                  : currentLanguageFilter === "all"
                  ? "78px"
                  : "140px",
            }}
            onFilter={onFilterLanguage}
          />
          <Box flex={1} />
        </Stack>
      </Stack>
      <ProjectList projects={currentProjectList} />
    </Stack>
  );
};

interface ProjectFilterSelectProps {
  options: Array<string>;
  filterType: "Type" | "Language";
  sx?: SxProps<Theme>;
  onFilter: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
}

const ProjectFilterSelect = ({
  options,
  filterType,
  sx,
  onFilter,
}: ProjectFilterSelectProps) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

  return (
    <FormControl
      fullWidth
      sx={{
        ...sx,
        flex: 0,
      }}
      size="small"
    >
      <InputLabel
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
          fontSize: language === "en" ? "16px" : "14px",
        }}
      >
        {t(filterType === "Language" ? "filter.language" : "filter.type")}
      </InputLabel>
      <Select
        label="Type"
        defaultValue=""
        sx={{
          borderRadius: "12px",
          bgcolor: "selectBackground",
          fontWeight: "bold",
          fontFamily: `"Roboto", sans-serif`,
          "& svg": {
            color: "secondary.main",
          },
          "& fieldset": {
            borderColor: "border",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "primary.main",
            },
          },
          color: "secondary.main",
          fontSize: language === "en" ? "16px" : "14px",
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "selectPaperBackground",
              color: "secondary.main",
            },
          },
        }}
        onChange={onFilter}
      >
        {options.map((option) => (
          <MenuItem
            value={option}
            key={option}
            sx={{
              fontWeight: "bold",
              fontFamily: `"Roboto", sans-serif`,
              fontSize: language === "en" ? "16px" : "14px",
            }}
          >
            {t(option)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProjectPage;
