import { Groups, School, Work } from "@mui/icons-material";
import { Box, Stack, SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import History from "../../models/History";

interface HistoryItemProp {
  history: History;
}

const HistoryItem = ({ history }: HistoryItemProp) => {
  return (
    <Stack
      direction="row"
      border="3px solid #D0D7DE"
      width="85%"
      mt="20px"
      sx={{
        borderRadius: {
          xs: "25px",
          sm: "15px",
        },
      }}
    >
      <Stack direction="column" width="70px" alignItems="center">
        <Pipe />
        <Stack
          bgcolor="#EAEEF2"
          borderRadius="50%"
          my="5px"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: {
              xs: "35px",
              sm: "45px",
            },
            height: {
              xs: "35px",
              sm: "45px",
            },
          }}
        >
          <HistoryIcon category={history.category} />
        </Stack>
        <Pipe />
      </Stack>
      <Stack direction="column" justifyContent="center">
        <Typography
          sx={{
            fontSize: {
              xs: "16px",
              sm: "20px",
            },
          }}
          fontWeight="bold"
          color="#F78166"
        >
          {history.institution}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              sm: "18px",
            },
          }}
          fontWeight="bold"
        >
          {history.role}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              sm: "16px",
            },
          }}
          color="#7B7B7B"
        >
          {history.date}
        </Typography>
      </Stack>
    </Stack>
  );
};

const Pipe = () => {
  return (
    <Box
      bgcolor="#D8DEE4"
      width="4px"
      mt="5px"
      sx={{
        height: {
          xs: "25px",
          sm: "30px",
        },
      }}
    />
  );
};

interface HistoryIconProp {
  category: "Work" | "Education" | "Organization";
}

const HistoryIcon = ({ category }: HistoryIconProp) => {
  const iconSx: SxProps<Theme> = {
    color: "#57606A",
    fontSize: {
      xs: "24px",
      sm: "30px",
    },
  };
  switch (category) {
    case "Work":
      return <Work sx={iconSx} />;
    case "Education":
      return <School sx={iconSx} />;
    case "Organization":
      return <Groups sx={iconSx} />;
    default:
      return <></>;
  }
};

export default HistoryItem;
