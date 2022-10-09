import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hook";
import History from "../../models/History";
import HistoryItem from "./HistoryItem";

interface HistoryListProp {
  historyList: Array<History>;
  historyTitle: string;
}

const HistoryList = ({ historyList, historyTitle }: HistoryListProp) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);
  return (
    <Box
      width="100%"
      maxWidth="850px"
      sx={{
        mt: {
          xs: "40px",
          sm: "60px",
        },
      }}
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
        {t(historyTitle)}
      </Typography>
      <Stack direction="column" alignItems="center">
        {historyList.map((history) => (
          <HistoryItem key={history.id} history={history} />
        ))}
      </Stack>
    </Box>
  );
};

export default HistoryList;
