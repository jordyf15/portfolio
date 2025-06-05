import { v4 as uuidv4 } from "uuid";
import apiImg from "../assets/projects/apiImg.jpg";
import cliChessImg from "../assets/projects/cli-chess.jpeg";
import cliHangmanImg from "../assets/projects/cli-hangman.jpeg";
import cliMasterMindImg from "../assets/projects/cli-mastermind.jpeg";
import cliTicTacToeImg from "../assets/projects/cli-tic-tac-toe.jpeg";
import connectingFourImg from "../assets/projects/connecting-four.jpg";
import cvApplicationImg from "../assets/projects/cv-application.jpeg";
import dicodingStoryImg from "../assets/projects/dicoding-story.jpg";
import difoodingImg from "../assets/projects/difooding.jpeg";
import digiMemoryImg from "../assets/projects/digi-memory.jpeg";
import drumMachineImg from "../assets/projects/drum-machine.jpeg";
import etchASketchImg from "../assets/projects/etch-a-sketch.jpeg";
import exerciseTrackerMicroserviceImg from "../assets/projects/exercise-tracker-microservice.jpeg";
import fileMetadataMicroserviceImg from "../assets/projects/file-metadata-microservice.jpeg";
import forumHomepageImg from "../assets/projects/forum-homepage.jpeg";
import githubUsersImg from "../assets/projects/github-users.jpg";
import hololiveInfoAppImg from "../assets/projects/hololive-infoapp.jpg";
import imageSearcherImg from "../assets/projects/image-searcher.jpeg";
import javascriptCalculatorImg from "../assets/projects/javascript-calculator.jpeg";
import localWeatherImg from "../assets/projects/local-weather.jpeg";
import markdownPreviewerImg from "../assets/projects/markdown-previewer.jpeg";
import heatMapImg from "../assets/projects/monthly-global-land-surface-temperature-heat-map.jpeg";
import odinLibraryImg from "../assets/projects/odin-library.jpeg";
import pinterestCloneImg from "../assets/projects/pinterest-clone.jpeg";
import pomodoroClockImg from "../assets/projects/pomodoro-clock.jpeg";
import randomQuoteMachineImg from "../assets/projects/random-quote-machine.jpeg";
import reactCalculatorImg from "../assets/projects/react-calculator.jpeg";
import recipeBoxImg from "../assets/projects/recipe-box.jpeg";
import requestHeaderParserMicroserviceImg from "../assets/projects/request-header-parser-microservice.jpeg";
import restaurantPageImg from "../assets/projects/restaurant-page.jpeg";
import restopediaImg from "../assets/projects/restopedia.jpeg";
import rockPaperScissorsImg from "../assets/projects/rock-paper-scissors.jpeg";
import scatterPlotImg from "../assets/projects/scatter-plot.jpeg";
import simonGameImg from "../assets/projects/simon-game.jpeg";
import smartLearningSystemImg from "../assets/projects/smart-learning-system.jpg";
import ticTacToeImg from "../assets/projects/tic-tac-toe.jpeg";
import timestampMicroservice from "../assets/projects/timestamp-microservice.jpeg";
import todoListImg from "../assets/projects/todo-list.jpeg";
import twitchJsonApiImg from "../assets/projects/twitch-json-api.jpeg";
import urlShortenerMicroserviceImg from "../assets/projects/url-shortener-microservice.jpeg";
import usEducationalAttainmentChoroplethMapImg from "../assets/projects/us-educational-attainment-choropleth-map.jpeg";
import usGdpImg from "../assets/projects/us-gdp.jpeg";
import videoGameSaleTreeImg from "../assets/projects/video-game-sale-tree.jpeg";
import weatherAppImg from "../assets/projects/weather-app.jpeg";
import wikipediaViewerImg from "../assets/projects/wikipedia-viewer.jpeg";
import Project from "../models/Project";

