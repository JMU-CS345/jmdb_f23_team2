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

        keyval.get(email, function(json){
            //Successfully find the username
            let data = loadJSON(json);
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.email = data.email;
            this.password = data.password;
            this.friends = data.friends;
            this.seenMovies = data.seenMovies;
            this.movieWatchlist = data.movieWatchlist;
            this.favoriteMovies = data.favoriteMovies;
            this.reviews = data.reviews;
        }, (err) => {
            //User does not exist
            keyval.set(email, this.createJSONlayout());
        });
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
            "seenMovies": this.seenMovies,
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
            case "seen":
                this.seenMovies.push(movie);
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

    getFriends(){
        return this.friends;
    }

    getReviews(){
        return this.reviews;
    }

    getRatings(){
        return this.ratings;
    }

    getFavoriteMovies(){
        return this.favoriteMovies;
    }

    getSeenMovies(){
        return this.seenMovies;
    }

    getMovieWatchList(){
        return this.movieWatchlist;
    }
}