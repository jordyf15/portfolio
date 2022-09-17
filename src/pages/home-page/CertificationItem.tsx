import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Certification from "../../models/Certification";

interface CertificationItemProp {
  certification: Certification;
}
const CertificationItem = ({ certification }: CertificationItemProp) => {
  const [showImageViewer, setShowImageViewer] = useState(false);
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
        {showImageViewer && (
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
        )}
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
              maxHeight="280px"
              src={certification.imageUrl}
              sx={{
                width: {
                  xs: "100%",
                  sm: "unset",
                },
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
            color="#F78166"
            component="h3"
            fontWeight="bold"
            lineHeight="unset"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "22px",
              },
              textAlign: {
                xs: "center",
                sm: "left",
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
                xs: "14px",
                sm: "16px",
              },
            }}
          >
            {certification.description}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CertificationItem;
