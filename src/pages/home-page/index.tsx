import { GitHub, LinkedIn } from "@mui/icons-material";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import {
  otherCertificationsEN,
  technicalCertificationsEN,
} from "../../datas/en/certificationData";
import {
  educationHistoryEN,
  organizationHistoryEN,
  workHistoryEN,
} from "../../datas/en/historyData";
import {
  otherCertificationsJP,
  technicalCertificationsJP,
} from "../../datas/jp/certificationData";
import {
  educationHistoryJP,
  organizationHistoryJP,
  workHistoryJP,
} from "../../datas/jp/historyData";
import { skills } from "../../datas/skillData";
import { useAppSelector } from "../../hook";
import CertificationList from "./CertificationList";
import HistoryList from "./HistoryList";
import ProfileLinks from "./ProfileLinks";
import SkillList from "./SkillList";

const HomePage = () => {
  const notMobile = useMediaQuery("(min-width:700px)");
  const language = useAppSelector((state) => state.language);

  return (
    <Stack flex={1} py="35px" alignItems="center">
      <Typography
        component="h1"
        color="primary.main"
        fontWeight="bold"
        textAlign="center"
        sx={{
          fontSize: {
            xs: language === "en" ? "24px" : "14px",
            sm: language === "en" ? "40px" : "34px",
          },
          mt: {
            xs: "unset",
            sm: "24px",
          },
        }}
      >
        {language === "en" ? (
          "Hi there, I'm Jordy Ferdian"
        ) : (
          <>
            初めまして、<br></br>
            私はジョルディフェルディアンと申します。<br></br>
            よろしくお願いします。
          </>
        )}
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
        px={language === "en" ? "15px" : "20px"}
        sx={{
          width: {
            xs: "unset",
            sm: "690px",
          },
          fontSize: {
            xs: language === "en" ? "16px" : "12px",
            sm: language === "en" ? "16px" : "15px",
          },
        }}
        color="secondary.main"
      >
        {language === "en" ? (
          <>
            I am an undergraduate computer science student, and an aspiring Full
            Stack Developer.{notMobile ? <br></br> : null} I have a high
            interest in and am currently learning front-end and back-end web
            development. I also like to create small projects to apply the
            knowledge i have learned.
          </>
        ) : (
          <>
            私はコンピューターサイエンスの大学生と
            {!notMobile ? <br></br> : null}
            意欲的なフルスタックデベロッパーでございます。<br></br>
            フロントエンドとバックエンドのWeb開発{!notMobile ? <br></br> : null}
            に興味があって、勉強しております。<br></br>
            そして、勉強した知識を適用するために{!notMobile ? <br></br> : null}
            小さいプロジェクトを作成いたします。
          </>
        )}
      </Typography>
      <SkillList skillList={skills} skillTitle="title.skill" />
      <HistoryList
        historyList={
          language === "en" ? educationHistoryEN : educationHistoryJP
        }
        historyTitle="title.educationHistory"
      />
      <HistoryList
        historyList={language === "en" ? workHistoryEN : workHistoryJP}
        historyTitle="title.workExperience"
      />
      <HistoryList
        historyList={
          language === "en" ? organizationHistoryEN : organizationHistoryJP
        }
        historyTitle="title.organizationExperience"
      />
      <CertificationList
        certificationTitle="title.technicalCertification"
        certificationList={
          language === "en"
            ? technicalCertificationsEN
            : technicalCertificationsJP
        }
      />
      <CertificationList
        certificationTitle="title.otherCertification"
        certificationList={
          language === "en" ? otherCertificationsEN : otherCertificationsJP
        }
      />
    </Stack>
  );
};

export default HomePage;
