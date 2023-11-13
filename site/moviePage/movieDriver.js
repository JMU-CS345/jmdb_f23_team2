let movieName;

function setup() {
    const watchlist = createButton("Add To Watch List");
    const seen = createButton("Add To Seen");
    const favorites = createButton("Add To Favorite");
    watchlist.mousePressed(addToWatchList);
    seen.mousePressed(addToSeen);
    favorites.mousePressed(addToFavorites);
    movie.getImage(10,10);
}

function addToWatchList(username) {
    user = new User(username);
    user.addMovie()
}

function addToSeen() {

}

function addToFavorites() {

}

function loadMovie(movieName) {
    this.movieName = movieName;
}