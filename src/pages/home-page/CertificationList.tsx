import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  IconButtonProps,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hook";
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
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

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
        color="primary.main"
        textAlign="center"
        fontWeight="bold"
        sx={{
          fontSize: {
            xs: language === "en" ? "22px" : "26px",
            sm: "32px",
          },
        }}
      >
        {t(certificationTitle)}
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
        <CustomIconBtn onClick={previousCertificate}>
          <KeyboardArrowLeft sx={iconSx} />
        </CustomIconBtn>
        <CertificationItem
          key={certificationList[currentCertificateIndex].id}
          certification={certificationList[currentCertificateIndex]}
        />
        <CustomIconBtn onClick={nextCertificate}>
          <KeyboardArrowRight sx={iconSx} />
        </CustomIconBtn>
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
                    ? "primary.main"
                    : "minorText",
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

const iconSx: SxProps<Theme> = {
  fontSize: { xs: "40px", sm: "60px" },
  color: "primary.main",
};

const CustomIconBtn = (props: IconButtonProps) => {
  return (
    <IconButton
      sx={{
        p: 0,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </IconButton>
  );
};

export default CertificationList;
