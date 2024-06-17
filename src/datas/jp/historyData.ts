import History from "../../models/History";

export const educationHistoryJP: History[] = [
  {
    id: "history-education-1",
    institution: "ビナヌサンタラ大学",
    category: "Education",
    role: "コンピュータサイエンス",
    date: "2019年9月 - 現在",
  },
  {
    id: "history-education-2",
    institution: "シトラベルカト高等学校",
    category: "Education",
    role: "自然科学",
    date: "2016年7月 - 2019年5月",
  },
];

export const workHistoryJP: History[] = [
  {
    id: "history-work-1",
    institution: "コーラスデジタルインドネシア",
    category: "Work",
    role: "フルスタックデベロッパー",
    date: "2022年3月 - 2023年10月",
    points: [
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

export const organizationHistoryJP: History[] = [
  {
    id: "history-organization-1",
    institution: "グーグルデベロッパーの学生クラブ",
    category: "Organization",
    role: "コアチームメンバー",
    date: "2021年9月 - 2022年9月",
    points: [
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
    id: "history-organization-2",
    institution: "オーストラリア国際コーナー",
    category: "Organization",
    role: "ボランティア",
    date: "2020年2月 - 2020年7月",
    points: [
      "オーストラリア・インターナショナル・コーナーとそのイベントの世話を手伝いました。",
    ],
  },
];
