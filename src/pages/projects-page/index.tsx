import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  styled,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { ChangeEvent, ReactNode, useState } from "react";
import { projects as projectDatas } from "../../datas/ProjectData";
import ProjectList from "./ProjectList";

const SearchBox = styled(TextField)(() => ({
  "& fieldset": {
    borderRadius: "12px",
    borderColor: "#D0D7DE",
  },
}));

const FilterSelect = styled(Select)(() => ({
  "& svg": {
    color: "#24292F",
  },
  "& fieldset": {
    borderColor: "#D0D7DE",
  },
}));

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
        color="#F78166"
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
        <SearchBox
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
            sx={{ minWidth: "85px", mr: { xs: "5px", sm: "8px" } }}
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
      <InputLabel sx={{ color: "#24292F", fontWeight: "bold" }}>
        {filterType}
      </InputLabel>
      <FilterSelect
        label="Type"
        defaultValue=""
        sx={{
          borderRadius: "12px",
          bgcolor: "#F6F8FA",
          fontWeight: "bold",
          fontFamily: `"Roboto", sans-serif`,
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
      </FilterSelect>
    </FormControl>
  );
};

export default ProjectPage;
