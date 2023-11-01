let createAccountButton;
let firstNameBox;
let lastNameBox;
let emailBox;
let passwordBox;

function setup() {
    createCanvas(400,400);

    createAccountButton = createButton("Create Account");
    firstNameBox = createInput();
    lastNameBox = createInput();
    emailBox = createInput();
    passwordBox = createInput();
    firstNameBox.position(100, 40);
    lastNameBox.position(100, 80);
    emailBox.position(100, 120);
    passwordBox.position(100, 160);
    createAccountButton.position(100, 220);
    createAccountButton.mousePressed(createAccount);
}

function draw() {
    background(0);
}

function createAccount() {
    tempUser = new User(firstNameBox.value(), lastNameBox.value(), emailBox.value(), passwordBox.value());
}

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