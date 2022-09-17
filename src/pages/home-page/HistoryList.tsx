import { Box, Stack, Typography } from "@mui/material";
import History from "../../models/History";
import HistoryItem from "./HistoryItem";

interface HistoryListProp {
  historyList: Array<History>;
  historyTitle: string;
}

const HistoryList = ({ historyList, historyTitle }: HistoryListProp) => {
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
        color="#F78166"
        textAlign="center"
        fontWeight="bold"
        sx={{
          fontSize: {
            xs: "22px",
            sm: "32px",
          },
        }}
      >
        {historyTitle}
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
