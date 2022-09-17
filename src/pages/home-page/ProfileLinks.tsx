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
      bgcolor="#F78166"
      color="white"
      target="_blank"
      rel="noreferrer"
      href={url}
      underline="none"
      display="inline-flex"
      flexDirection="row"
      alignItems="center"
      fontFamily={`"Roboto", sans-serif`}
      // fontSize="14px"
      p="5px"
      pr="8px"
      mx="12px"
      borderRadius="7px"
    >
      <Icon sx={{ fontSize: "26px", mr: "5px" }} /> {text}
    </Link>
  );
};

export default ProfileLinks;
