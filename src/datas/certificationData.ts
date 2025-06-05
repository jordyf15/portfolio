import { v4 as uuidv4 } from "uuid";
import australiaInternationalCorner from "../assets/certificates/australia-international-corner.jpg";
import codeToJapanAlgorithmChallenge from "../assets/certificates/code-to-japan-algorithm-challenge.jpg";
import dicodingAndroidBeginner from "../assets/certificates/dicoding-android-beginner.jpg";
import dicodingAndroidFundamental from "../assets/certificates/dicoding-android-fundamental.jpg";
import dicodingAndroidIntermediate from "../assets/certificates/dicoding-android-intermediate.jpg";
import dicodingAwsArchitecture from "../assets/certificates/dicoding-aws-architecture.jpg";
import dicodingBackendBeginner from "../assets/certificates/dicoding-backend-beginner.jpg";
import dicodingBackendFundamental from "../assets/certificates/dicoding-backend-fundamental.jpg";
import dicodingCloudPractitionerEssential from "../assets/certificates/dicoding-cloud-practitioner-essential.jpg";
import dicodingDevopsBasic from "../assets/certificates/dicoding-devops-basic.jpg";
import dicodingFrontendExpert from "../assets/certificates/dicoding-frontend-expert.jpg";
import dicodingFrontendFundamental from "../assets/certificates/dicoding-frontend-fundamental.jpg";
import dicodingJava from "../assets/certificates/dicoding-java.jpg";
import dicodingJavascriptBasic from "../assets/certificates/dicoding-javascript-basic.jpg";
import dicodingKotlin from "../assets/certificates/dicoding-kotlin.jpg";
import dicodingSolid from "../assets/certificates/dicoding-solid.jpg";
import digitalentAndroidIntermediate from "../assets/certificates/digitalent-android-intermediate.jpg";
import fccBackendDevelopmentAndApi from "../assets/certificates/freecodecamp-back-end-development-and-apis.jpg";
import fccDataVisualization from "../assets/certificates/freecodecamp-data-visualization.jpg";
import fccFrontendDevelopmentLibraries from "../assets/certificates/freecodecamp-front-end-development-libraries.jpg";
import fccJavascriptAlgorithmsAndDataStructures from "../assets/certificates/freecodecamp-javascript-algorithms-and-data-structures.jpg";
import fccLegacyFullStack from "../assets/certificates/freecodecamp-legacy-full-stack.jpg";
import fccQualityAssurance from "../assets/certificates/freecodecamp-quality-assurance.jpg";
import fccResponsiveWebDesign from "../assets/certificates/freecodecamp-responsive-web-design.jpg";
import gdscCoreTeam from "../assets/certificates/gdsc-core-team.jpg";
import iycl2021 from "../assets/certificates/iycl-2021.jpg";
import jlptN3 from "../assets/certificates/jlpt-n3.jpeg";
import jlptN4 from "../assets/certificates/jlpt-n4.jpeg";
import jlptN5 from "../assets/certificates/jlpt-n5.jpeg";
import progateJavascriptStudy7 from "../assets/certificates/progate-javascript-study7.jpg";
import sgwjTerm2 from "../assets/certificates/sgwj-term2.jpg";
import sgwjTerm3 from "../assets/certificates/sgwj-term3.jpg";
import sgwjTerm4 from "../assets/certificates/sgwj-term4.jpg";
import sgwjTerm5 from "../assets/certificates/sgwj-term5.jpg";
import Certification from "../models/Certification";

