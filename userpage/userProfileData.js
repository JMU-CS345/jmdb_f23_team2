class User {
    favoriteMovies = [];
    reviews = [];
    recentlyWatchedMovies = [];
    movieWatchlist = [];
    friends = [];

    constructor(firstName = null, lastName = null, email, password = null, keyval = new Keyval(KEYVAL_API_KEY)) {
        keyval.get(email, this.createJSONlayout(), function (err) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            keyval.set(email, this.createJSONlayout(), none);
        })
    }

    update() {
        keyval.set(email, this.createJSONlayout(), none)
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
}