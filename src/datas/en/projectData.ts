import apiImg from "../../assets/projects/apiImg.jpg";
import cliChessImg from "../../assets/projects/cli-chess.jpeg";
import cliHangmanImg from "../../assets/projects/cli-hangman.jpeg";
import cliMasterMindImg from "../../assets/projects/cli-mastermind.jpeg";
import cliTicTacToeImg from "../../assets/projects/cli-tic-tac-toe.jpeg";
import connectingFourImg from "../../assets/projects/connecting-four.jpg";
import cvApplicationImg from "../../assets/projects/cv-application.jpeg";
import dicodingStoryImg from "../../assets/projects/dicoding-story.jpg";
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
import smartLearningSystemImg from "../../assets/projects/smart-learning-system.jpg";
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

const projectsEN: Array<Project> = [
  {
    id: "project-47",
    title: "Smart Learning System",
    description:
      "Smart Learning System is a web based learning management system that have features that assist learning and teaching activities between students and teachers of junior and senior high school.　The main features are classes, materials, assignments, forum, scores, progress, announcements, and agenda. This project was made for my thesis at Bina Nusantara University.",
    imageUrl: smartLearningSystemImg,
    type: "frontend",
    language: "javascript",
    technologies: ["React", "Redux", "Firebase"],
    demoUrl: "https://sistem-belajar-pintar-49f3f.web.app/",
    repoUrl: "https://github.com/jordyf15/sistem-sekolah-pintar",
  },
  {
    id: "project-46",
    title: "Dicoding Story",
    description:
      "Dicoding Story is an android application where users can view and post stories. Users can also view the locations of those stories in Google Map. This project was made in order to pass the Dicoding's Intermediate Android Development Course.",
    imageUrl: dicodingStoryImg,
    type: "android",
    language: "kotlin",
    technologies: [],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/Dicoding-Story_Dicoding-Intermediate-Android-Development-Final-Project",
  },
  {
    id: "project-45",
    title: "Github Users",
    description:
      "Github Users is an android application where users can view informations about users in Github. This project was made for the Dicoding's Fundamental Android Development Course.",
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
    title: "Restopedia",
    description:
      "Restopedia is a Progressive web apps that allows the user to view information about certain restaurants such as their location, menus, reviews and ratings and also favorite them. This project was made for the Dicoding's Expert Front-end Development Course.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://restopedia-97073.web.app/",
    repoUrl:
      "https://github.com/jordyf15/Dicoding-Expert-FrontEnd-Web-Development-FinalProject",
    imageUrl: restopediaImg,
  },
  {
    id: "project-43",
    title: "CV Creator",
    description:
      "A CV Creator web application where users can create their own CV and download it. This project was made for the Odin Project's Full Stack Javascript path.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://jordyf15.github.io/cv-application/",
    repoUrl: "https://github.com/jordyf15/cv-application",
    imageUrl: cvApplicationImg,
  },
  {
    id: "project-42",
    title: "Digi Memory",
    description:
      "A digimon themed memory card game built with React. This project was made for the Odin Project's Full Stack Javascript path.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://jordyf15.github.io/digi-memory/",
    repoUrl: "https://github.com/jordyf15/digi-memory",
    imageUrl: digiMemoryImg,
  },
  {
    id: "project-41",
    title: "Wiki Viewer",
    description:
      "A wikipedia viewer which allow users to search for related wikipedia entries based on the word they type in the search bar and also get a random wikipedia entry if the users want it. This project was made for the FreeCodeCamp's Take Home Project.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/LYRxwpP",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Wikipedia-Viewer",
    imageUrl: wikipediaViewerImg,
  },
  {
    id: "project-40",
    title: "Difooding",
    description:
      "A web application where users can search for all kinds of food recipes by name or through filter which are divided by 3 types: categories, area, and ingridients. This project was made for the Dicoding's Fundamental Front-end Web Development Course.",
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
    title: "Todo List",
    description:
      "A web based todo list application where users can organize their todos. This project was made for the Odin Project's Full Stack Javascript path.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/todo-list/",
    repoUrl: "https://github.com/jordyf15/todo-list",
    imageUrl: todoListImg,
  },
  {
    id: "project-38",
    title: "Weather App",
    description:
      "A web based weather application where users can view the weather information of the location they searched for. This project was made for the Odin Project's Full Stack Javascript path.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/weather-app/",
    repoUrl: "https://github.com/jordyf15/weather-app",
    imageUrl: weatherAppImg,
  },
  {
    id: "project-37",
    title: "Odin Library",
    description:
      "A web based library application where users can save their books information such as author, title, pages, and the read status. This project was made for the Odin Project's Full Stack Javascript path.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/odin-library/",
    repoUrl: "https://github.com/jordyf15/odin-library",
    imageUrl: odinLibraryImg,
  },
  {
    id: "project-36",
    title: "Tic Tac Toe",
    description:
      "A web based Tic Tac Toe game where users can choose to play against an Computer or another User. This project was made for the Odin Project's Full Stack Javascript path.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/javascript-tic-tac-toe/",
    repoUrl: "https://github.com/jordyf15/javascript-tic-tac-toe",
    imageUrl: ticTacToeImg,
  },
  {
    id: "project-35",
    title: "Restaurant Page",
    description:
      "A restaurant webpage build with only DOM manipulation. This project was made for the Odin Project's Full Stack Javascript path.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/restaurant-page/",
    repoUrl: "https://github.com/jordyf15/restaurant-page",
    imageUrl: restaurantPageImg,
  },
  {
    id: "project-34",
    title: "CLI Chess",
    description:
      "A command line chess game where users can play against a player or a Computer. The user can also save and load their game. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/ruby-chess",
    imageUrl: cliChessImg,
  },
  {
    id: "project-33",
    title: "CLI Tic Tac Toe",
    description:
      "A command line Tic Tac Toe game where 2 players can play against each other. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/ruby-tic-tac-toe",
    imageUrl: cliTicTacToeImg,
  },
  {
    id: "project-32",
    title: "CLI Hangman",
    description:
      "A command line hangman game with a save and load feature. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/ruby-hangman",
    imageUrl: cliHangmanImg,
  },
  {
    id: "project-31",
    title: "CLI Mastermind",
    description:
      "A command line mastermind game where the user can play against a computer either as a secret code maker or a secret code breaker. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/ruby-mastermind",
    imageUrl: cliMasterMindImg,
  },
  {
    id: "project-30",
    title: "Calculator",
    description:
      "A simple web based calculator. This project was made for the Odin Project's Foundation path.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/calculator/",
    repoUrl: "https://github.com/jordyf15/calculator",
    imageUrl: javascriptCalculatorImg,
  },
  {
    id: "project-29",
    title: "Etch a Sketch",
    description:
      "A web based application of something between a sketchpad and an Etch-A-Sketch. This project was made for the Odin Project's Foundation path.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/etch-a-sketch/",
    repoUrl: "https://github.com/jordyf15/etch-a-sketch",
    imageUrl: etchASketchImg,
  },
  {
    id: "project-28",
    title: "Rock Paper Scissors",
    description:
      "A web based rock-paper-scissors game where the user will play against a computer until one wins 5 rounds. This project was made for the Odin Project's Foundation path.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/rock-paper-scissors/",
    repoUrl: "https://github.com/jordyf15/rock-paper-scissors",
    imageUrl: rockPaperScissorsImg,
  },
  {
    id: "project-27",
    title: "Hololive InfoApp",
    description:
      "An android application where users can view information about 15 Vtubers from Hololive. This project was made for the Dicoding's Beginner Android Development Course.",
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
    title: "Simon Game",
    description:
      "A web based simon game where users can play a simon game for 20 rounds with strict or non-strict mode. This project was made for the FreeCodeCamp's Take Home Project.",
    type: "frontend",
    language: "javascript",
    technologies: [],
    demoUrl: "https://codepen.io/jordyf15/full/XWjqaYw",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Simon-Game",
    imageUrl: simonGameImg,
  },
  {
    id: "project-25",
    title: "Pinterest Clone",
    description:
      "A pinterest clone where users can login with their github account and then can view, link and delete the images they link to in the pinterest clone. This project was made for the FreeCodeCamp's Take Home Project.",
    type: "fullstack",
    language: "javascript",
    technologies: ["React", "MongoDB", "Express"],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Pinterest-Clone",
    imageUrl: pinterestCloneImg,
  },
  {
    id: "project-24",
    title: "Recipe Box",
    description:
      "A web based recipe box where users can create, edit, delete, and keep recipes that have names, ingridients, and directions. This project was made for the FreeCodeCamp's Take Home Project.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/JjROXqg",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Recipe-Box",
    imageUrl: recipeBoxImg,
  },
  {
    id: "project-23",
    title: "Forum Homepage",
    description:
      "FreeCodeCamp Forum HomePage where users can see the most recent posts in FreeCodeCamp forum including it's details. This project was made for the FreeCodeCamp's Take Home Project.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/JjRyOEb",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Forum-HomePage",
    imageUrl: forumHomepageImg,
  },
  {
    id: "project-22",
    title: "Image Searcher",
    description:
      "A web based Image Search Abstraction Layer that allows user to search for images related to the query and also see recent searches. This project was made for the FreeCodeCamp's Take Home Project.",
    type: "fullstack",
    language: "javascript",
    technologies: ["React", "MongoDB", "Express"],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Image-Searcher",
    imageUrl: imageSearcherImg,
  },
  {
    id: "project-21",
    title: "Twitch Json Api",
    description:
      "A web based application that display information whether a list of channels IN Twitch.tv are currently streaming or not. This project was made for the FreeCodeCamp's Take Home Project.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/eYdWOPJ",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Twitch-Json-Api",
    imageUrl: twitchJsonApiImg,
  },
  {
    id: "project-20",
    title: "Local Weather",
    description:
      "A web based local weather application that displays the weather based on the user's current location. This project was made for the FreeCodeCamp's Take Home Project.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/MWjJoxX",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Local-Weather",
    imageUrl: localWeatherImg,
  },
  {
    id: "project-19",
    title: "Drum Machine",
    description:
      "A web based drum machine application where users can play a drum. This project was made for the FreeCodeCamp's Frontend Library Curriculum.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/MWKBNYe",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Drum-Machine",
    imageUrl: drumMachineImg,
  },
  {
    id: "project-18",
    title: "Connecting Four",
    description:
      "A command line connecting four game built with TTD. This project was made for the Odin project's Full Stack Ruby On Rails path.",
    type: "other",
    language: "ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/connecting-four",
    imageUrl: connectingFourImg,
  },
  {
    id: "project-17",
    title: "Open Music API",
    description:
      "An API where users can perform a CRUD operation of songs and playlists. This project was made for the Dicoding's Fundamental BackEnd Development Course.",
    type: "backend",
    language: "javascript",
    technologies: ["Postgres", "Redis", "Hapi"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/Open-Music-API_Dicoding-Fundamental-BackEnd-Development-Project",
    imageUrl: apiImg,
  },
  {
    id: "project-16",
    title: "Bookshelf API",
    description:
      "An API where users can perform a CRUD operation of books. This project was made for the Dicoding's Beginner BackEnd Development Course.",
    type: "backend",
    language: "javascript",
    technologies: ["Hapi"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/BookShelf-API-Dicoding-Beginner-BackEnd-Development-Project",
    imageUrl: apiImg,
  },
  {
    id: "project-15",
    title: "Garuda Game Forum API",
    description:
      "An API which have the basic features of a forum web application and was implemented using clean architecture and 100% test coverage. This project was made for the Dicoding's Expert Backend Development Course.",
    type: "backend",
    language: "javascript",
    technologies: ["Hapi", "Postgres"],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/garuda-game-forum-api",
    imageUrl: apiImg,
  },
  {
    id: "project-14",
    title: "File Metadata Microservice",
    description:
      "A File Metadata Microservice where users can upload a file and receive it's meta data such as file name and size. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-File-Metadata-Microservice",
    imageUrl: fileMetadataMicroserviceImg,
  },
  {
    id: "project-13",
    title: "Exercise Tracker Microservice",
    description:
      "A Exercise Tracker Microservice where users can add and get exercises for a user. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    type: "backend",
    language: "javascript",
    technologies: ["Express", "MongoDB"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-Exercise-Tracker-Microservice",
    imageUrl: exerciseTrackerMicroserviceImg,
  },
  {
    id: "project-12",
    title: "URL Shortener Microservice",
    description:
      "A URL Shortener Microservice where users can shorten a url. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    type: "backend",
    language: "javascript",
    technologies: ["Express", "MongoDB"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-URL-Shortener-Microservice",
    imageUrl: urlShortenerMicroserviceImg,
  },
  {
    id: "project-11",
    title: "Request Header Parser Microservice",
    description:
      "A microservice that allows the user to get their IP Address, Preferred Languages, and System Information of their current device. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "",
    repoUrl:
      "https://github.com/jordyf15/FreeCodeCamp-Request-Header-Parser-Microservice",
    imageUrl: requestHeaderParserMicroserviceImg,
  },
  {
    id: "project-10",
    title: "Timestamp Microservice",
    description:
      "A microservice that will return a unix and utc timestamp of the inputted time to the user. This project was made for the FreeCodeCamp's API and Microservice Curriculum.",
    type: "backend",
    language: "javascript",
    technologies: ["Express"],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Timestamp-Microservice",
    imageUrl: timestampMicroservice,
  },
  {
    id: "project-9",
    title: "Pomodoro Clock",
    description:
      "A web based pomodoro clock application. This project was made for the FreeCodeCamp's Frontent Library Curriculum.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/jOWdaWV",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Pomodoro-Clock",
    imageUrl: pomodoroClockImg,
  },
  {
    id: "project-8",
    title: "React Calculator",
    description:
      "A web based calculator application. This project was made for the FreeCodeCamp's Frontent Library Curriculum.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/BaogOGM",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Javascript-Calculator",
    imageUrl: reactCalculatorImg,
  },
  {
    id: "project-7",
    title: "Markdown Previewer",
    description:
      "A web based markdown previewer where the user can immediately see the preview of the markdown that they wrote. This project was made for the FreeCodeCamp's Frontent Library Curriculum.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/PoZoKqz",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-MarkdownPreviewer",
    imageUrl: markdownPreviewerImg,
  },
  {
    id: "project-6",
    title: "Random Quote Machine",
    description:
      "A web based Random Quote Machine that displays new and random quote everytime the user clicks on the 'New Quote' button and also allows the user to share it on Twitter and Tumblr. This project was made for the FreeCodeCamp's Frontent Library Curriculum.",
    type: "frontend",
    language: "javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/OJyeoar",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Random-Quote-Machine",
    imageUrl: randomQuoteMachineImg,
  },
  {
    id: "project-5",
    title: "US GDP's Bar Chart",
    description:
      "A data visualization of The United States's GDP in the form of a Bar Chart. This project was made for the Freecodecamp's Data Visualization Curriculum.",
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
    title: "Professional Bicycle Racing Doping Cases's Scatter Plot",
    description:
      "A data visualization of The Professional Bicycle Racing Doping Cases in the form of a Scatter Plot. This project was made for the Freecodecamp's Data Visualization Curriculum.",
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
    title: "Monthly Global Land-Surface Temperature's Heat Map",
    description:
      "A data visualization of The Monthly Global Land-Surface Temperature in the form of a Heat Map. This project was made for the Freecodecamp's Data Visualization Curriculum.",
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
    title: "US Educational Attainment's Choropleth Map",
    description:
      "A data visualization of The United States Educational Attainment in the form of a Choropleth Map. This project was made for the Freecodecamp's Data Visualization Curriculum.",
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
    title: "Video Game Sale's Tree Map",
    description:
      "A data visualization of The Video Game Sale in the form of a Tree Map. This project was made for the Freecodecamp's Data Visualization Curriculum.",
    type: "frontend",
    language: "javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/vYGOGdV",
    repoUrl:
      "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: videoGameSaleTreeImg,
  },
];

export default projectsEN;
