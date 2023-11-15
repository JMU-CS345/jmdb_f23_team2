let movie;

function setup() {
    const watchlist = createButton("Add To Watch List");
    const seen = createButton("Add To Seen");
    const favorites = createButton("Add To Favorite");
    watchlist.mousePressed(addToWatchList);
    seen.mousePressed(addToSeen);
    favorites.mousePressed(addToFavorites);
    data = loadJSON(`https://api.themoviedb.org/3/search/movie?query=$inception&api_key=`+ TMDB_API_KEY, function(data){
    const myMovie = new Movie(data);
    print(data);
    myMovie.getBigImage(windowWidth, windowHeight / 2 - 150);
    myMovie.getBackground();
    text(myMovie.getName(), 10, 10);
    text(myMovie.getAbout(), 10, 20);
    text(myMovie.getScore(), 10, 50);
    text(myMovie.getDate(), 10, 60);
  } );
    //movie.getBigImage(10,10);
    //movie.getImage(50,50);
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