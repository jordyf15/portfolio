import apiImg from "../../assets/projects/apiImg.jpg";
import cliChessImg from "../../assets/projects/cli-chess.jpeg";
import cliHangmanImg from "../../assets/projects/cli-hangman.jpeg";
import cliMasterMindImg from "../../assets/projects/cli-mastermind.jpeg";
import cliTicTacToeImg from "../../assets/projects/cli-tic-tac-toe.jpeg";
import connectingFourImg from "../../assets/projects/connecting-four.jpg";
import cvApplicationImg from "../../assets/projects/cv-application.jpeg";
import difoodingImg from "../../assets/projects/difooding.jpeg";
import digiMemoryImg from "../../assets/projects/digi-memory.jpeg";
import drumMachineImg from "../../assets/projects/drum-machine.jpeg";
import etchASketchImg from "../../assets/projects/etch-a-sketch.jpeg";
import exerciseTrackerMicroserviceImg from "../../assets/projects/exercise-tracker-microservice.jpeg";
import fileMetadataMicroserviceImg from "../../assets/projects/file-metadata-microservice.jpeg";
import forumHomepageImg from "../../assets/projects/forum-homepage.jpeg";
import githubUsersImg from "../../assets/projects/github-users.jpg";
import hololiveInfoAppImg from "../../assets/projects/hololive-infoapp.jpg";
import imageSearcherImg from "../../assets/projects/image-searcher.jpeg";
import javascriptCalculatorImg from "../../assets/projects/javascript-calculator.jpeg";
import localWeatherImg from "../../assets/projects/local-weather.jpeg";
import markdownPreviewerImg from "../../assets/projects/markdown-previewer.jpeg";
import heatMapImg from "../../assets/projects/monthly-global-land-surface-temperature-heat-map.jpeg";
import odinLibraryImg from "../../assets/projects/odin-library.jpeg";
import pinterestCloneImg from "../../assets/projects/pinterest-clone.jpeg";
import pomodoroClockImg from "../../assets/projects/pomodoro-clock.jpeg";
import randomQuoteMachineImg from "../../assets/projects/random-quote-machine.jpeg";
import reactCalculatorImg from "../../assets/projects/react-calculator.jpeg";
import recipeBoxImg from "../../assets/projects/recipe-box.jpeg";
import requestHeaderParserMicroserviceImg from "../../assets/projects/request-header-parser-microservice.jpeg";
import restaurantPageImg from "../../assets/projects/restaurant-page.jpeg";
import restopediaImg from "../../assets/projects/restopedia.jpeg";
import rockPaperScissorsImg from "../../assets/projects/rock-paper-scissors.jpeg";
import scatterPlotImg from "../../assets/projects/scatter-plot.jpeg";
import simonGameImg from "../../assets/projects/simon-game.jpeg";
import ticTacToeImg from "../../assets/projects/tic-tac-toe.jpeg";
import timestampMicroservice from "../../assets/projects/timestamp-microservice.jpeg";
import todoListImg from "../../assets/projects/todo-list.jpeg";
import twitchJsonApiImg from "../../assets/projects/twitch-json-api.jpeg";
import urlShortenerMicroserviceImg from "../../assets/projects/url-shortener-microservice.jpeg";
import usEducationalAttainmentChoroplethMapImg from "../../assets/projects/us-educational-attainment-choropleth-map.jpeg";
import usGdpImg from "../../assets/projects/us-gdp.jpeg";
import videoGameSaleTreeImg from "../../assets/projects/video-game-sale-tree.jpeg";
import weatherAppImg from "../../assets/projects/weather-app.jpeg";
import wikipediaViewerImg from "../../assets/projects/wikipedia-viewer.jpeg";
import Project from "../../models/Project";

