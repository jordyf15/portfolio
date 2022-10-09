import { Groups, School, Work } from "@mui/icons-material";
import { Box, BoxProps, Stack, SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import { useAppSelector } from "../../hook";
import History from "../../models/History";

interface HistoryItemProp {
  history: History;
}

const HistoryItem = ({ history }: HistoryItemProp) => {
  const language = useAppSelector((state) => state.language);
  return (
    <Stack
      direction="row"
      width="85%"
      mt="20px"
      sx={{
        borderRadius: {
          xs: "25px",
          sm: "15px",
        },
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "border",
      }}
    >
      <Stack direction="column" width="70px" alignItems="center">
        <Pipe sx={{ mt: "5px" }} />
        <Stack
          bgcolor="historyBackground"
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
        <Pipe sx={{ mb: "5px" }} />
      </Stack>
      <Stack direction="column" justifyContent="center">
        <Typography
          sx={{
            fontSize: {
              xs: language === "en" ? "16px" : "14px",
              sm: language === "en" ? "20px" : "18px",
            },
          }}
          fontWeight="bold"
          color="primary.main"
          pr={language === "jp" ? "15px" : "unset"}
          mb={language === "jp" ? "3px" : "unset"}
        >
          {history.institution}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: language === "en" ? "14px" : "12px",
              sm: language === "en" ? "18px" : "16px",
            },
          }}
          mb={language === "jp" ? "5px" : "unset"}
          fontWeight="bold"
          color="secondary.main"
        >
          {history.role}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: language === "en" ? "12px" : "10px",
              sm: language === "en" ? "16px" : "14px",
            },
          }}
          fontWeight="bold"
          color="minorText"
        >
          {history.date}
        </Typography>
      </Stack>
    </Stack>
  );
};

const Pipe = (props: BoxProps) => {
  return (
    <Box
      bgcolor="historyPillar"
      width="4px"
      sx={{
        height: {
          xs: "25px",
          sm: "30px",
        },
        ...props.sx,
      }}
    />
  );
};

interface HistoryIconProp {
  category: "Work" | "Education" | "Organization";
}

const HistoryIcon = ({ category }: HistoryIconProp) => {
  const iconSx: SxProps<Theme> = {
    color: "historyIcon",
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
