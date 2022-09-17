import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Certification from "../../models/Certification";
import CertificationItem from "./CertificationItem";

interface CertificationListProp {
  certificationList: Array<Certification>;
  certificationTitle: string;
}
const CertificationList = ({
  certificationList,
  certificationTitle,
}: CertificationListProp) => {
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  const previousCertificate = () => {
    if (currentCertificateIndex > 0) {
      setCurrentCertificateIndex(currentCertificateIndex - 1);
    }
  };

  const nextCertificate = () => {
    if (currentCertificateIndex < certificationList.length - 1) {
      setCurrentCertificateIndex(currentCertificateIndex + 1);
    }
  };

  const jumpToCertificate = (number: number) => {
    setCurrentCertificateIndex(number - 1);
  };

  return (
    <Box
      sx={{
        mt: {
          xs: "40px",
          sm: "60px",
        },
      }}
      width="100%"
    >
      <Typography
        component="h2"
        color="#F78166"
        textAlign="center"
        fontWeight="bold"
        sx={{
          fontSize: {
            xs: "22px",
            sm: "32px",
          },
        }}
      >
        {certificationTitle}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        mt="20px"
        mx="auto"
        maxWidth="1000px"
        sx={{
          maxWidth: {
            xs: "500px",
            sm: "1000px",
          },
        }}
        justifyContent="space-between"
      >
        <IconButton
          sx={{
            p: 0,
          }}
          onClick={previousCertificate}
        >
          <KeyboardArrowLeft
            sx={{
              fontSize: {
                xs: "40px",
                sm: "60px",
              },
              color: "#F78166",
            }}
          />
        </IconButton>
        <CertificationItem
          key={certificationList[currentCertificateIndex].id}
          certification={certificationList[currentCertificateIndex]}
        />
        <IconButton
          sx={{
            p: 0,
          }}
          onClick={nextCertificate}
        >
          <KeyboardArrowRight
            sx={{ fontSize: { xs: "40px", sm: "60px" }, color: "#F78166" }}
          />
        </IconButton>
      </Stack>
      <Stack direction="row" justifyContent="center" mt="40px">
        {Array.from(
          new Array(
            certificationList.length > 10 ? 10 : certificationList.length
          ),
          (_, i) => i + 1
        ).map((idx) => {
          var numbering: number;
          if (certificationList.length < 10) {
            numbering = idx;
          } else {
            numbering =
              currentCertificateIndex >= certificationList.length - 5
                ? certificationList.length - (10 - idx)
                : currentCertificateIndex > 5
                ? idx + (currentCertificateIndex - 5)
                : idx;
          }

          return (
            <Button
              key={idx}
              variant="text"
              sx={{
                color:
                  currentCertificateIndex + 1 === numbering
                    ? "#F78166"
                    : "#7B7B7B",
                minWidth: "unset",
                py: 0,
                px: "5px",
                fontWeight: "bold",
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                },
              }}
              onClick={() => jumpToCertificate(numbering)}
            >
              {numbering}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};

export default CertificationList;
