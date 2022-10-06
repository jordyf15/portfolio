import { Link, LinkProps } from "@mui/material";

interface ProjectLinkProp extends LinkProps {
  href: string;
  text: string;
}

const ProjectLink = ({ href, text, sx }: ProjectLinkProp) => {
  return (
    <Link
      color="background.default"
      bgcolor="primary.main"
      py="7px"
      px="12px"
      borderRadius="10px"
      sx={{
        textDecoration: "none",
        fontFamily: `"Roboto", sans-serif`,
        ...sx,
        fontSize: {
          xs: "13px",
          md: "15px",
        },
        "&:hover": {
          bgcolor: "background.default",
          color: "primary.main",
        },
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "primary.main",
      }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </Link>
  );
};

export default ProjectLink;
