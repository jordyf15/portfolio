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
        textAlign="justify"
        lineHeight="unset"
        mt="20px"
        px={language === "en" ? "15px" : "20px"}
        sx={{
          width: "100%",
          maxWidth: "865px",
          fontSize: {
            xs: language === "en" ? "14px" : "13px",
            sm: language === "en" ? "16px" : "15px",
          },
        }}
        color="secondary.main"
      >
        {language === "en" ? (
          <>
            Aspiring Full Stack Developer with high interest and enthusiasm for
            Front-End development, Back-End development, Cloud Computing, DevOps
            and Open-Source Software. Committed to continuous learning and
            improvement, and always seeking new challenges and opportunities to
            leverage my skills and contribute to innovative and exciting
            projects. Looking for opportunities to start a career in Japan.
          </>
        ) : (
          <>
            フロントエンド開発、バックエンド開発、クラウドコンピューティング、DevOps、オープンソースソフトウェアに高い関心と熱意があるフルスタック開発者でございます。
            継続的な学習と改善に努めて、常に新たな挑戦と機会を求めて自分のスキルを活用し、革新的でエキサイティングなプロジェクトに貢献いたします。
            日本でのキャリアをスタートさせる機会を探しております。
          </>
        )}
      </Typography>
      <SkillList skillList={skills} skillTitle="title.skill" />
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
      <HistoryList
        historyList={
          language === "en" ? educationHistoryEN : educationHistoryJP
        }
        historyTitle="title.educationHistory"
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
