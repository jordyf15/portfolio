import { Link, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ProfileLinksProp {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  text: string;
  url: string;
}

const ProfileLinks = ({ Icon, text, url }: ProfileLinksProp) => {
  return (
    <Link
      bgcolor="primary.main"
      color="onPrimary"
      target="_blank"
      rel="noreferrer"
      href={url}
      underline="none"
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      fontFamily={`"Roboto", sans-serif`}
      p="2px"
      pr="5px"
      mx="12px"
      borderRadius="7px"
      sx={{
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "primary.main",
        "&:hover": {
          color: "primary.main",
          bgcolor: "background.default",
        },
      }}
    >
      <Icon sx={{ fontSize: "26px", mr: "5px" }} /> {text}
    </Link>
  );
};

export default ProfileLinks;
