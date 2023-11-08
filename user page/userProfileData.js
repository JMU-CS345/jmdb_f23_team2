class User {
    favoriteMovies = [];
    reviews = [];
    recentlyWatchedMovies = [];
    movieWatchlist = [];
    friends = [];

    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        keyval.set(email, createJSONlayout(), none)
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