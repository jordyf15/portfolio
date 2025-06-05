import { v4 as uuidv4 } from "uuid";
import History from "../models/History";

export const educationHistory: History[] = [
  {
    id: uuidv4(),
    category: "Education",
    institutionEN: "Bina Nusantara University",
    roleEN: "Computer Science",
    dateEN: "September 2019 - July 2024",
    institutionJP: "ビナヌサンタラ大学",
    roleJP: "コンピュータサイエンス",
    dateJP: "2019年9月 - 2024年7月",
  },
  {
    id: uuidv4(),
    category: "Education",
    institutionEN: "SMA Citra Berkat",
    roleEN: "Natural Science",
    dateEN: "July 2016 - May 2019",
    institutionJP: "シトラベルカト高等学校",
    roleJP: "自然科学",
    dateJP: "2016年7月 - 2019年5月",
  },
];

export const workHistory: History[] = [
  {
    id: uuidv4(),
    category: "Work",
    institutionEN: "Chorus Digital Indonesia",
    roleEN: "Full Stack Developer",
    dateEN: "March 2022 - October 2023",
    pointsEN: [
      "Contributed to the development of an online shop management system that is integrated to multiple marketplaces in Indonesia using Typescript and React for the Front-End web applications, and Go and Gin for the REST APIs. Developed 30% of all features for the system.",
      "Contributed to the development of a music learning application that provides guitar and ukulele chords, and lyrics that move along like karaoke using Go and Gin for the main REST API, and Ruby on Rails for the admin web application. Developed major features such as playlist, report, play history, and popular and favorite songs.",
      "Contributed to the development of a sound-sharing platform for musicians and content creators using Go and Gin for the main REST API, Typescript and React for the main Front-End web application, and Ruby on Rails for the admin web application. Developed major features such as collection and report.",
      "Wrote unit tests for the main REST API of a music learning application, which helped to detect bugs early in the development.",
      "Refactored React components in the main Front-End web application of a sound sharing platform to use Material UI instead of styled components, resulting in better code readability.",
      "Developed tools for generating popularity index for both the music learning application and sound-sharing platform using Go, allowing users to view the current most popular content in the platform.",
      "Developed a tool for analyzing song difficulty for a music learning application using Go, avoiding the admin team from having to manually analyze all old and new songs in the application.",
    ],
    institutionJP: "コーラスデジタルインドネシア",
    roleJP: "フルスタックデベロッパー",
    dateJP: "2022年3月 - 2023年10月",
    pointsJP: [
      "フロントエンドWebアプリケーションにTypescriptとReact、REST APIにGoとGinを使用いたして、インドネシアの複数のマーケットプレイスに統合されたオンラインショップ管理システムの開発に貢献いたしました。システムの全機能の30％を開発いたしました。",
      "メインのREST APIにGoとGin、ランディングページにTypescriptとReact、アドミンWebアプリケーションにRuby on Railsを使用いたして、ギターとウクレレのコードと歌詞カラオケのようにが流れる音楽学習アプリケーションの開発に貢献いたしました。プレイリスト、レポート、プレイの履歴、人気曲や好きな曲などの主な機能を開発いたしました。",
      "メインのREST APIにGoとGin、メインのフロントエンドWebアプリケーションにTypescriptとReact、アドミンWebアプリケーションにRuby on Railsを使用いたして、ミュージシャンとコンテンツクリエイターのためのサウンド共有プラットフォームの開発に貢献いたしました。コレクションとレポートなどの主な機能を開発いたしました。",
      "音楽学習アプリケーションのメインREST APIのユニットテストを書いて、開発の初期段階でバグを検出するのに役立ちました。",
      "サウンド共有プラットフォームのメインのフロントエンドWebアプリケーションのReactコンポーネントをリファクタリングいたしました。Styled ComponentsからMaterial UIを使用しました。コードの可読性を向上させました。",
      "音楽学習アプリケーションとサウンド共有プラットフォームのための人気指数を生成するツールをGoを使用して開発いたしました。ユーザーは今プラットフォームで現在最も人気のあるコンテンツを閲覧することができます。",
      "音楽学習アプリケーションの曲の難易度を分析するツールをGoを使用して開発いたしました。アドミンチームは、アプリケーション内のすべての新旧楽曲を手動で分析する手間を省くことができます。",
    ],
    technologies: [
      "Typescript",
      "React",
      "Golang",
      "Gin",
      "Ruby",
      "Ruby on Rails",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
];

export const organizationHistory: History[] = [
  {
    id: uuidv4(),
    category: "Organization",
    institutionEN: "Google Developer Student Club",
    roleEN: "Core Team Member",
    dateEN: "September 2021 - September 2022",
    pointsEN: [
      "Taught Front-End development using HTML, CSS, Javascript, React and Typescript to club members.",
      "Taught Back-End development using Javascript, Express, and MongoDB to club members.",
    ],
    institutionJP: "グーグルデベロッパーの学生クラブ",
    roleJP: "コアチームメンバー",
    dateJP: "2021年9月 - 2022年9月",
    pointsJP: [
      "部員にHTML、CSS、Javascript、React、Typescriptを使用してフロントエンドの開発を教えました。",
      "部員にJavascript、Express、MongoDBを使用してバックエンドの開発を教えました。",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: uuidv4(),
    category: "Organization",
    institutionEN: "Australia International Corner",
    roleEN: "Volunteer",
    dateEN: "February 2020 - July 2020",
    pointsEN: [
      "Assisted in taking care of the Australia International Corner and its events.",
    ],
    institutionJP: "オーストラリア国際コーナー",
    roleJP: "ボランティア",
    dateJP: "2020年2月 - 2020年7月",
    pointsJP: [
      "オーストラリア・インターナショナル・コーナーとそのイベントの世話を手伝いました。",
    ],
  },
];
