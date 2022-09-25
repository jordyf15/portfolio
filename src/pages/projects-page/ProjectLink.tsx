import { Link, LinkProps } from "@mui/material";

interface ProjectLinkProp extends LinkProps {
  href: string;
  text: string;
}

const ProjectLink = ({ href, text, sx }: ProjectLinkProp) => {
  return (
    <Link
      color="#FFFFFF"
      bgcolor="#F78166"
      py="7px"
      px="12px"
      borderRadius="10px"
      border="3px solid #F78166"
      sx={{
        textDecoration: "none",
        fontFamily: `"Roboto", sans-serif`,
        ...sx,
        fontSize: {
          xs: "13px",
          md: "15px",
        },
        "&:hover": {
          bgcolor: "#FFFFFF",
          color: "#F78166",
        },
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
