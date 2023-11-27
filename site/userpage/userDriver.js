function setup() {
    User.loadUser("wgkeppel@gmail.com", (user) => {
        if (user) {
            user.addMovie("The Dark Knight", "favorite");
            user.addMovie("Joker", "seen");
            user.addMovie("The Dark Knight", "seen");
            user.addMovie("The Dark Knight Rises", "seen");
            updateUI(user);
        } else {
            console.error("Error loading user or user not found.");
        }
    });

    //navigation buttons
    let homePageButton = createButton("To Home Page");
    homePageButton.position(10, 10);
    homePageButton.mousePressed(goToHomePage);
    let socialPageButton = createButton("To Social Page");
    socialPageButton.position(10, 40);
    socialPageButton.mousePressed(goToSocialPage);

}

function display(arr, x, y) {
    console.log(arr);
    if (arr.length <= 0) {
        emptyList = createP("Nothing has been added here yet");
        emptyList.position(x + 10, y + 100);
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            loadMovie(arr[i], x + 15 + (i * 100), y + 70);
        }
    }
}

function displayRatings(user, x, y) {
    if (user.getRatings().length <= 0) {
        emptyList = createP("Nothing has been added here yet");
        emptyList.position(x + 10, y + 100);
    } else {
    }
}

function displayReviews(user, x, y) {
    if (user.getReviews().length <= 0) {
        emptyList = createP("Nothing has been added here yet");
        emptyList.position(x + 10, y + 100);
    } else {
    }
}

function displayRecentlyWatched(arr, x, y) {
    if (arr.length <= 0) {
        emptyList = createP("Nothing has been added here yet");
        emptyList.position(x + 10, y + 100);
    } else {
        const startIndex = Math.max(0, arr.length - 3);
        
        for (let i = startIndex; i < arr.length; i++) {
            console.log(arr[i]);
            loadMovie(arr[i], x + 15 + ((i - startIndex) * 100), y + 70);
        }
    }
}

function updateUI(temp) {
    let tempArr = ["The Dark Knight", "The Dark Knight Rises"];
    //A string representation of the user object


    //title
    let title = createP(temp.getFirstName() + "'s Profile");
    title.position(windowWidth / 2 - 90, 20);
    title.style("color", "#CBB677");
    title.style("font-size", "36px");

    //Creates and Displys User Information
    let leftXPos = 50;
    let nameYPos = 100;
    let emailYPos = 125;
    let name = createP("Name: " + temp.getFirstName() + " " + temp.getLastName());
    let email = createP("Email: " + temp.getEmail());
    name.position(leftXPos, nameYPos);
    email.position(leftXPos, emailYPos);
    name.style("color", "#CBB677");
    email.style("color", "#CBB677");
    name.style("font-size", "24px");
    email.style("font-size", "24px");

    let favMovies = createP("Favorite Movies: ");
    let favMoviesYPos = 180;
    favMovies.position(leftXPos, favMoviesYPos);
    favMovies.style("color", "#CBB677");
    favMovies.style("font-size", "24px");
    display(temp.getFavoriteMovies(), leftXPos, favMoviesYPos);

    let movieWatchList = createP("Movie Watch List: ");
    let movieWatchListYPos = 380;
    movieWatchList.position(leftXPos, movieWatchListYPos);
    movieWatchList.style("color", "#CBB677");
    movieWatchList.style("font-size", "24px");
    display(temp.getMovieWatchList(), leftXPos, movieWatchListYPos);

    let recentlyWatched = createP("Recently Watched: ");
    let recentlyWatchedYPos = 580;
    recentlyWatched.position(leftXPos, recentlyWatchedYPos);
    recentlyWatched.style("color", "#CBB677");
    recentlyWatched.style("font-size", "24px");
    displayRecentlyWatched(temp.getSeenMovies(), leftXPos, recentlyWatchedYPos);

    let reviews = createP("Reviews: ");
    let reviewsYPos = 780;
    reviews.position(leftXPos, reviewsYPos);
    reviews.style("color", "#CBB677");
    reviews.style("font-size", "24px");
    displayReviews(temp, leftXPos, reviewsYPos);

    let ratings = createP("Ratings: ");
    let ratingsYPos = 980;
    displayRatings(temp, leftXPos, ratingsYPos);

    name.position(leftXPos, nameYPos);
    email.position(leftXPos, emailYPos);
    favMovies.position(leftXPos, favMoviesYPos);
    reviews.position(leftXPos, reviewsYPos);
    recentlyWatched.position(leftXPos, recentlyWatchedYPos);
    movieWatchList.position(leftXPos, movieWatchListYPos);
    ratings.position(leftXPos, ratingsYPos);
    ratings.style("color", "#CBB677");
    ratings.style("font-size", "24px");
}
function draw() {
}
