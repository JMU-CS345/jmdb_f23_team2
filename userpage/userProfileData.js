class User {
    favoriteMovies = [];
    reviews = [];
    recentlyWatchedMovies = [];
    movieWatchlist = [];
    friends = [];

    constructor(firstName = null, lastName = null, email, password = null, keyval = new Keyval(KEYVAL_API_KEY)) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

        keyval.get(email, this.createJSONlayout(), (err) => {
            keyval.set(email, this.createJSONlayout());
        });
    }


    update() {
        keyval.set(email, this.createJSONlayout())
    }

    createJSONlayout() {
        let userJSON = {
            "firstName": this.firstName,
            "lastName": this.lastName,
            "email": this.email,
            "password": this.password,
            "friends": [],
            "recentlyWatchedMovies": [],
            "movieWatchList": [],
            "favoriteMovies": [],
            "reviews": []
        }
        return userJSON
    }

    addFriend(friend) {
        this.friends.push(friend);
        this.update();
    }

    removeFriend(friend) {
        this.friends.splice(this.friends.indexOf(friend), 1);
        this.update();
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getFavoriteMovies() {
        return this.favoriteMovies;
    }

    getReviews() {
        return this.reviews;
    }

    getRecentlyWatched() {
        return this.recentlyWatchedMovies;
    }

    getMovieWatchList() {
        return this.movieWatchlist;
    }

    getFriends() {
        return this.friends;
    }

    getRatings() {
        return this.ratings;
    }

    addMovieToWatchList(movie) {
        this.movieWatchlist.push(movie);
    }

    addMovieToRecentlyWatched(movie) {
        this.recentlyWatchedMovies.push(movie);
    }

    addMovieToWatched(movie) {
        this.reviews.push(movie);
    }

    addMovieToFavorite(movie) {
        this.favoriteMovies.push(movie);
    }

    addRating(movie, review) {
        this.reviews.push(movie, review);
    }

}