class Project {
    name=null;
    live=null;
    code=null;
    image=null;
    constructor(name, live, code, image){
        this.name = name;
        this.live = live;
        this.code = code;
        this.image = image;
    }
}

const projects = [];

function addProject(name, live, code, image){
    const newProject = new Project(name, live, code, image);
    projects.push(newProject);
}

function seedProjects(){
    addProject('Restopedia', 
        'https://Restopedia.jordyf15.repl.co', 
        'https://github.com/jordyf15/Dicoding-Expert-FrontEnd-Web-Development-FinalProject', 
        './images/restopedia.jpeg'
    );
    addProject('Wiki Viewer', 
        'https://codepen.io/jordyf15/full/LYRxwpP', 
        'https://github.com/jordyf15/FreeCodeCamp-Wikipedia-Viewer', 
        './images/wikipedia-viewer.jpeg'
    );
    addProject('Difooding', 
        'https://codepen.io/jordyf15/full/zYKbMxp', 
        'https://github.com/jordyf15/Dicoding-Fundamental-Front-End-Web-Development-FinalProject', 
        './images/difooding.jpeg'
    );
    addProject('Todo-list',
        'https://todo-list.jordyf15.repl.co/',
        'https://github.com/jordyf15/todo-list',
        './images/todo-list.jpeg'
    );
    addProject('Odin Library',
        'https://jordyf15.github.io/odin-library/', 
        'https://github.com/jordyf15/odin-library', 
        './images/odin-library.jpeg'
    );
    addProject('Tic-tac-toe',
        'https://jordyf15.github.io/javascript-tic-tac-toe/', 
        'https://github.com/jordyf15/javascript-tic-tac-toe',
        './images/tic-tac-toe.jpeg'
    );
    addProject('Restaurant Page',
        'https://jordyf15.github.io/restaurant-page/',
        'https://github.com/jordyf15/restaurant-page',
        './images/restaurant-page.jpeg'
    );
    addProject('CLI Chess',
        'https://replit.com/@jordyf15/ruby-chess-1#.replit',
        'https://github.com/jordyf15/ruby-chess',
        './images/cli-chess.jpeg'
    );
    addProject('CLI Tic-tac-toe',
        'https://replit.com/@jordyf15/ruby-tic-tac-toe',
        'https://github.com/jordyf15/ruby-tic-tac-toe',
        './images/cli-tic-tac-toe.jpeg'
    );
    addProject('CLI Hangman',
        'https://replit.com/@jordyf15/ruby-hangman',
        'https://github.com/jordyf15/ruby-hangman',
        './images/cli-hangman.jpeg'
    );
    addProject('CLI Mastermind',
        'https://replit.com/@jordyf15/ruby-mastermind#.replit',
        'https://github.com/jordyf15/ruby-mastermind',
        './images/cli-mastermind.jpeg'
    );
    addProject('Javascript Calculator',
        'https://jordyf15.github.io/calculator/',
        'https://github.com/jordyf15/calculator',
        './images/javascript-calculator.jpeg'
    );
    addProject('Etch a sketch',
        'https://jordyf15.github.io/etch-a-sketch/',
        'https://github.com/jordyf15/etch-a-sketch',
        './images/etch-a-sketch.jpeg'
    );  
    addProject('Rock Paper Scissors',
        'https://jordyf15.github.io/rock-paper-scissors/',
        'https://github.com/jordyf15/rock-paper-scissors',
        './images/rock-paper-scissors.jpeg'
    );
    addProject('Covid Tracker',
        'https://codepen.io/jordyf15/full/qBagBaG',
        'https://github.com/jordyf15/dsc2020-finalproject-fe',
        './images/covid-tracker.jpeg'
    ); 
    addProject('Covid Tracker API',
        null,
        'https://github.com/jordyf15/dsc2020-finalproject-be',
        './images/unavailable.jpg'
    );
    addProject('Simon Game',
        'https://codepen.io/jordyf15/full/XWjqaYw',
        'https://github.com/jordyf15/FreeCodeCamp-Simon-Game',
        './images/simon-game.jpeg'
    );
    addProject('Pinterest Clone',
        'https://freecodecamp-pinterest-clone.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-Pinterest-Clone',
        './images/pinterest-clone.jpeg'
    );
    addProject('Recipe Box',
        'https://codepen.io/jordyf15/full/JjROXqg',
        'https://github.com/jordyf15/FreeCodeCamp-Recipe-Box',
        './images/recipe-box.jpeg'
    );  
    addProject('Forum Homepage',
        'https://codepen.io/jordyf15/full/JjRyOEb',
        'https://github.com/jordyf15/FreeCodeCamp-Forum-HomePage',
        './images/forum-homepage.jpeg'
    );
    addProject('Image Searcher',
        'https://FreeCodeCamp-Image-Searcher-1.jordyf15.repl.co',
        'https://github.com/jordyf15/FreeCodeCamp-Image-Searcher',
        './images/image-searcher.jpeg'
    );
    addProject('Twitch Json API',
        'https://codepen.io/jordyf15/full/eYdWOPJ',
        'https://github.com/jordyf15/FreeCodeCamp-Twitch-Json-Api',
        './images/twitch-json-api.jpeg'
    );
    addProject('Local Weather',
        'https://codepen.io/jordyf15/full/MWjJoxX',
        'https://github.com/jordyf15/FreeCodeCamp-Local-Weather',
        './images/local-weather.jpeg'
    );
    addProject('Anonymous Message Board',
        'https://freecodecamp-anonymous-message-board-2.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-Anonymous-Message-Board',
        './images/anonymous-message-board.jpeg'
    );
    addProject('Stock Price Checker',
        'https://freecodecamp-stock-price-checker.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-Stock-Price-Checker',
        './images/stock-price-checker.jpeg'
    );
    addProject('Drum Machine',
        'https://codepen.io/jordyf15/full/MWKBNYe',
        'https://github.com/jordyf15/FreeCodeCamp-Drum-Machine',
        './images/drum-machine.jpeg'
    );
    addProject('American British Translator',
        'https://freecodecamp-american-british-translator.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-American-British-Translator',
        './images/american-british-translator.jpeg'
    );
    addProject('Sudoku Solver',
        'https://freecodecamp-sudoku-solver.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-Sudoku-Solver',
        './images/sudoku-solver.jpeg'
    );
    addProject('Personal Library',
        'https://FreeCodeCamp-Personal-Library.jordyf15.repl.co',
        'https://github.com/jordyf15/FreeCodeCamp-Personal-Library',
        './images/personal-library.jpeg'
    );  
    addProject('Connecting Four',
        null,
        'https://github.com/jordyf15/connecting-four',
        './images/unavailable.jpg'
    ); 
    addProject('Open Music API',
        null,
        'https://github.com/jordyf15/Open-Music-API_Dicoding-Fundamental-BackEnd-Development-Project',
        './images/unavailable.jpg'
    );
    addProject('Bookshelf API',
        null,
        'https://github.com/jordyf15/BookShelf-API-Dicoding-Beginner-BackEnd-Development-Project',
        './images/unavailable.jpg'
    );
    addProject('Hololive Infoapp',
        'https://drive.google.com/file/d/1bppUqAt43todWgh8biU2ShshN3Fy0UwG/view',
        'https://github.com/jordyf15/Hololive-InfoApp_Dicoding-Beginner-Android-Development-Final-Project',
        './images/hololive-infoapp.jpeg'
    );
    addProject('Issue Tracker',
        'https://freecodecamp-issue-tracker-1.jordyf15.repl.co',
        'https://github.com/jordyf15/FreeCodeCamp-Issue-Tracker',
        './images/issue-tracker.jpeg'
    );
    addProject('Metric Imperial Converter',
        'https://FreeCodeCamp-Metric-Imperial-Converter.jordyf15.repl.co',
        'https://github.com/jordyf15/FreeCodeCamp-Metric-Imperial-Converter',
        './images/metric-imperial-converter.jpeg'
    );
    addProject('File MetaData Microservice',
        'https://file-metadata-microservice.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-File-Metadata-Microservice',
        './images/file-metadata-microservice.jpeg'
    );
    addProject('Exercise Tracker Microservice',
        'https://freecodecamp-project-exercisetracker.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-Exercise-Tracker-Microservice',
        './images/exercise-tracker-microservice.jpeg'
    );
    addProject('Url Shortener Microservice',
        'https://url-shortener-microservices.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-URL-Shortener-Microservice',
        './images/url-shortener-microservice.jpeg'
    );
    addProject('Request Header Parser Microservice',
        'https://request-header-parser-microservice.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-Request-Header-Parser-Microservice',
        './images/request-header-parser-microservice.jpeg'
    );
    addProject('Timestamp Microservice',
        'https://freecodecamp-project-timestamp.jordyf15.repl.co/',
        'https://github.com/jordyf15/FreeCodeCamp-Timestamp-Microservice',
        './images/timestamp-microservice.jpeg'
    );
    addProject('Pomodoro Clock',
        'https://codepen.io/jordyf15/full/jOWdaWV',
        'https://github.com/jordyf15/FreeCodeCamp-Pomodoro-Clock',
        './images/pomodoro-clock.jpeg'
    );
    addProject('React Calculator',
        'https://codepen.io/jordyf15/full/BaogOGM',
        'https://github.com/jordyf15/FreeCodeCamp-Javascript-Calculator',
        './images/react-calculator.jpeg'
    )
    addProject('Markdown Previewer',
        'https://codepen.io/jordyf15/full/PoZoKqz',
        'https://github.com/jordyf15/FreeCodeCamp-MarkdownPreviewer',
        './images/markdown-previewer.jpeg'
    );
    addProject('Random Quote Machine',
        'https://codepen.io/jordyf15/full/OJyeoar',
        'https://github.com/jordyf15/FreeCodeCamp-Random-Quote-Machine',
        './images/random-quote-machine.jpeg'
    );
    addProject('US GDP\'s Bar Chart',
        'https://codepen.io/jordyf15/full/RwrzmWP',
        'https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects',
        './images/us-gdp.jpeg'
    );
    addProject('Professional Bicycle Racing Doping Cases\'s Scatter Plot',
        'https://codepen.io/jordyf15/full/XWdrBMw',
        'https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects',
        './images/scatter-plot.jpeg'
    );
    addProject('Monthly Global Land-Surface Temperature\'s Heat Map',
        'https://codepen.io/jordyf15/full/WNwNZJo',
        'https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects',
        './images/monthly-global-land-surface-temperature-heat-map.jpeg'
    );
    addProject('US Educational Attainment\'s Choropleth Map',
        'https://codepen.io/jordyf15/full/LYNEQZQ',
        'https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects',
        './images/us-educational-attainment-choropleth-map.jpeg'
    );
    addProject('Video Game Sale\'s Tree Map',
        'https://codepen.io/jordyf15/full/vYGOGdV',
        'https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects',
        './images/video-game-sale-tree.jpeg'
    );
}

