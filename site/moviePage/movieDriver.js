let movie;

function setup() {
    const watchlist = createButton("Add To Watch List");
    const seen = createButton("Add To Seen");
    const favorites = createButton("Add To Favorite");
    watchlist.mousePressed(addToWatchList);
    seen.mousePressed(addToSeen);
    favorites.mousePressed(addToFavorites);
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