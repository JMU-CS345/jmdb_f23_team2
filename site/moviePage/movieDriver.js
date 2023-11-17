let movie;
let myPos = 50; //adjust height of all text
let myColor = "white"; // adjust color

function setup() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);


    // Decode the data and parse it as JSON
    //let decodedData = decodeURIComponent(encodedData);
    //let movieData = JSON.parse(decodedData);
    const dataValue = urlParams.get('data');
    console.log(dataValue);

    Title = createP();
    let boxSize = 100;
    rect(200, 1500, 1500);
    const watchlist = createButton("Add To Watch List");
    watchlist.position(0, 20);
    const seen = createButton("Add To Seen");
    seen.position(0, 40);
    const favorites = createButton("Add To Favorite");
    favorites.position(0, 60);
    watchlist.mousePressed(addToWatchList);
    seen.mousePressed(addToSeen);
    favorites.mousePressed(addToFavorites);
    console.log(queryString);
    //console.log(URLSearchParams.get(22599));

    //const myMovie = new Movie(data);

    //myMovie.getBigImage(windowWidth, windowHeight);

    //find not search
    https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}
    data = loadJSON('https://api.themoviedb.org/3/search/movie?query=$'+ dataValue +'&api_key=' + TMDB_API_KEY, function (data) {
        const myMovie = new Movie(data);

        myMovie.getBigImage(windowWidth, windowHeight);

        Title = createP("Title: " + myMovie.getName());
        Title.position(windowWidth / 2, myPos);
        Title.style("font-size", "46px");
        Title.style('color', myColor);

        Release = createP("Date: " + myMovie.getDate());
        Release.position(windowWidth / 2, myPos + 50);
        Release.style("font-size", "46px");
        Release.style('color', myColor);

        AboutTitle = createP("About: ")
        AboutTitle.position(windowWidth / 2, myPos + 100);
        AboutTitle.style("font-size", "46px");
        AboutTitle.style('color', myColor);

        About = createP(myMovie.getAbout());
        About.position(windowWidth / 2, myPos + 170);
        About.style('max-width', '400px');
        About.style("font-size", "30px");
        About.style('color', myColor);
    });

}

function addToWatchList(username) {
    user = new User(username);
    user.addMovie(movie, "watchlist");
}

function addToSeen(username) {
    user = new User(username);
    user.addMovie(movie, "seen");
}

function addToFavorites() {
    user = new User(username);
    user.addMovie(movie, "favorite");
}

function loadMovie(movieName) {
    this.movie = loadMovie(movieName);
}