import { Circle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Typography
      color="minorText"
      fontSize="14px"
      textAlign="center"
      mb="15px"
      lineHeight="unset"
      sx={{
        px: {
          xs: "20px",
          sm: "0",
        },
      }}
    >
      © 2022 Jordy Ferdian{" "}
      <Circle sx={{ fontSize: "4px", position: "relative", bottom: "3px" }} />{" "}
      {t("footer")}
    </Typography>
  );
};

export default Footer;