const projects: Array<Project> = [
  {
    id: uuidv4(),
    titleEN: "Smart Learning System",
    descriptionEN:
      "Smart Learning System is a web based learning management system that have features that assist learning and teaching activities between students and teachers of junior and senior high school. The main features are classes, materials, assignments, forum, scores, progress, announcements, and agenda. This project was made for my thesis at Bina Nusantara University.",
    titleJP: "スマートラーニングシステム",
    descriptionJP:
      "スマートラーニングシステムは中学・高校の学生と先生の学習と教育活動を支援する機能あるWebベースの学習管理システムでございます。このプロジェクトの主な機能はクラス、教材、課題、フォーラム、スコア、プログレス、お知らせ、アジェンダでございます。このプロジェクトはビナヌサンタラ大学の学位論文のために作られました。",
    imageUrl: smartLearningSystemImg,
    type: "frontend",
    language: "javascript",
    technologies: ["React", "Redux", "Firebase"],
    demoUrl: "https://sistem-belajar-pintar-49f3f.web.app/",
    repoUrl: "https://github.com/jordyf15/sistem-sekolah-pintar",
  },
  {
    id: uuidv4(),
    titleEN: "Dicoding Story",
    descriptionEN:
      "Dicoding Story is an android application where users can view and post stories. Users can also view the locations of those stories in Google Map. This project was made in order to pass the Dicoding's Intermediate Android Development Course.",
    titleJP: "ディコーディングストーリー",
    descriptionJP:
      "ディコーディングストーリーはユーザーがストーリーを見たり投稿したりできるアンドロイドアプリケーションでございます。そして、ユーザーは投稿されたストーリーの位置情報をグーグルマップで確認することもできます。",
    imageUrl: dicodingStoryImg,
    type: "android",
    language: "kotlin",
    technologies: [],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/Dicoding-Story_Dicoding-Intermediate-Android-Development-Final-Project",
  },
  {
    id: uuidv4(),
    titleEN: "Github Users",
    descriptionEN:
      "Github Users is an android application where users can view informations about users in Github. This project was made for the Dicoding's Fundamental Android Development Course.",
    titleJP: "ギットハブユーザー",
    descriptionJP:
      "ギットハブユーザーはギットハブのユーザーに関する情報を閲覧できるアンドロイドアプリケーションでございます。このプロジェクトはディコーディングのファンダメンタルアンドロイド開発コースのために作られました。",
    type: "android",
    language: "kotlin",
    technologies: [],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/Github-User_Dicoding-Fundamental-Android-Development-Final-Project",
    imageUrl: githubUsersImg,
  },
  {
    id: uuidv4(),
    titleEN: "Restopedia",
    descriptionEN:
      "Restopedia is a Progressive web apps that allows the user to view information about certain restaurants such as their location, menus, reviews and ratings and also favorite them. This project was made for the Dicoding's Expert Front-end Development Course.",
    titleJP: "レストペディア",
    descriptionJP:
      "レストペディアはレストランに関する情報 (場所、メニュー、レビュー、評価など) を閲覧し、お気に入り登録することができるプログレッシブWebアプリケーションでございます。このプロジェクトはディコーディングのエキスパートフロントエンド開発コースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://restopedia-97073.web.app/",
    repoUrl:
      "https://github.com/jordyf15/Dicoding-Expert-FrontEnd-Web-Development-FinalProject",
    imageUrl: restopediaImg,
  },
  {
    id: uuidv4(),
    titleEN: "CV Creator",
    descriptionEN:
      "A CV Creator web application where users can create their own CV and download it. This project was made for the Odin Project's Full Stack Javascript path.",
    titleJP: "CVクリエーター",
    descriptionJP:
      "CVクリエーターはユーザーが自分の履歴書を作成し、それをダウンロードすることができるWebアプリケーションでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://jordyf15.github.io/cv-application/",
    repoUrl: "https://github.com/jordyf15/cv-application",
    imageUrl: cvApplicationImg,
  },
  {
    id: uuidv4(),
    titleEN: "Digi Memory",
    descriptionEN:
      "A digimon themed memory card game built with React. This project was made for the Odin Project's Full Stack Javascript path.",
    titleJP: "デジメモリー",
    descriptionJP:
      "デジメモリーはリアクトルで作られたデジモンをテーマにしたメモリーカードゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://jordyf15.github.io/digi-memory/",
    repoUrl: "https://github.com/jordyf15/digi-memory",
    imageUrl: digiMemoryImg,
  },
  {
    id: uuidv4(),
    titleEN: "Wiki Viewer",
    descriptionEN:
      "A wikipedia viewer which allow users to search for related wikipedia entries based on the word they type in the search bar and also get a random wikipedia entry if the users want it. This project was made for the FreeCodeCamp's Take Home Project.",
    titleJP: "ウィキビューア",
    descriptionJP:
      "ウィキビューアは検索バーに入力した単語を基に、関連するウィキペディアの項目を検索したり、ユーザーが望むならランダムなウィキペディアの項目を取得することができるウィキペディア・ビューアーでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/LYRxwpP",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Wikipedia-Viewer",
    imageUrl: wikipediaViewerImg,
  },
  {
    id: uuidv4(),
    titleEN: "Difooding",
    descriptionEN:
      "A web application where users can search for all kinds of food recipes by name or through filter which are divided by 3 types: categories, area, and ingridients. This project was made for the Dicoding's Fundamental Front-end Web Development Course.",
    titleJP: "ディフーディング",
    descriptionJP:
      "ディフーディングはあらゆる料理のレシピを、名前から、あるいはカテゴリー、エリア、イングリディエントの3種類のフィルターを通して検索することができるWebアプリケーションでございます。このプロジェクトはディコーディングのファンダメンタルフロントエンド開発コースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://codepen.io/jordyf15/full/zYKbMxp",
    repoUrl:
      "https://github.com/jordyf15/Dicoding-Fundamental-Front-End-Web-Development-FinalProject",
    imageUrl: difoodingImg,
  },
  {
    id: uuidv4(),
    titleEN: "Todo List",
    descriptionEN:
      "A web based todo list application where users can organize their todos. This project was made for the Odin Project's Full Stack Javascript path.",
    titleJP: "トドリスト",
    descriptionJP:
      "トドリストはユーザーがトドを整理することができるWebベースのトドリストアプリケーションでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/todo-list/",
    repoUrl: "https://github.com/jordyf15/todo-list",
    imageUrl: todoListImg,
  },
  {
    id: uuidv4(),
    titleEN: "Weather App",
    descriptionEN:
      "A web based weather application where users can view the weather information of the location they searched for. This project was made for the Odin Project's Full Stack Javascript path.",
    titleJP: "ウェザーアプリ",
    descriptionJP:
      "ウェザーアプリはユーザーが検索した場所の天気情報を見ることができるWebベースの天気予報アプリケーションでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/weather-app/",
    repoUrl: "https://github.com/jordyf15/weather-app",
    imageUrl: weatherAppImg,
  },
  {
    id: uuidv4(),
    titleEN: "Odin Library",
    descriptionEN:
      "A web based library application where users can save their books information such as author, title, pages, and the read status. This project was made for the Odin Project's Full Stack Javascript path.",
    titleJP: "オーディーンライブラリー",
    descriptionJP:
      "オーディーンライブラリーは著者、タイトル、ページ、読書状況などの書籍情報を保存できるWebベースの図書館アプリケーションでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/odin-library/",
    repoUrl: "https://github.com/jordyf15/odin-library",
    imageUrl: odinLibraryImg,
  },
  {
    id: uuidv4(),
    titleEN: "Tic Tac Toe",
    descriptionEN:
      "A web based Tic Tac Toe game where users can choose to play against an Computer or another User. This project was made for the Odin Project's Full Stack Javascript path.",
    titleJP: "チックタックトー",
    descriptionJP:
      "チックタックトーはコンピューターと他のユーザーと対戦できるWebベースのチックタックトーのゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/javascript-tic-tac-toe/",
    repoUrl: "https://github.com/jordyf15/javascript-tic-tac-toe",
    imageUrl: ticTacToeImg,
  },
  {
    id: uuidv4(),
    titleEN: "Restaurant Page",
    descriptionEN:
      "A restaurant webpage build with only DOM manipulation. This project was made for the Odin Project's Full Stack Javascript path.",
    titleJP: "レストランページ",
    descriptionJP:
      "レストランページはDOM操作のみで構築されたレストランのWebページでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/restaurant-page/",
    repoUrl: "https://github.com/jordyf15/restaurant-page",
    imageUrl: restaurantPageImg,
  },
  {
    id: uuidv4(),
    titleEN: "CLI Chess",
    descriptionEN:
      "A command line chess game where users can play against a player or a Computer. The user can also save and load their game. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    titleJP: "CLIチェス",
    descriptionJP:
      "CLIチェスはプレイヤーやコンピュータと対戦することができるコマンドラインのチェスゲームでございます。そして、ゲームの保存と読み込みも可能です。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/ruby-chess",
    imageUrl: cliChessImg,
  },
  {
    id: uuidv4(),
    titleEN: "CLI Tic Tac Toe",
    descriptionEN:
      "A command line Tic Tac Toe game where 2 players can play against each other. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    titleJP: "CLIチックタックトー",
    descriptionJP:
      "CLIチックタックトーは2人で対戦できるコマンドラインの三目並べゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/ruby-tic-tac-toe",
    imageUrl: cliTicTacToeImg,
  },
  {
    id: uuidv4(),
    titleEN: "CLI Hangman",
    descriptionEN:
      "A command line hangman game with a save and load feature. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    titleJP: "CLIハングマン",
    descriptionJP:
      "CLIハングマンはセーブとロード機能を備えたコマンドラインのハングマンゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/ruby-hangman",
    imageUrl: cliHangmanImg,
  },
  {
    id: uuidv4(),
    titleEN: "CLI Mastermind",
    descriptionEN:
      "A command line mastermind game where the user can play against a computer either as a secret code maker or a secret code breaker. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    titleJP: "CLIマスターマインド",
    descriptionJP:
      "CLIマスターマインドは秘密の暗号を作る人、または秘密の暗号を破る人としてコンピュータと対戦できる、コマンドライン型のマスターマインド・ゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/ruby-mastermind",
    imageUrl: cliMasterMindImg,
  },
  {
    id: uuidv4(),
    titleEN: "Calculator",
    descriptionEN:
      "A simple web based calculator. This project was made for the Odin Project's Foundation path.",
    titleJP: "カルキュレーター",
    descriptionJP:
      "カルキュレーターはWebベースのシンプルな電卓でございます。このプロジェクトはオーディンプロジェクトのファンデーションコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/calculator/",
    repoUrl: "https://github.com/jordyf15/calculator",
    imageUrl: javascriptCalculatorImg,
  },
  {
    id: uuidv4(),
    titleEN: "Etch a Sketch",
    descriptionEN:
      "A web based application of something between a sketchpad and an Etch-A-Sketch. This project was made for the Odin Project's Foundation path.",
    titleJP: "エッチアスケッチ",
    descriptionJP:
      "エッチアスケッチはスケッチブックとエッチングアスケッチの中間のようなWebベースのアプリケーションでございます。このプロジェクトはオーディンプロジェクトのファンデーションコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/etch-a-sketch/",
    repoUrl: "https://github.com/jordyf15/etch-a-sketch",
    imageUrl: etchASketchImg,
  },
  {
    id: uuidv4(),
    titleEN: "Rock Paper Scissors",
    descriptionEN:
      "A web based rock-paper-scissors game where the user will play against a computer until one wins 5 rounds. This project was made for the Odin Project's Foundation path.",
    titleJP: "ロックペーパーシザーズ",
    descriptionJP:
      "ロックペーパーシザーズはコンピュータと対戦し、5ラウンド勝つまでプレイするWebベースのジャンケンゲームでございます。このプロジェクトはオーディンプロジェクトのファンデーションコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/rock-paper-scissors/",
    repoUrl: "https://github.com/jordyf15/rock-paper-scissors",
    imageUrl: rockPaperScissorsImg,
  },
  {
    id: uuidv4(),
    titleEN: "Hololive InfoApp",
    descriptionEN:
      "An android application where users can view information about 15 Vtubers from Hololive. This project was made for the Dicoding's Beginner Android Development Course.",
    titleJP: "ホロライブインフォアプリ",
    descriptionJP:
      "ホロライブインフォアプリはホロライブに所属する15人のブイチューバーの情報を閲覧することができるアンドロイドアプリケーションでございます。このプロジェクトはディコーディングの初級アンドロイド開発コースのために作られました。",
    type: "android",
    language: "kotlin",
    technologies: [],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/Hololive-InfoApp_Dicoding-Beginner-Android-Development-Final-Project",
    imageUrl: hololiveInfoAppImg,
  },
  {
    id: uuidv4(),
    titleEN: "Simon Game",
    descriptionEN:
      "A web based simon game where users can play a simon game for 20 rounds with strict or non-strict mode. This project was made for the FreeCodeCamp's Take Home Project.",
    titleJP: "サイモンゲーム",
    descriptionJP:
      "サイモンゲームは厳密モードと非厳密モードで20ラウンドのサイモンゲームをプレイできるWebベースのサイモンゲームでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://codepen.io/jordyf15/full/XWjqaYw",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Simon-Game",
    imageUrl: simonGameImg,
  },
  {
    id: uuidv4(),
    titleEN: "Pinterest Clone",
    descriptionEN:
      "A pinterest clone where users can login with their github account and then can view, link and delete the images they link to in the pinterest clone. This project was made for the FreeCodeCamp's Take Home Project.",
    titleJP: "ピンタレストクローン",
    descriptionJP:
      "ピンタレストクローンはユーザーがギットハブのアカウントでログインすると、ピンタレストクローンでリンクした画像を閲覧、リンク、削除することができるサイトでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "fullstack",
    language: "javascript",
    technologies: ["React", "MongoDB", "Express"],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Pinterest-Clone",
    imageUrl: pinterestCloneImg,
  },
  {
    id: uuidv4(),
    titleEN: "Recipe Box",
    descriptionEN:
      "A web based recipe box where users can create, edit, delete, and keep recipes that have names, ingridients, and directions. This project was made for the FreeCodeCamp's Take Home Project.",
    titleJP: "レシピボックス",
    descriptionJP:
      "レシピボックスはユーザーが名前、イングリディエント、および方向を持つレシピを作成、編集、削除、および保持することができるWebベースのレシピボックスでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/JjROXqg",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Recipe-Box",
    imageUrl: recipeBoxImg,
  },
  {
    id: uuidv4(),
    titleEN: "Forum Homepage",
    descriptionEN:
      "FreeCodeCamp Forum HomePage where users can see the most recent posts in FreeCodeCamp forum including it's details. This project was made for the FreeCodeCamp's Take Home Project.",
    titleJP: "フリーコードキャンプのフォーラムホームページ",
    descriptionJP:
      "フリーコードキャンプのフォーラムのホームページはフリーコードキャンプのフォーラムの最新の投稿とその詳細を見ることができるフォーラムホームページでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/JjRyOEb",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Forum-HomePage",
    imageUrl: forumHomepageImg,
  },
  {
    id: uuidv4(),
    titleEN: "Image Searcher",
    descriptionEN:
      "A web based Image Search Abstraction Layer that allows user to search for images related to the query and also see recent searches. This project was made for the FreeCodeCamp's Take Home Project.",
    titleJP: "イメージサーチャー",
    descriptionJP:
      "イメージサーチャーはクエリに関連する画像を検索し、最近の検索結果も見ることができるWebベースの画像検索抽象化レイヤでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "fullstack",
    language: "javascript",
    technologies: ["React", "MongoDB", "Express"],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Image-Searcher",
    imageUrl: imageSearcherImg,
  },
  {
    id: uuidv4(),
    titleEN: "Twitch Json Api",
    descriptionEN:
      "A web based application that display information whether a list of channels IN Twitch.tv are currently streaming or not. This project was made for the FreeCodeCamp's Take Home Project.",
    titleJP: "トゥイッチのJSON API",
    descriptionJP:
      "トゥイッチのJSON APIはトゥイッチのチャンネル一覧が現在ストリーミング中かどうかを表示するWebベースのアプリケーションでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/eYdWOPJ",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Twitch-Json-Api",
    imageUrl: twitchJsonApiImg,
  },
  {
    id: uuidv4(),
    titleEN: "Local Weather",
    descriptionEN:
      "A web based local weather application that displays the weather based on the user's current location. This project was made for the FreeCodeCamp's Take Home Project.",
    titleJP: "ローカルウェザー",
    descriptionJP:
      "ローカルウェザーはユーザーの現在地から天気を表示するWebベースのローカル天気予報アプリケーションでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/MWjJoxX",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Local-Weather",
    imageUrl: localWeatherImg,
  },
  {
    id: uuidv4(),
    titleEN: "Drum Machine",
    descriptionEN:
      "A web based drum machine application where users can play a drum. This project was made for the FreeCodeCamp's Frontend Library Curriculum.",
    titleJP: "ドラムマシン",
    descriptionJP:
      "ドラムマシンはユーザーはドラムを演奏することができるWebベースのドラムマシンアプリケーションでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/MWKBNYe",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Drum-Machine",
    imageUrl: drumMachineImg,
  },
  {
    id: uuidv4(),
    titleEN: "Connecting Four",
    descriptionEN:
      "A command line connecting four game built with TTD. This project was made for the Odin project's Full Stack Ruby On Rails path.",

    titleJP: "コネクティングフォー",
    descriptionJP:
      "コネクティングフォーはTTDで作られたコマンドライン接続の 4 ゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/connecting-four",
    imageUrl: connectingFourImg,
  },
  {
    id: uuidv4(),
    titleEN: "Open Music API",
    descriptionEN:
      "An API where users can perform a CRUD operation of songs and playlists. This project was made for the Dicoding's Fundamental BackEnd Development Course.",
    titleJP: "オープンミュージックのAPI",
    descriptionJP:
      "オープンミュージックのAPIはユーザーが楽曲やプレイリストのCRUD操作を行うことができるAPIでございます。このプロジェクトはディコーディングのバックエンド開発ファンダメンタルコースのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Postgres", "Redis", "Hapi"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/Open-Music-API_Dicoding-Fundamental-BackEnd-Development-Project",
    imageUrl: apiImg,
  },
  {
    id: uuidv4(),
    titleEN: "Bookshelf API",
    descriptionEN:
      "An API where users can perform a CRUD operation of books. This project was made for the Dicoding's Beginner BackEnd Development Course.",
    titleJP: "ブックシェルフのAPI",
    descriptionJP:
      "ブックシェルフのAPIはユーザが書籍のCRUD操作を行うためのAPIでございます。このプロジェクトはディコーディングのバックエンド開発初級コースのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Hapi"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/BookShelf-API-Dicoding-Beginner-BackEnd-Development-Project",
    imageUrl: apiImg,
  },
  {
    id: uuidv4(),
    titleEN: "Garuda Game Forum API",
    descriptionEN:
      "An API which have the basic features of a forum web application and was implemented using clean architecture and 100% test coverage. This project was made for the Dicoding's Expert Backend Development Course.",
    titleJP: "ガルーダゲームフォーラムのAPI",
    descriptionJP:
      "ガルーダゲームフォーラムのAPIはクリーンなアーキテクチャと100%のテストカバレッジで開発されているフォーラムWebアプリケーションの基本機能を持つAPIでございます。このプロジェクトはディコーディングのバックエンド開発エキスパートコースのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Hapi", "Postgres"],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/garuda-game-forum-api",
    imageUrl: apiImg,
  },
  {
    id: uuidv4(),
    titleEN: "File Metadata Microservice",
    descriptionEN:
      "A File Metadata Microservice where users can upload a file and receive it's meta data such as file name and size. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    titleJP: "ファイルメタデータマイクロサービス",
    descriptionJP:
      "ユーザーがファイルをアップロードして、ファイル名やサイズなどのメタデータを受け取ることができるファイル・メタデータ・マイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-File-Metadata-Microservice",
    imageUrl: fileMetadataMicroserviceImg,
  },
  {
    id: uuidv4(),
    titleEN: "Exercise Tracker Microservice",
    descriptionEN:
      "A Exercise Tracker Microservice where users can add and get exercises for a user. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    titleJP: "エクササイズトラッカーマイクロサービス",
    descriptionJP:
      "ユーザーがエクササイズを追加したり、取得したりできるエクササイズトラッカーマイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express", "MongoDB"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-Exercise-Tracker-Microservice",
    imageUrl: exerciseTrackerMicroserviceImg,
  },
  {
    id: uuidv4(),
    titleEN: "URL Shortener Microservice",
    descriptionEN:
      "A URL Shortener Microservice where users can shorten a url. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    titleJP: "URLショートナーマイクロサービス",
    descriptionJP:
      "ユーザーがURLを短縮することができるURLショートナーマイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express", "MongoDB"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-URL-Shortener-Microservice",
    imageUrl: urlShortenerMicroserviceImg,
  },
  {
    id: uuidv4(),
    titleEN: "Request Header Parser Microservice",
    descriptionEN:
      "A microservice that allows the user to get their IP Address, Preferred Languages, and System Information of their current device. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    titleJP: "リクエストヘッダパーサーマイクロサービス",
    descriptionJP:
      "ユーザーが現在使用しているデバイスのIPアドレス、優先言語、システム情報を取得することができるマイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-Request-Header-Parser-Microservice",
    imageUrl: requestHeaderParserMicroserviceImg,
  },
  {
    id: uuidv4(),
    titleEN: "Timestamp Microservice",
    descriptionEN:
      "A microservice that will return a unix and utc timestamp of the inputted time to the user. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    titleJP: "タイムスタンプマイクロサービス",
    descriptionJP:
      "入力された時刻のUNIXとUTCのタイムスタンプをユーザに返すマイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Timestamp-Microservice",
    imageUrl: timestampMicroservice,
  },
  {
    id: uuidv4(),
    titleEN: "Pomodoro Clock",
    descriptionEN:
      "A web based pomodoro clock application. This project was made for the FreeCodeCamp's Frontent Library Curriculum.",
    titleJP: "ポモドーロクロック",
    descriptionJP:
      "Webベースのポモドーロ時計アプリケーションでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリーカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/jOWdaWV",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Pomodoro-Clock",
    imageUrl: pomodoroClockImg,
  },
  {
    id: uuidv4(),
    titleEN: "React Calculator",
    descriptionEN:
      "A web based calculator application. This project was made for the FreeCodeCamp's Frontent Library Curriculum.",
    titleJP: "リアクトカルキュレータ",
    descriptionJP:
      "Webベースの電卓アプリケーションでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリーカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/BaogOGM",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Javascript-Calculator",
    imageUrl: reactCalculatorImg,
  },
  {
    id: uuidv4(),
    titleEN: "Markdown Previewer",
    descriptionEN:
      "A web based markdown previewer where the user can immediately see the preview of the markdown that they wrote. This project was made for the FreeCodeCamp's Frontent Library Curriculum.",
    titleJP: "マークダウンプレビューア",
    descriptionJP:
      "ユーザーが書いたマークダウンのプレビューをすぐに見ることができる、Webベースのマークダウンプレビューアでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリーカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/PoZoKqz",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-MarkdownPreviewer",
    imageUrl: markdownPreviewerImg,
  },
  {
    id: uuidv4(),
    titleEN: "Random Quote Machine",
    descriptionEN:
      "A web based Random Quote Machine that displays new and random quote everytime the user clicks on the 'New Quote' button and also allows the user to share it on Twitter and Tumblr. This project was made for the FreeCodeCamp's Frontent Library Curriculum.",
    titleJP: "ランダムクオートマシン",
    descriptionJP:
      "ユーザーが「新しい引用」ボタンをクリックするたびに新しいランダムな引用を表示し、ツイッターとタンブラーで共有することもできるWebベースのランダム引用マシンでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリーカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/OJyeoar",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Random-Quote-Machine",
    imageUrl: randomQuoteMachineImg,
  },
  {
    id: uuidv4(),
    titleEN: "US GDP's Bar Chart",
    descriptionEN:
      "A data visualization of The United States's GDP in the form of a Bar Chart. This project was made for the Freecodecamp's Data Visualization Curriculum.",
    titleJP: "アメリカのGDPのバーチャート",
    descriptionJP:
      "バーチャートでアメリカのGDPのデータビジュアライゼーションでございます。このプロジェクトはフリーコードキャンプのデータビジュアライゼーションカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/RwrzmWP",
    repoUrl:
      "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: usGdpImg,
  },
  {
    id: uuidv4(),
    titleEN: "Professional Bicycle Racing Doping Cases's Scatter Plot",
    descriptionEN:
      "A data visualization of The Professional Bicycle Racing Doping Cases in the form of a Scatter Plot. This project was made for the Freecodecamp's Data Visualization Curriculum.",
    titleJP: "プロ競輪選手のドーピング事件のスキャッタープロット",
    descriptionJP:
      "スキャッタープロットでプロ競輪選手のドーピング事件のデータビジュアライゼーションでございます。このプロジェクトはフリーコードキャンプのデータビジュアライゼーションカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/XWdrBMw",
    repoUrl:
      "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: scatterPlotImg,
  },
  {
    id: uuidv4(),
    titleEN: "Monthly Global Land-Surface Temperature's Heat Map",
    descriptionEN:
      "A data visualization of The Monthly Global Land-Surface Temperature in the form of a Heat Map. This project was made for the Freecodecamp's Data Visualization Curriculum.",
    titleJP: "全球地表面温度月報のヒートマップ",
    descriptionJP:
      "ヒートマップで全球地表面温度月報のデータビジュアライゼーションでございます。このプロジェクトはフリーコードキャンプのデータビジュアライゼーションカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/WNwNZJo",
    repoUrl:
      "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: heatMapImg,
  },
  {
    id: uuidv4(),
    titleEN: "US Educational Attainment's Choropleth Map",
    descriptionEN:
      "A data visualization of The United States Educational Attainment in the form of a Choropleth Map. This project was made for the Freecodecamp's Data Visualization Curriculum.",
    titleJP: "アメリカの教育達成度のチョープレスマップ",
    descriptionJP:
      "チョープレスマップでアメリカの教育達成度のデータビジュアライゼーションでございます。このプロジェクトはフリーコードキャンプのデータビジュアライゼーションカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/LYNEQZQ",
    repoUrl:
      "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: usEducationalAttainmentChoroplethMapImg,
  },
  {
    id: uuidv4(),
    titleEN: "Video Game Sale's Tree Map",
    descriptionEN:
      "A data visualization of The Video Game Sale in the form of a Tree Map. This project was made for the Freecodecamp's Data Visualization Curriculum.",
    titleJP: "ビデオゲームセールのツリーマップ",
    descriptionJP:
      "ツリーマップでビデオゲームセールのデータビジュアライゼーションでございます。このプロジェクトはフリーコードキャンプのデータビジュアライゼーションカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/vYGOGdV",
    repoUrl:
      "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: videoGameSaleTreeImg,
  },
];

export default projects;
