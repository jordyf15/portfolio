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
import { createRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useAppSelector } from "../../hook";
import Certification from "../../models/Certification";
import CertificationItem from "./CertificationItem";

interface CertificationListProp {
  certificationList: Array<Certification>;
  certificationTitle: string;
}
const CertificationListCarousel = ({
  certificationList,
  certificationTitle,
}: CertificationListProp) => {
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(0);
  const customSlider = createRef<Slider>();
  const sliderContainer = createRef<HTMLDivElement>();
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.language);

  useEffect(() => {
    setSliderContainerWidth(
      sliderContainer?.current?.clientWidth
        ? sliderContainer.current.clientWidth
        : 0
    );
  }, [sliderContainer]);

  const previousCertificate = () => {
    if (customSlider.current) {
      customSlider.current.slickPrev();
    }
  };

  const nextCertificate = () => {
    if (customSlider.current) {
      customSlider.current.slickNext();
    }
  };

  const onBeforeChange = (currIdx: number, nextIdx: number) => {
    if (Math.abs(nextIdx - currIdx) > 1) {
      // with paging
      setCurrentCertificateIndex(nextIdx);
    } else if (Math.abs(nextIdx - currIdx) === 0) {
      return;
    } else if (
      // with next and prev button
      (nextIdx > currIdx &&
        !(currIdx === 0 && nextIdx === certificationList.length - 1)) ||
      (currIdx === certificationList.length - 1 && nextIdx === 0)
    ) {
      if (currentCertificateIndex === certificationList.length - 1) {
        setCurrentCertificateIndex(0);
      } else {
        setCurrentCertificateIndex(currentCertificateIndex + 1);
      }
    } else {
      if (currentCertificateIndex === 0) {
        setCurrentCertificateIndex(certificationList.length - 1);
      } else {
        setCurrentCertificateIndex(currentCertificateIndex - 1);
      }
    }
  };

  const jumpToCertificate = (number: number) => {
    if (customSlider.current) {
      customSlider.current.slickGoTo(number - 1);
    }
  };

  return (
    <Stack
      sx={{
        mt: {
          xs: "40px",
          sm: "60px",
        },
      }}
      // alignItems="center"
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
        width={1}
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
        <Box
          flex={1}
          sx={{
            overflowX: "hidden",
          }}
          ref={sliderContainer}
        >
          <Box
            component={Slider}
            sx={{
              "& .slick-track": {
                display: "inline-flex",
              },
            }}
            slidesToShow={1}
            slidesToScroll={1}
            rows={1}
            variableWidth
            centerMode
            swipeToSlide
            swipe
            speed={300}
            beforeChange={onBeforeChange}
            ref={customSlider}
            arrows={false}
          >
            {certificationList.map((certification) => (
              <CertificationItem
                key={certification.id}
                certification={certification}
                sliderContainerWidth={sliderContainerWidth}
              />
            ))}
          </Box>
        </Box>
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
    </Stack>
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

export default CertificationListCarousel;
