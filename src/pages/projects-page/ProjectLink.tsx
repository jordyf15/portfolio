import { Link, LinkProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hook";

interface ProjectLinkProp extends LinkProps {
  href: string;
  text: string;
}

const ProjectLink = ({ href, text, sx }: ProjectLinkProp) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

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
          xs: language === "en" ? "13px" : "11px",
          md: language === "en" ? "15px" : "13px",
        },
        "&:hover": {
          bgcolor: "background.default",
          color: "primary.main",
        },
        fontWeight: "bold",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "primary.main",
      }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {t(text)}
    </Link>
  );
};

export default ProjectLink;
