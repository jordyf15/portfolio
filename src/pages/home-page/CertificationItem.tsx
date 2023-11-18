import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../hook";
import Certification from "../../models/Certification";

interface CertificationItemProp {
  certification: Certification;
}
const CertificationItem = ({ certification }: CertificationItemProp) => {
  const [showImageViewer, setShowImageViewer] = useState(false);
  const language = useAppSelector((state) => state.language);
  const openImageViewer = () => {
    setShowImageViewer(true);
  };

  const closeImageViewer = () => {
    setShowImageViewer(false);
  };

  return (
    <Stack flex={1} alignItems="center">
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          mt: {
            sm: "15px",
          },
          maxWidth: {
            xs: "300px",
            sm: "700px",
          },
        }}
      >
        {/* TODO Image Viewer */}
        {/* {showImageViewer && (
          <Box
            onClick={closeImageViewer}
            bgcolor="rgba(0, 0, 0, 0.6)"
            position="fixed"
            width="100%"
            height="100%"
            top={0}
            left={0}
          >
            <Box component="img" width="100%" src={certification.imageUrl} />
          </Box>
        )} */}
        <Stack
          sx={{
            minWidth: {
              xs: "unset",
              sm: "300px",
            },
          }}
          alignItems="center"
        >
          <Box
            sx={{
              minHeight: {
                xs: "170px",
                sm: "220px",
              },
            }}
          >
            <Box
              component="img"
              onClick={openImageViewer}
              maxWidth="300px"
              src={certification.imageUrl}
              sx={{
                width: {
                  xs: "100%",
                  sm: "unset",
                },
                height: "210px",
              }}
            />
          </Box>
        </Stack>
        <Box maxWidth="60px" width="25%" />
        <Box
          sx={{
            mt: {
              xs: "15px",
              sm: "unset",
            },
          }}
        >
          <Typography
            color="primary.main"
            component="h3"
            fontWeight="bold"
            lineHeight="unset"
            sx={{
              fontSize: {
                xs: language === "en" ? "16px" : "14px",
                sm: language === "en" ? "22px" : "18px",
              },
              textAlign: {
                xs: "center",
                sm: "left",
              },
              minHeight: {
                xs: "40px",
                sm: "unset",
              },
            }}
          >
            {certification.title}
          </Typography>
          <Typography
            lineHeight="unset"
            mt="15px"
            textAlign="justify"
            sx={{
              fontSize: {
                xs: language === "en" ? "14px" : "12px",
                sm: language === "en" ? "16px" : "14px",
              },
              minHeight: {
                xs: "135px",
                sm: "unset",
              },
            }}
            color="secondary.main"
          >
            {certification.description}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CertificationItem;
