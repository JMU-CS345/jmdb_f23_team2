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