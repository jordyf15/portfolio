import { GitHub, LinkedIn } from "@mui/icons-material";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import {
  OtherCertifications,
  TechnicalCertifications,
} from "../../datas/CertificationData";
import {
  EducationHistory,
  OrganizationHistory,
  WorkHistory,
} from "../../datas/HistoryData";
import CertificationList from "./CertificationList";
import HistoryList from "./HistoryList";
import ProfileLinks from "./ProfileLinks";

const HomePage = () => {
  const notMobile = useMediaQuery("(min-width:700px)");

  return (
    <Stack flex={1} py="35px" alignItems="center">
      <Typography
        component="h1"
        color="primary.main"
        fontWeight="bold"
        textAlign="center"
        sx={{
          fontSize: {
            xs: "24px",
            sm: "40px",
          },
          mt: {
            xs: "unset",
            sm: "24px",
          },
        }}
      >
        Hi there, I'm Jordy Ferdian
      </Typography>
      <Stack direction="row" justifyContent="center" mt="15px">
        <ProfileLinks
          Icon={GitHub}
          text="jordyf15"
          url="https://github.com/jordyf15"
        />
        <ProfileLinks
          Icon={LinkedIn}
          text="jordyferdian"
          url="https://www.linkedin.com/in/jordy-ferdian-3606041a7/"
        />
      </Stack>
      <Typography
        textAlign="center"
        lineHeight="unset"
        mt="20px"
        px="15px"
        sx={{
          width: {
            xs: "unset",
            sm: "690px",
          },
        }}
        color="secondary.main"
      >
        I am an undergraduate computer science student, and an aspiring Full
        Stack Developer.{notMobile ? <br></br> : null} I have a high interest in
        and am currently learning front-end and back-end web development. I also
        like to create small projects to apply the knowledge i have learned.
      </Typography>
      <HistoryList historyList={EducationHistory} historyTitle="Education" />
      <HistoryList historyList={WorkHistory} historyTitle="Work Experience" />
      <HistoryList
        historyList={OrganizationHistory}
        historyTitle="Organization Experience"
      />
      <CertificationList
        certificationTitle="Technical Certification"
        certificationList={TechnicalCertifications}
      />
      <CertificationList
        certificationTitle="Other Certification"
        certificationList={OtherCertifications}
      />
    </Stack>
  );
};

export default HomePage;