export const technicalCertifications: Array<Certification> = [
  {
    id: uuidv4(),
    titleEN: "Digitalent Android Intermediate Course",
    descriptionEN:
      "A course provided by the Ministry of Communication and Information Technology of Indonesia that covers Intermediate level topics in Android Development such as Custom View, Animation, localization, Media, Location, Testing, and Advanced Database.",
    titleJP: "ディジタラントのアンドロイド中級コース",
    descriptionJP:
      "インドネシアの通信情報技術省による、アンドロイド開発に関する中級レベルのトピックを扱うコースです。例えば、カスタムビューやアニメーションやローカライズやメディアやロケーションやテスティングやアドバンストデータベースなどです。",
    imageUrl: digitalentAndroidIntermediate,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Android Intermediate Course",
    descriptionEN:
      "A course that covers Intermediate level topics in Android Development such as Custom View, Animation, localization, Media, Location, Testing, and Advanced Database.",
    titleJP: "ディコーディングのアンドロイド中級コース",
    descriptionJP:
      "アンドロイド開発の中級レベルのトピックをカバーするコースです。例えば、カスタムビューやアニメーションやローカライズやメディアやロケーションやテスティングやアドバンストデータベースなどです。",
    imageUrl: dicodingAndroidIntermediate,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Devops Basic Course",
    descriptionEN:
      "A course that covers Basic level topics in Devops such as culture, practices, and tools used in Devops.",
    titleJP: "ディコーディングのデブオプスベーシックコース",
    descriptionJP:
      "デブオプスのベーシックレベルのトピックをカバーするコースです。例えば、デブオプスで使用される文化、プラクティス、およびツールです。",
    imageUrl: dicodingDevopsBasic,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Frontend Expert Course",
    descriptionEN:
      "A course that covers Expert level topics in Frontend Development such as Mobile First Approach, Accessibility, Clean Code, PWA, Automation Testing, and Web Performance.",
    titleJP: "ディコーディングのフロントエンドエキスパートコース",
    descriptionJP:
      "フロントエンド開発のエキスパートレベルのトピックをカバーするコースです。例えば、モバイルファーストアプローチやアクセシビリティやクリーンコードやPWAや自動テストやWebパフォーマンスなど。",
    imageUrl: dicodingFrontendExpert,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Frontend Fundamental Course",
    descriptionEN:
      "A course that covers Fundamental level topics in Frontend Development such as ES6, Web Components, NPM, Webpack, and Asynchronous JavaScript Request.",
    titleJP: "ディコーディングのフロントエンドファンダメンタルコース",
    descriptionJP:
      "フロントエンド開発のファンダメンタルレベルのトピックをカバーするコースです。例えば、ES6やWebコンポーネントやNPMやウェブパックや非同期ジャバスクリプトリクエストなど。",
    imageUrl: dicodingFrontendFundamental,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Backend Fundamental Course",
    descriptionEN:
      "A course that covers Fundamental level topics in Backend Development such as Hapi plugins, Data Validation, Authentication, Authorization, Database Normalization, Caching, and Message Broker.",
    titleJP: "ディコーディングのバックエンドファンダメンタルコース",
    descriptionJP:
      "バックエンド開発のファンダメンタルレベルのトピックをカバーするコースです。例えば、Hapiプラグインやデータバリデーションや認証や認可やデータベース正規化やキャッシュやメッセージブローカーなど。",
    imageUrl: dicodingBackendFundamental,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Backend Beginner Course",
    descriptionEN:
      "A course that covers Beginner level topics in Backend Development such as Introduction to Backend, NodeJS basic, Building Restful APIs with Hapi framework, and Postman.",
    titleJP: "ディコーディングのバックエンドビギナーコース",
    descriptionJP:
      "バックエンド開発のビギナーレベルのトピックをカバーするコースです。例えば、バックエンド入門やNodeJS基礎やHapiフレームワークによるRestful API開発やポストマンなど。",
    imageUrl: dicodingBackendBeginner,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Android Fundamental Course",
    descriptionEN:
      "A course that covers Fundamental level topics in Android Development such as Layout, Navigation, Background Process, Networking, and Android Architecture",
    titleJP: "ディコーディングのアンドロイドファンダメンタルコース",
    descriptionJP:
      "アンドロイド開発のファンダメンタルレベルのトピックをカバーするコースです。例えば、レイアウトやナビゲーションやバックグラウンド処理やネットワークやアンドロイドアーキテクチャなど。",
    imageUrl: dicodingAndroidFundamental,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Android Beginner Course",
    descriptionEN:
      "A course that covers Beginner level topics in Android Development such as Activity, Intent, Views, Styles, and Recycler View.",
    titleJP: "ディコーディングのアンドロイドビギナーコース",
    descriptionJP:
      "アンドロイド開発のビギナーレベルのトピックをカバーするコースです。例えば、アクティビティやインテントやビューやスタイルやリサイクラー ビューなど。",
    imageUrl: dicodingAndroidBeginner,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Java Course",
    descriptionEN:
      "A course that covers the basics of Java such as Data Types, Control Flow, Collection, OOP, and Common Classes.",
    titleJP: "ディコーディングのジャバコース",
    descriptionJP:
      "ジャバの基本をカバーするコースです。例えば、データタイプやコントロールフローやコレクションやOOPやコモンクラスなど。",
    imageUrl: dicodingJava,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Javascript Course",
    descriptionEN:
      "A course that covers the basics of Javascript such as Variables, Data Types, Functions, OOP, Functional Programming, Modules, Error Handling, and Concurrency.",
    titleJP: "ディコーディングのジャバスクリプトコース",
    descriptionJP:
      "ジャバスクリプトの基本をカバーするコースです。例えば、変数やデータタイプや関数やOOPやFPやモジュールやエラー処理やコンカレンシーなど。",
    imageUrl: dicodingJavascriptBasic,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Kotlin Course",
    descriptionEN:
      "A course that covers the basics of Kotlin such as Data Types, Control Flow, Data Classes, Collections, Functional Programming, OOP, Generics, and Coroutines.",
    titleJP: "ディコーディングのコトリンコース",
    descriptionJP:
      "コトリンの基本をカバーするコースです。例えば、データタイプやコントロールフローやデータクラスやコレクションやFPやOOPやジェネリックスやコルーチンなど。",
    imageUrl: dicodingKotlin,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding SOLID Principle Course",
    descriptionEN:
      "A course that covers about the SOLID Principle which consist of Single Responsibility, Open Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion",
    titleJP: "ディコーディングのSOLIDプリンシプルコース",
    descriptionJP: "SOLIDプリンシプルをカバーするコースです。",
    imageUrl: dicodingSolid,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding AWS Architecture Course",
    descriptionEN:
      "A course that covers about building a cloud architecture in AWS.",
    titleJP: "ディコーディングのAWSアーキテクチャコース",
    descriptionJP:
      "AWSでのクラウドアーキテクチャの構築についてカバーするコースです。",
    imageUrl: dicodingAwsArchitecture,
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding AWS Cloud Practitioner Essential Course",
    descriptionEN:
      "A course that covers about the services that AWS cloud provides.",
    titleJP:
      "ディコーディングのAWSクラウドプラクティショナーエッセンシャルコース",
    descriptionJP:
      "AWSクラウドが提供するサービスについてカバーするコースです。",
    imageUrl: dicodingCloudPractitionerEssential,
  },
  {
    id: uuidv4(),
    titleEN: "FreeCodeCamp Back End Development and APIs Course",
    descriptionEN:
      "A course that covers how to write back end applications with NodeJS and the Express Framework.",
    titleJP: "フリーコードキャンプのバックエンド開発とAPIコース",
    descriptionJP:
      "NodeJSとエクスプレスフレームワークを使ったバックエンドアプリケーションの書き方をカバーするコースです。",
    imageUrl: fccBackendDevelopmentAndApi,
  },
  {
    id: uuidv4(),
    titleEN: "FreeCodeCamp Front End Development Libraries",
    descriptionEN:
      "A course that covers about the most popular front end libraries in the industries such as React, Redux, Bootstrap and SASS.",
    titleJP: "フリーコードキャンプのフロントエンド開発ライブラリコース",
    descriptionJP:
      "業界で最も人気のあるフロントエンドライブラリをカバーするコースです。例えば、リアクトやリダックスやブートストラップやSASSなど。",
    imageUrl: fccFrontendDevelopmentLibraries,
  },
  {
    id: uuidv4(),
    titleEN: "FreeCodeCamp Data Visualization",
    descriptionEN:
      "A course that covers how to visualize different types of data with the D3.js library.",
    titleJP: "フリーコードキャンプのデータビジュアライゼーションコース",
    descriptionJP:
      "D3.jsライブラリを使って、さまざまなデータをビジュアル化する方法をカバーするコースです。",
    imageUrl: fccDataVisualization,
  },
  {
    id: uuidv4(),
    titleEN: "FreeCodeCamp Javascript Algorithms and Data Structures",
    descriptionEN:
      "A course that covers the fundamental of javascript, algorithm and data structures.",
    titleJP:
      "フリーコードキャンプのジャバスクリプトとアルゴリズムとデータストラクチャーコース",
    descriptionJP:
      "ジャバスクリプトの基礎とアルゴリズムとデータストラクチャーをカバーするコースです。",
    imageUrl: fccJavascriptAlgorithmsAndDataStructures,
  },
  {
    id: uuidv4(),
    titleEN: "FreeCodeCamp Legacy Full Stack",
    descriptionEN:
      "A certificate awarded for completing all the courses in the Full Stack path.",
    titleJP: "フリーコードキャンプのレガシー・フルスタック",
    descriptionJP:
      "フルスタックパスの全コースを修了した場合に授与される認定証です。",
    imageUrl: fccLegacyFullStack,
  },
  {
    id: uuidv4(),
    titleEN: "FreeCodeCamp Quality Assurance",
    descriptionEN:
      "A course that covers how to write tests to ensure our applications work the way we expect them to.",
    titleJP: "フリーコードキャンプの品質保証コース",
    descriptionJP:
      "アプリケーションが期待通りに動作することを保証するためのテストの書き方をカバーするコースです。",
    imageUrl: fccQualityAssurance,
  },
  {
    id: uuidv4(),
    titleEN: "FreeCodeCamp Responsive Web Design",
    descriptionEN:
      "A course that covers how to make webpages that respond to different screen sizes.",
    titleJP: "フリーコードキャンプのレスポンシブWebデザイン",
    descriptionJP:
      "さまざまなスクリーンサイズに対応するWebページの作り方をカバーするコースです。",
    imageUrl: fccResponsiveWebDesign,
  },
  {
    id: uuidv4(),
    titleEN: "Progate Javascript Study 7",
    descriptionEN: "A course that covers about the fundamentals of Javascript.",
    titleJP: "プロゲートのジャバスクリプトスタディ",
    descriptionJP: "ジャバスクリプトのファンダメンタルをカバーするコースです。",
    imageUrl: progateJavascriptStudy7,
  },
];

