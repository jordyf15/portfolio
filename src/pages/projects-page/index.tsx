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
import { ChangeEvent, ReactNode, useState } from "react";
import { projects as projectDatas } from "../../datas/ProjectData";
import ProjectList from "./ProjectList";

const ProjectPage = () => {
  const [currentProjectList, setCurrentProjectList] = useState(projectDatas);
  const [currentNameFilter, setCurrentNameFilter] = useState("");
  const [currentTypeFilter, setCurrentTypeFilter] = useState("All");
  const [currentLanguageFilter, setCurrentLanguageFilter] = useState("All");

  const onFilterName = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentNameFilter(target.value);
    const filteredByType =
      currentTypeFilter === "All"
        ? projectDatas
        : projectDatas.filter((project) => project.type === currentTypeFilter);

    const filteredByLanguage =
      currentLanguageFilter === "All"
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
    const filteredByLanguage =
      currentLanguageFilter === "All"
        ? projectDatas
        : projectDatas.filter(
            (project) => project.language === currentLanguageFilter
          );

    const filteredByName = filteredByLanguage.filter((project) =>
      project.title.toLowerCase().includes(currentNameFilter.toLowerCase())
    );

    const filteredByType =
      target.value === "All"
        ? filteredByName
        : filteredByName.filter((project) => project.type === target.value);

    setCurrentProjectList(filteredByType);
  };

  const onFilterLanguage = (
    { target }: SelectChangeEvent<unknown>,
    _: ReactNode
  ) => {
    setCurrentLanguageFilter(target.value as string);
    const filteredByType =
      currentTypeFilter === "All"
        ? projectDatas
        : projectDatas.filter((project) => project.type === currentTypeFilter);

    const filteredByName = filteredByType.filter((project) =>
      project.title.toLowerCase().includes(currentNameFilter.toLowerCase())
    );

    const filteredByLanguage =
      target.value === "All"
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
            sm: "40px",
          },
          mt: {
            xs: "unset",
            sm: "24px",
          },
        }}
      >
        Projects
      </Typography>
      <Typography
        textAlign="center"
        lineHeight="unset"
        sx={{
          mt: { xs: "10px", sm: "15px" },
        }}
        color="secondary.main"
      >
        A collection of projects i have made
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
          placeholder="Find a project..."
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
          }}
          autoComplete="off"
          inputProps={{
            sx: {
              color: "secondary.main",
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
              "All",
              "Front-end",
              "Back-end",
              "Android",
              "Full Stack",
              "Other",
            ]}
            filterType="Type"
            sx={{
              minWidth: currentTypeFilter === "All" ? "85px" : "125px",
              mr: { xs: "5px", sm: "8px" },
            }}
            onFilter={onFilterType}
          />
          <ProjectFilterSelect
            options={["All", "Kotlin", "Javascript", "Ruby", "Go"]}
            filterType="Language"
            sx={{ minWidth: "125px" }}
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
  return (
    <FormControl
      fullWidth
      sx={{
        ...sx,
        flex: 0,
      }}
      size="small"
    >
      <InputLabel sx={{ color: "secondary.main", fontWeight: "bold" }}>
        {filterType}
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
          color: "secondary.main",
        }}
        MenuProps={{
          PaperProps: {
            sx: { bgcolor: "selectPaperBackground", color: "secondary.main" },
          },
        }}
        onChange={onFilter}
      >
        {options.map((option) => (
          <MenuItem
            value={option}
            key={option}
            sx={{ fontWeight: "bold", fontFamily: `"Roboto", sans-serif` }}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProjectPage;
