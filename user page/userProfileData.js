class User {
    favoriteMovies = [];
    reviews = [];
    recentlyWatchedMovies = [];
    movieWatchlist = [];
    friends = [];
    ratings = [];

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        keyval.set(email, createJSONlayout(), none)
    }

    constructor(username) {
        userData = loadJSON(keyval.get(username, none));
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.friends = userData.friends;
        this.recentlyWatchedMovies = userData.recentlyWatchedMovies;
        this.movieWatchlist = userData.movieWatchList;
        this.favoriteMovies = userData.favoriteMovies;
        this.reviews = userData.reviews;
        this.ratings = userData.ratings;
    }

    update() {
        keyval.set(email, createJSONlayout(), none)
    }

    createJSONlayout() {
        userJSON = {
            "firstName": this.firstName,
            "lastName": this.lastName,
            "email": this.email,
            "password": this.password,
            "friends": this.friends,
            "recentlyWatchedMovies": this.recentlyWatchedMovies,
            "movieWatchList": this.movieWatchlist,
            "favoriteMovies": this.favoriteMovies,
            "reviews": this.reviews,
            "ratings": this.ratings
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
        this.ratings.splice(this.ratings.indexOf(ratings), 1);
        this.update();
    }

    addMovie(movie, category) {
        switch(category) {
            case "favorite":
                this.favoriteMovies.push(movie);
                this.update();
                break;
            case "recent":
                this.recentlyWatchedMovies.push(movie);
                this.update();
                break;
            case "watchlist":
                this.movieWatchlist.push(movie);
                this.update();
                break;
            default:
                break;
        }
    }

    removeMovie(movie, category) {
        switch(category) {
            case "favorite":
                this.favoriteMovies.splice(this.favoriteMovies.indexOf(movie), 1);
                this.update();
                break;
            case "recent":
                this.recentlyWatchedMovies.splice(this.recentlyWatchedMovies.indexOf(movie), 1);
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
    
    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }
}