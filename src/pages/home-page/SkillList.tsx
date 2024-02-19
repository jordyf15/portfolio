import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hook";
import Skill from "../../models/Skill";
import SkillItem from "./SkillItem";

interface SkillListProp {
  skillList: Array<Skill>;
  skillTitle: string;
}

const SkillList = ({ skillList, skillTitle }: SkillListProp) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

  return (
    <Stack
      width="100%"
      maxWidth="865px"
      sx={{
        mt: {
          xs: "40px",
          sm: "60px",
        },
      }}
      spacing={2.5}
      boxSizing="content-box"
    >
      <Typography
        component="h2"
        color="primary.main"
        textAlign="center"
        fontWeight="bold"
        sx={{
          fontSize: {
            xs: language === "en" ? "22px" : "26px",
            sm: "32px",
          },
        }}
      >
        {t(skillTitle)}
      </Typography>
      <Stack
        flexWrap="wrap"
        direction="row"
        px={{
          xs: 2,
          md: 0,
        }}
      >
        {skillList.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </Stack>
    </Stack>
  );
};

export default SkillList;
