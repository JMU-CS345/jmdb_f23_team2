function setup() {
    User.loadUser("wgkeppel@gmail.com", (user) => {
        if (user) {
            user.addMovieFavorite("The Dark Knight");
            user.addMovieWatchlist("The Prestige");
            user.addMovieWatchlist("Inception");
            user.addMovieWatchlist("Interstellar");
            user.addMovieSeen("Joker");
            user.addMovieSeen("The Dark Knight");
            user.addMovieSeen("The Dark Knight Rises");
            user.addReview("The Dark Knight", "This is a review for the dark knight");
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

function displayReviews(arr, x, y) {
    if (arr.length <= 0) {
        emptyList = createP("Nothing has been added here yet");
        emptyList.position(x + 10, y + 100);
    } else {
        for (let i = 0; i < Math.min(arr.length, 5); i++) {
            let review = createP(arr[i]);
            review.position(x + 10, y + (i * 27) + 40);
            review.style("color", "#450084");
            review.style("font-size", "24px")
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
    let tempSeen = ["Joker", "The Dark Knight", "The Dark Knight Rises"];
    let tempWatch = ["The Prestige", "Inception", "Interstellar"];
    let tempFav = ["The Dark Knight"];
    let tempRev = ["The Dark Knight: This movie is fantastic, would recommend.", "Joker: This movie had me on the edge of my seat. Loved it!", "Lord of the Rings: Amazing franchise, Peter Jackson is a genius!", "The Martian: Loved Matt Damon in this one.", "FNAF Movie: This movie was very disappointing. The acting was good but the plot was horrid.", "Mario Movie: Jack Black is GOATed!"];
    let tempRating = ["The Dark Knight: 5 stars", "Joker: 4 stars"];
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
    displayRecentlyWatched(temp.getSeen(), leftXPos, recentlyWatchedYPos);


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    let reviews = createP("Reviews: ");
    let reviewsYPos = 780;
    reviews.position(leftXPos, reviewsYPos);
    reviews.style("color", "#CBB677");
    reviews.style("font-size", "24px");
    displayReviews(tempRev, leftXPos, reviewsYPos);

    let ratings = createP("Ratings: ");
    let ratingsYPos = 980;
    displayRatings(tempRating, leftXPos, ratingsYPos);

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