const projectsJP: Array<Project> = [
  {
    id: "project-45",
    title: "ギットハブユーザー",
    description:
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
    id: "project-44",
    title: "レストペディア",
    description:
      "レストペディアはレストランに関する情報 (場所、メニュー、レビュー、評価など) を閲覧し、お気に入り登録することができるプログレッシブWebアプリケーションでございます。このプロジェクトはディコーディングのエキスパートフロントエンド開発コースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://Restopedia.jordyf15.repl.co",
    repoUrl:
      "https://github.com/jordyf15/Dicoding-Expert-FrontEnd-Web-Development-FinalProject",
    imageUrl: restopediaImg,
  },
  {
    id: "project-43",
    title: "CVクリエーター",
    description:
      "CVクリエーターはユーザーが自分の履歴書を作成し、それをダウンロードすることができるWebアプリケーションでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://jordyf15.github.io/cv-application/",
    repoUrl: "https://github.com/jordyf15/cv-application",
    imageUrl: cvApplicationImg,
  },
  {
    id: "project-42",
    title: "デジメモリー",
    description:
      "デジメモリーはリアクトルで作られたデジモンをテーマにしたメモリーカードゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://jordyf15.github.io/digi-memory/",
    repoUrl: "https://github.com/jordyf15/digi-memory",
    imageUrl: digiMemoryImg,
  },
  {
    id: "project-41",
    title: "ウィキビューア",
    description:
      "ウィキビューアは検索バーに入力した単語を基に、関連するウィキペディアの項目を検索したり、ユーザーが望むならランダムなウィキペディアの項目を取得することができるウィキペディア・ビューアーでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/LYRxwpP",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Wikipedia-Viewer",
    imageUrl: wikipediaViewerImg,
  },
  {
    id: "project-40",
    title: "ディフーディング",
    description:
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
    id: "project-39",
    title: "トドリスト",
    description:
      "トドリストはユーザーがトドを整理することができるWebベースのトドリストアプリケーションでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://todo-list.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/todo-list",
    imageUrl: todoListImg,
  },
  {
    id: "project-38",
    title: "ウェザーアプリ",
    description:
      "ウェザーアプリはユーザーが検索した場所の天気情報を見ることができるウェブベースの天気予報アプリケーションでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/weather-app/",
    repoUrl: "https://github.com/jordyf15/weather-app",
    imageUrl: weatherAppImg,
  },
  {
    id: "project-37",
    title: "オーディーンライブラリー",
    description:
      "オーディーンライブラリーは著者、タイトル、ページ、読書状況などの書籍情報を保存できるウェブベースの図書館アプリケーションでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/odin-library/",
    repoUrl: "https://github.com/jordyf15/odin-library",
    imageUrl: odinLibraryImg,
  },
  {
    id: "project-36",
    title: "チックタックトー",
    description:
      "チックタックトーはコンピューターと他のユーザーと対戦できるウェブベースのチックタックトーのゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/javascript-tic-tac-toe/",
    repoUrl: "https://github.com/jordyf15/javascript-tic-tac-toe",
    imageUrl: ticTacToeImg,
  },
  {
    id: "project-35",
    title: "レストランページ",
    description:
      "レストランページはDOM操作のみで構築されたレストランのウェブページでございます。このプロジェクトはオーディンプロジェクトのフルスタックジャバスクリプトコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/restaurant-page/",
    repoUrl: "https://github.com/jordyf15/restaurant-page",
    imageUrl: restaurantPageImg,
  },
  {
    id: "project-34",
    title: "CLIチェス",
    description:
      "CLIチェスはプレイヤーやコンピュータと対戦することができるコマンドラインのチェスゲームでございます。そして、ゲームの保存と読み込みも可能です。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "https://replit.com/@jordyf15/ruby-chess-1#.replit",
    repoUrl: "https://github.com/jordyf15/ruby-chess",
    imageUrl: cliChessImg,
  },
  {
    id: "project-33",
    title: "CLIチックタックトー",
    description:
      "CLIチックタックトーは2人で対戦できるコマンドラインの三目並べゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "https://replit.com/@jordyf15/ruby-tic-tac-toe",
    repoUrl: "https://github.com/jordyf15/ruby-tic-tac-toe",
    imageUrl: cliTicTacToeImg,
  },
  {
    id: "project-32",
    title: "CLIハングマン",
    description:
      "CLIハングマンはセーブとロード機能を備えたコマンドラインのハングマンゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "https://replit.com/@jordyf15/ruby-hangman",
    repoUrl: "https://github.com/jordyf15/ruby-hangman",
    imageUrl: cliHangmanImg,
  },
  {
    id: "project-31",
    title: "CLIマスターマインド",
    description:
      "CLIマスターマインドは秘密の暗号を作る人、または秘密の暗号を破る人としてコンピュータと対戦できる、コマンドライン型のマスターマインド・ゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "https://replit.com/@jordyf15/ruby-mastermind#.replit",
    repoUrl: "https://github.com/jordyf15/ruby-mastermind",
    imageUrl: cliMasterMindImg,
  },
  {
    id: "project-30",
    title: "カルキュレーター",
    description:
      "カルキュレーターはウェブベースのシンプルな電卓でございます。このプロジェクトはオーディンプロジェクトのファンデーションコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/calculator/",
    repoUrl: "https://github.com/jordyf15/calculator",
    imageUrl: javascriptCalculatorImg,
  },
  {
    id: "project-29",
    title: "エッチアスケッチ",
    description:
      "エッチアスケッチはスケッチブックとエッチングアスケッチの中間のようなWebベースのアプリケーションでございます。このプロジェクトはオーディンプロジェクトのファンデーションコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/etch-a-sketch/",
    repoUrl: "https://github.com/jordyf15/etch-a-sketch",
    imageUrl: etchASketchImg,
  },
  {
    id: "project-28",
    title: "ロックペーパーシザーズ",
    description:
      "ロックペーパーシザーズはコンピュータと対戦し、5ラウンド勝つまでプレイするWebベースのジャンケンゲームでございます。このプロジェクトはオーディンプロジェクトのファンデーションコースのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/rock-paper-scissors/",
    repoUrl: "https://github.com/jordyf15/rock-paper-scissors",
    imageUrl: rockPaperScissorsImg,
  },
  {
    id: "project-27",
    title: "ホロライブインフォアプリ",
    description:
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
    id: "project-26",
    title: "サイモンゲーム",
    description:
      "サイモンゲームは厳密モードと非厳密モードで20ラウンドのサイモンゲームをプレイできるウェブベースのサイモンゲームでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://codepen.io/jordyf15/full/XWjqaYw",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Simon-Game",
    imageUrl: simonGameImg,
  },
  {
    id: "project-25",
    title: "ピンタレストクローン",
    description:
      "ピンタレストクローンはユーザーがギットハブのアカウントでログインすると、ピンタレストクローンでリンクした画像を閲覧、リンク、削除することができるサイトでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "fullstack",
    language: "javascript",
    technologies: ["React", "MongoDB", "Express"],
    demoUrl: "https://freecodecamp-pinterest-clone.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Pinterest-Clone",
    imageUrl: pinterestCloneImg,
  },
  {
    id: "project-24",
    title: "レシピボックス",
    description:
      "レシピボックスはユーザーが名前、イングリディエント、および方向を持つレシピを作成、編集、削除、および保持することができるウェブベースのレシピボックスでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/JjROXqg",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Recipe-Box",
    imageUrl: recipeBoxImg,
  },
  {
    id: "project-23",
    title: "フリーコードキャンプのフォーラムホームページ",
    description:
      "フリーコードキャンプのフォーラムのホームページはフリーコードキャンプのフォーラムの最新の投稿とその詳細を見ることができるフォーラムホームページでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/JjRyOEb",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Forum-HomePage",
    imageUrl: forumHomepageImg,
  },
  {
    id: "project-22",
    title: "イメージサーチャー",
    description:
      "イメージサーチャーはクエリに関連する画像を検索し、最近の検索結果も見ることができるウェブベースの画像検索抽象化レイヤでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "fullstack",
    language: "javascript",
    technologies: ["React", "MongoDB", "Express"],
    demoUrl: "https://FreeCodeCamp-Image-Searcher-1.jordyf15.repl.co",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Image-Searcher",
    imageUrl: imageSearcherImg,
  },
  {
    id: "project-21",
    title: "トゥイッチのJSON API",
    description:
      "トゥイッチのJSON APIはトゥイッチのチャンネル一覧が現在ストリーミング中かどうかを表示するWebベースのアプリケーションでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/eYdWOPJ",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Twitch-Json-Api",
    imageUrl: twitchJsonApiImg,
  },
  {
    id: "project-20",
    title: "ローカルウェザー",
    description:
      "ローカルウェザーはユーザーの現在地から天気を表示するWebベースのローカル天気予報アプリケーションでございます。このプロジェクトはフリーコードキャンプのテイクホームプロジェクトのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/MWjJoxX",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Local-Weather",
    imageUrl: localWeatherImg,
  },
  {
    id: "project-19",
    title: "ドラムマシン",
    description:
      "ドラムマシンはユーザーはドラムを演奏することができるウェブベースのドラムマシンアプリケーションでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/MWKBNYe",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Drum-Machine",
    imageUrl: drumMachineImg,
  },
  {
    id: "project-18",
    title: "コネクティングフォー",
    description:
      "コネクティングフォーはTTDで作られたコマンドライン接続の 4 ゲームでございます。このプロジェクトはオーディンプロジェクトのフルスタックルビーオンレイルズのコースのために作られました。",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/connecting-four",
    imageUrl: connectingFourImg,
  },
  {
    id: "project-17",
    title: "オープンミュージックのAPI",
    description:
      "オープンミュージックのAPIはユーザーが楽曲やプレイリストのCRUD操作を行うことができるAPIでございます。このプロジェクトはディコーディングのバックエンド開発ファンダメンタルコースのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Postgres", "Redis", "Hapi"],
    demoUrl: "https://jordy-open-music-api.herokuapp.com/",
    repoUrl:
      "https://github.com/jordyf15/Open-Music-API_Dicoding-Fundamental-BackEnd-Development-Project",
    imageUrl: apiImg,
  },
  {
    id: "project-16",
    title: "ブックシェルフのAPI",
    description:
      "ブックシェルフのAPIはユーザが書籍のCRUD操作を行うためのAPIでございます。このプロジェクトはディコーディングのバックエンド開発初級コースのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Hapi"],
    demoUrl: "https://jordy-bookshelf-api.herokuapp.com/",
    repoUrl:
      "https://github.com/jordyf15/BookShelf-API-Dicoding-Beginner-BackEnd-Development-Project",
    imageUrl: apiImg,
  },
  {
    id: "project-15",
    title: "ガルーダゲームフォーラムのAPI",
    description:
      "ガルーダゲームフォーラムのAPIはクリーンなアーキテクチャと100%のテストカバレッジで開発されているフォーラムWebアプリケーションの基本機能を持つAPIでございます。このプロジェクトはディコーディングのバックエンド開発エキスパートコースのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Hapi", "Postgres"],
    demoUrl: "https://jordy-forum-api.herokuapp.com/",
    repoUrl: "https://github.com/jordyf15/garuda-game-forum-api",
    imageUrl: apiImg,
  },
  {
    id: "project-14",
    title: "ファイルメタデータマイクロサービス",
    description:
      "ユーザーがファイルをアップロードして、ファイル名やサイズなどのメタデータを受け取ることができるファイル・メタデータ・マイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "https://file-metadata-microservice.jordyf15.repl.co/",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-File-Metadata-Microservice",
    imageUrl: fileMetadataMicroserviceImg,
  },
  {
    id: "project-13",
    title: "エクササイズトラッカーマイクロサービス",
    description:
      "ユーザーがエクササイズを追加したり、取得したりできるエクササイズトラッカーマイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express", "MongoDB"],
    demoUrl: "https://freecodecamp-project-exercisetracker.jordyf15.repl.co/",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-Exercise-Tracker-Microservice",
    imageUrl: exerciseTrackerMicroserviceImg,
  },
  {
    id: "project-12",
    title: "URLショートナーマイクロサービス",
    description:
      "ユーザーがURLを短縮することができるURLショートナーマイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express", "MongoDB"],
    demoUrl: "https://url-shortener-microservices.jordyf15.repl.co/",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-URL-Shortener-Microservice",
    imageUrl: urlShortenerMicroserviceImg,
  },
  {
    id: "project-11",
    title: "リクエストヘッダパーサーマイクロサービス",
    description:
      "ユーザーが現在使用しているデバイスのIPアドレス、優先言語、システム情報を取得することができるマイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "https://request-header-parser-microservice.jordyf15.repl.co/",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-Request-Header-Parser-Microservice",
    imageUrl: requestHeaderParserMicroserviceImg,
  },
  {
    id: "project-10",
    title: "タイムスタンプマイクロサービス",
    description:
      "入力された時刻のUNIXとUTCのタイムスタンプをユーザに返すマイクロサービスでございます。このプロジェクトはフリーコードキャンプのAPIとマイクロサービスカリキュラムのために作られました。",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "https://freecodecamp-project-timestamp.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Timestamp-Microservice",
    imageUrl: timestampMicroservice,
  },
  {
    id: "project-9",
    title: "ポモドーロクロック",
    description:
      "Webベースのポモドーロ時計アプリケーションでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリーカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/jOWdaWV",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Pomodoro-Clock",
    imageUrl: pomodoroClockImg,
  },
  {
    id: "project-8",
    title: "リアクトカルキュレータ",
    description:
      "Webベースの電卓アプリケーションでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリーカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/BaogOGM",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Javascript-Calculator",
    imageUrl: reactCalculatorImg,
  },
  {
    id: "project-7",
    title: "マークダウンプレビューア",
    description:
      "ユーザーが書いたマークダウンのプレビューをすぐに見ることができる、ウェブベースのマークダウンプレビューアでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリーカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/PoZoKqz",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-MarkdownPreviewer",
    imageUrl: markdownPreviewerImg,
  },
  {
    id: "project-6",
    title: "ランダムクオートマシン",
    description:
      "ユーザーが「新しい引用」ボタンをクリックするたびに新しいランダムな引用を表示し、ツイッターとタンブラーで共有することもできるWebベースのランダム引用マシンでございます。このプロジェクトはフリーコードキャンプのフロントエンドライブラリーカリキュラムのために作られました。",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/OJyeoar",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Random-Quote-Machine",
    imageUrl: randomQuoteMachineImg,
  },
  {
    id: "project-5",
    title: "アメリカのGDPのバーチャート",
    description:
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
    id: "project-4",
    title: "プロ競輪選手のドーピング事件のスキャッタープロット",
    description:
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
    id: "project-3",
    title: "全球地表面温度月報のヒートマップ",
    description:
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
    id: "project-2",
    title: "アメリカの教育達成度のチョープレスマップ",
    description:
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
    id: "project-1",
    title: "ビデオゲームセールのツリーマップ",
    description:
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

export default projectsJP;
