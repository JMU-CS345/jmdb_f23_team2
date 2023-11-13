class User {
    favoriteMovies = [];
    reviews = [];
    recentlyWatchedMovies = [];
    movieWatchlist = [];
    friends = [];

    constructor(email, firstName = null, lastName = null, password = null, keyval = new Keyval(KEYVAL_API_KEY)) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

        keyval.get(email, function(data){
            //Successfully find the username
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.email = data.email;
            this.password = data.password;
            this.friends = data.friends;
            this.recentlyWatchedMovies = data.recentlyWatchedMovies;
            this.movieWatchlist = data.movieWatchlist;
            this.favoriteMovies = data.favoriteMovies;
            this.reviews = data.reviews;
        
        }, (err) => {
            //User does not exist
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

    addMovieToWatched(movie) {
        this.reviews.push(movie);
    }

    addMovieToFavorite(movie) {
        this.favoriteMovies.push(movie);
    }

    addRating(movie, stars) {
        this.reviews.push(movie, stars);
    }

}