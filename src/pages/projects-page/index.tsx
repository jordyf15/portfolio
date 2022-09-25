import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { useState } from "react";
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
          />
          <ProjectFilterSelect
            options={["All", "Kotlin", "Javascript", "Ruby", "Go"]}
            filterType="Language"
            sx={{ minWidth: "125px" }}
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
}

const ProjectFilterSelect = ({
  options,
  filterType,
  sx,
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
      <Stack></Stack>
    </FormControl>
  );
};

export default ProjectPage;