seedProjects();

function createProjectItems(project){
    const projectItem = document.createElement('li');
    projectItem.className = 'project-items';

    const projectName = document.createElement('p');
    projectName.textContent = project.name;
    projectName.className = 'project-names';
    projectItem.appendChild(projectName);
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'project-image-containers';
    projectItem.appendChild(imageContainer);
    
    const projectImg = document.createElement('img');  
    projectImg.src = project.image;
    projectImg.alt = project.name;
    projectImg.className = 'project-images';
    imageContainer.appendChild(projectImg);

    const projectAnchorsContainer = document.createElement('div');
    projectAnchorsContainer.className = 'project-anchors-containers';
    imageContainer.appendChild(projectAnchorsContainer);

    if(project.live){
        const liveAnchor = document.createElement('a');
        liveAnchor.className = 'project-live-anchors';
        liveAnchor.href = project.live;
        liveAnchor.textContent = 'Live Preview';
        projectAnchorsContainer.appendChild(liveAnchor);
    }

    const codeAnchor = document.createElement('a');
    codeAnchor.className = 'project-code-anchors';
    codeAnchor.href = project.code;
    codeAnchor.textContent = 'View Code';
    projectAnchorsContainer.appendChild(codeAnchor);

    

    return projectItem;
}

const projectList = document.querySelector('#project-list');
projects.forEach(project=>{
    const projectItem = createProjectItems(project);
    projectList.appendChild(projectItem);
});