export const otherCertifications: Array<Certification> = [
  {
    id: uuidv4(),
    titleEN: "Code To Japan Algorithms Challenge",
    descriptionEN:
      "A certificate awarded for successfully completing ASIA To JAPAN's Code To Japan Algorithms Challenge.",
    titleJP: "CODE TO JAPANのアルゴリズムチャレンジ",
    descriptionJP:
      "ASIA TO JAPANのCODE TO JAPANアルゴリズムチャレンジを成功したことで授与される賞状です。",
    imageUrl: codeToJapanAlgorithmChallenge,
  },
  {
    id: uuidv4(),
    titleEN: "Indonesia Young Coders League 2021",
    descriptionEN:
      "A certificate awarded for ranking at the top 100 in the Indonesia Young Coders League 2021.",
    titleJP: "Indonesia Young Coders League 2021",
    descriptionJP:
      "Indonesia Young Coders League 2021の競争100位以内にランクインした場合ことで授与される賞状です。",
    imageUrl: iycl2021,
  },
  {
    id: uuidv4(),
    titleEN: "JLPT N3",
    descriptionEN:
      "A certificate awarded for passing the Level N3 of the Japanese Language Proficiency Test jointly administered by the Japan Foundation and Japan Educational Exchanges and Services.",
    titleJP: "JLPT N3",
    descriptionJP:
      "国際交流基金と日本国際教育支援協会が共同で実施する日本語能力試験のN3級に合格した方に授与される認定証です。",
    imageUrl: jlptN3,
  },
  {
    id: uuidv4(),
    titleEN: "JLPT N4",
    descriptionEN:
      "A certificate awarded for passing the Level N4 of the Japanese Language Proficiency Test jointly administered by the Japan Foundation and Japan Educational Exchanges and Services.",
    titleJP: "JLPT N4",
    descriptionJP:
      "国際交流基金と日本国際教育支援協会が共同で実施する日本語能力試験のN4級に合格した方に授与される認定証です。",
    imageUrl: jlptN4,
  },
  {
    id: uuidv4(),
    titleEN: "JLPT N5",
    descriptionEN:
      "A certificate awarded for passing the Level N5 of the Japanese Language Proficiency Test jointly administered by the Japan Foundation and Japan Educational Exchanges and Services.",
    titleJP: "JLPT N5",
    descriptionJP:
      "国際交流基金と日本国際教育支援協会が共同で実施する日本語能力試験のN5級に合格した方に授与される認定証です。",
    imageUrl: jlptN5,
  },
  {
    id: uuidv4(),
    titleEN: "Google Developer Student Club Core Team",
    descriptionEN:
      "A certificate awarded for serving as a Google Developer Student Club Core Team Member at Binus University for the 2021-2022 academic year.",
    titleJP: "グーグルデベロッパーの学生クラブのコアチームメンバー",
    descriptionJP:
      "2021-2022年度のビナ・ヌサンタラ大学のグーグルデベロッパーの学生クラブのコアチームメンバーを務めたことで授与される賞状です。",
    imageUrl: gdscCoreTeam,
  },
  {
    id: uuidv4(),
    titleEN: "Study Go Work Japan 5th Term",
    descriptionEN:
      "A certificate awarded for passing the 5th term of Study Go Work Japan's Japanese Language and Culture Training Program.",
    titleJP: "Study Go Work Japan 第5学期",
    descriptionJP:
      "Study Go Work Japanの「日本語・日本文化研修プログラム」第5学期の合格証です。",
    imageUrl: sgwjTerm5,
  },
  {
    id: uuidv4(),
    titleEN: "Study Go Work Japan 4th Term",
    descriptionEN:
      "A certificate awarded for passing the 4th term of Study Go Work Japan's Japanese Language and Culture Training Program.",
    titleJP: "Study Go Work Japan 第4学期",
    descriptionJP:
      "Study Go Work Japanの「日本語・日本文化研修プログラム」第4学期の合格証です。",
    imageUrl: sgwjTerm4,
  },
  {
    id: uuidv4(),
    titleEN: "Study Go Work Japan 3rd Term",
    descriptionEN:
      "A certificate awarded for passing the 3rd term of Study Go Work Japan's Japanese Language and Culture Training Program.",
    titleJP: "Study Go Work Japan 第3学期",
    descriptionJP:
      "Study Go Work Japanの「日本語・日本文化研修プログラム」第3学期の合格証です。",
    imageUrl: sgwjTerm3,
  },
  {
    id: uuidv4(),
    titleEN: "Study Go Work Japan 2nd Term",
    descriptionEN:
      "A certificate awarded for passing the 2nd term of Study Go Work Japan's Japanese Language and Culture Training Program.",
    titleJP: "Study Go Work Japan 第2学期",
    descriptionJP:
      "Study Go Work Japanの「日本語・日本文化研修プログラム」第2学期の合格証です。",
    imageUrl: sgwjTerm2,
  },
  {
    id: uuidv4(),
    titleEN: "Australia International Corner",
    descriptionEN:
      "A certificate awarded for serving as a volunteer for the Binus University AussieBanget Corner in the Even Semester 2019/2020.",
    titleJP: "オーストラリア国際コーナー",
    descriptionJP:
      "2019/2020年度偶数学期にビナ・ヌサンタラ大学のオーストラリア国際コーナーでボランティアを務めたことで授与される証書。",
    imageUrl: australiaInternationalCorner,
  },
];
