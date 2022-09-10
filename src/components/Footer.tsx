import { Circle } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography
      color="#7B7B7B"
      fontSize="14px"
      textAlign="center"
      mb="15px"
      lineHeight="unset"
    >
      © 2022 Jordy Ferdian{" "}
      <Circle sx={{ fontSize: "4px", position: "relative", bottom: "3px" }} />{" "}
      Created with React, Typescript, and Material UI.
    </Typography>
  );
};

export default Footer;
