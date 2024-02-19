import { Box, Stack, Typography } from "@mui/material";
import Skill from "../../models/Skill";

interface SkillItemProp {
  skill: Skill;
}

const SkillItem = ({ skill }: SkillItemProp) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      py={1}
      px={1.5}
      mb={1.5}
      ml={0.75}
      mr={0.75}
      sx={{
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "border",
        borderRadius: "15px",
      }}
      boxSizing="content-box"
    >
      <Box
        component="img"
        width={{ xs: "25px", sm: "30px" }}
        height={{ xs: "25px", sm: "30px" }}
        src={skill.iconUrl}
      />
      <Typography fontSize={{ xs: "14px", sm: "16px" }} color="secondary.main">
        {skill.name}
      </Typography>
    </Stack>
  );
};

export default SkillItem;
