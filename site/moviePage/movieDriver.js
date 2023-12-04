let movie;
let myPos = 50; //adjust height of all text
let myColor = "#CBB677"; // adjust color
let myFont = "Burbank Big Condensed";
let data;

function preload() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const dataValue = urlParams.get('data');

    data = loadJSON('https://api.themoviedb.org/3/movie/' + dataValue + '?api_key=' + TMDB_API_KEY);
}

function setup() {
    Title = createP();
    let boxSize = 100;
    rect(200, 1500, 1500);
    const Watchlist = createButton("Add To Watch List");
    Watchlist.position(10, 500);
    const seen = createButton("Add To Seen");
    seen.position(10, 530);
    const favorites = createButton("Add To Favorite");
    favorites.position(10, 560);
    Watchlist.mousePressed(addToWatchlist);
    seen.mousePressed(addToSeen);
    favorites.mousePressed(addToFavorites);

    //navigation buttons
    let userPageButton = createButton("To User Page");
    userPageButton.position(10, 10);
    userPageButton.mousePressed(goToUserPage);
    let homePageButton = createButton("To Home Page");
    homePageButton.position(10, 40);
    homePageButton.mousePressed(goToHomePage);


    let img = createElement("img");
    img.attribute("src", imgUrl + data.poster_path);
    img.style("width", "250px");
    img.position((windowWidth / 2) - width * 3, 105);


    Title = createP(data.original_title);
    Title.position((windowWidth / 2) - width * 3, 5);
    Title.style('font-family', myFont);
    Title.style("font-size", "50px");
    Title.style('color', myColor);

    Release = createP("Date: " + data.release_date);
    Release.position(windowWidth / 2, myPos + 50);
    Release.style('font-family', myFont);
    Release.style("font-size", "46px");
    Release.style('color', myColor);

    AboutTitle = createP("About: ")
    AboutTitle.position(windowWidth / 2, myPos + 100);
    AboutTitle.style('font-family', myFont);
    AboutTitle.style("font-size", "46px");
    AboutTitle.style('color', myColor);

    About = createP(data.overview);
    About.position(windowWidth / 2, myPos + 170);
    About.style('font-family', myFont);
    About.style('max-width', '400px');
    About.style("font-size", "30px");
    About.style('color', myColor);
}

function addToWatchlist() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.addMovie(data.original_title, "Watchlist");
        console.log(user);
    });
}

function addToSeen() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.addMovie(data.original_title, "seen");
        console.log(user);
    });
}

function addToFavorites() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.addMovie(data.original_title, "favorite");
        console.log(user);
    });
}