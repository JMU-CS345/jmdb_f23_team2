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

    update(){
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

<<<<<<< Updated upstream:user page/userProfileData.js
    addFriend(friend) {
        this.friends.push(friend);
        this.update();
    }

    removeFriend(friend) {
        this.friends.splice(this.friends.indexOf(friend), 1);
        this.update();
    }

    

}
=======
function createAccount() {
    tempUser = new User("Josh", "Derrow", "joshb12d@gmail.com", "password");
}
>>>>>>> Stashed changes:site/userProfileData.js
