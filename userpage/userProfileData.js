class User {
    favoriteMovies = [];
    reviews = [];
    ratings = [];
    movieWatchlist = [];
    seenMovies = [];
    friends = [];

    constructor(email, firstName, lastName, password, keyval = new Keyval(KEYVAL_API_KEY)) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        keyval.set(email, this.createJSONlayout());
        localStorage.setItem('user', user.createJSONlayout());
    }

    //Return a new User if the user exists, otherwise return null
    static loadUser(username, callback, keyval = new Keyval(KEYVAL_API_KEY)) {
        keyval.get(username, (data) => {
            if (data) {
                console.log(data);
                data = JSON.parse(data);
                const user = new User(data.email, data.firstName, data.lastName, data.password);
                user.setFriends(data.friends);
                user.setReviews(data.reviews);
                user.setRatings(data.ratings);
                user.setFavoriteMovies(data.favoriteMovies);
                user.setSeenMovies(data.seenMovies);
                user.setMovieWatchList(data.movieWatchList);

                keyval.set(user.getEmail(), user.createJSONlayout());

                // Call the callback with the user object
                callback(user);
            } else {
                // Call the callback with null when there's an issue with keyval.get
                callback(null);
            }
        });
    }


    update() {
        keyval.set(email, this.createJSONlayout());
    }

    createJSONlayout() {
        let userJSON = {
            "firstName": this.firstName,
            "lastName": this.lastName,
            "email": this.email,
            "password": this.password,
            "friends": this.friends,
            "seenMovies": this.seenMovies,
            "movieWatchList": this.movieWatchlist,
            "favoriteMovies": this.favoriteMovies,
            "reviews": this.reviews,
            "ratings": this.ratings
        }
        return JSON.stringify(userJSON);
    }



    //ADD AND REMOVE FUNCTIONS 
    addFriend(friend) {
        this.friends.push(friend);
        this.update();
    }

    removeFriend(friend) {
        this.friends.splice(this.friends.indexOf(friend), 1);
        this.update();
    }

    addReview(review) {
        this.reviews.push(review);
        this.update();
    }

    removeReview(review) {
        this.reviews.splice(this.reviews.indexOf(review), 1);
        this.update();
    }

    addRating(rating) {
        this.ratings.push(rating);
        this.update();
    }

    removeRating(rating) {
        this.ratings.splice(this.ratings.indexOf(rating), 1);
        this.update();
    }

    addMovie(movie, category) {
        console.log("Inside addMovie category: " + category);
        switch (category) {
            case "favorite":
                this.favoriteMovies.push(movie);
                break;
            case "seen":
                this.seenMovies.push(movie);
                break;
            case "watchlist":
                this.movieWatchlist.push(movie);
                break;
            default:
                break;
        }
    }

    removeMovie(movie, category) {
        switch (category) {
            case "favorite":
                this.favoriteMovies.splice(this.favoriteMovies.indexOf(movie), 1);
                this.update();
                break;
            case "seen":
                this.seenMovies.splice(this.seenMovies.indexOf(movie), 1);
                this.update();
                break;
            case "watchlist":
                this.movieWatchlist.splice(this.movieWatchlist.indexOf(movie), 1);
                this.update();
                break;
            default:
                break;
        }
    }

    //SETTERS
    setFriends(friends) {
        this.friends = friends;
    }

    setReviews(reviews) {
        this.reviews = reviews;
    }

    setRatings(ratings) {
        this.ratings = ratings;
    }

    setFavoriteMovies(favoriteMovies) {
        this.favoriteMovies = favoriteMovies;
    }

    setSeenMovies(seenMovies) {
        this.seenMovies = seenMovies;
    }

    setMovieWatchList(movieWatchList) {
        this.movieWatchList = movieWatchList;
    }



    //GETTERS
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

    getFriends() {
        return this.friends;
    }

    getReviews() {
        return this.reviews;
    }

    getRatings() {
        return this.ratings;
    }

    getFavoriteMovies() {
        return this.favoriteMovies;
    }

    getSeenMovies() {
        return this.seenMovies;
    }

    getLastWatched() {
        return this.seenMovies[this.seenMovies.length - 1];
    }

    getMovieWatchList() {
        return this.movieWatchlist;
    }
}