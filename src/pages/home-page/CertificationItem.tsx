import { Box, Stack, Typography } from "@mui/material";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { useAppSelector } from "../../hook";
import Certification from "../../models/Certification";

interface CertificationItemProp {
  certification: Certification;
  sliderContainerWidth: number;
}
const CertificationItem = ({
  certification,
  sliderContainerWidth,
}: CertificationItemProp) => {
  const language = useAppSelector((state) => state.language);

  return (
    <Stack
      width={sliderContainerWidth ? `${sliderContainerWidth}px` : 1}
      alignItems="center"
      mx={{
        xs: 4,
        sm: 2,
      }}
    >
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
            <SimpleReactLightbox>
              <SRLWrapper
                options={{
                  buttons: {
                    showAutoplayButton: false,
                    showDownloadButton: false,
                    showFullscreenButton: false,
                    showNextButton: false,
                    showPrevButton: false,
                    showThumbnailsButton: false,
                  },
                  thumbnails: {
                    showThumbnails: false,
                  },
                }}
              >
                <Box
                  component="img"
                  maxWidth="300px"
                  src={certification.imageUrl}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "unset",
                    },
                    height: "210px",
                    cursor: "pointer",
                  }}
                />
              </SRLWrapper>
            </SimpleReactLightbox>
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
            {language === "en" ? certification.titleEN : certification.titleJP}
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
            {language === "en"
              ? certification.descriptionEN
              : certification.descriptionJP}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CertificationItem;
