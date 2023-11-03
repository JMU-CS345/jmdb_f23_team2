class User {
    nextAvailableUserID = 1
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
        keyval.set(this.nextAvailableUserID, createJSONlayout(), none)
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
}

function createAccount() {
    tempUser = new User(firstNameBox.value(), lastNameBox.value(), emailBox.value(), passwordBox.value());
}