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
    date: "2022年3月 - 現在",
    points: [
      "インドネシアの複数のマーケットプレイスに統合されたAutobosというオンラインショップ管理システムのレストフルAPIとフロントエンドウェブアプリケーションの開発を手伝い、より効率的な注文処理プロセスを提供することで、運用コストを削減し、時間効率を向上させた。",
      "ミュージシャンやコンテンツクリエイターがロイヤリティフリーで良質なサウンドを入手できるサウンド共有プラットフォーム「Sampled」のレストフルAPI、フロントエンドWebアプリケーション、サーバーサイドアプリケーション、ツールの開発を手伝いました。",
      "前より早くて楽しく曲を学ぶのためにカラオケのように流れるギターとウクレレのコードと歌詞を提供する音楽学習アプリケーション「Chord Genius」のレストフルAPI、サーバーサイドアプリケーション、ツールの開発を手伝いました。",
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
      "フロントエンドのファシリテーターとして、クラブのメンバーにフロントエンド開発のための HTML、CSS、JavaScript、ReactJS、Typescript を教えました。",
      "バックエンドのファシリテーターとして、クラブのメンバーにバックエンド開発のための Javascript、Express、MongoDB を教えました。",
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
