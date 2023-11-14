function setup() {

    //Test cases
    
    let username = "wgkeppel@gmail.com";
    let temp1 = new User(username, "will", "keppel", "p");
    loadUser(username)
        .then(user => {
            if (user) {
                // User exists
                console.log(user);
            } else {
                // User does not exist
                console.log("User not found");
            }
        })
        .catch(err => {
            console.error("Error loading user:", err);
        });

    //let user = localStorage.getItem(username);

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
    //display(temp.getLastWatched(), leftXPos, recentlyWatchedYPos);

    let reviews = createP("Reviews: ");
    let reviewsYPos = 780;
    reviews.position(leftXPos, reviewsYPos);
    reviews.style("color", "#CBB677");
    reviews.style("font-size", "24px");
    display(temp.getReviews(), leftXPos, reviewsYPos);

    let ratings = createP("Ratings: ");
    let ratingsYPos = 980;
    //display(temp.getRatings(), leftXPos, ratingsYPos);

    name.position(leftXPos, nameYPos);
    email.position(leftXPos, emailYPos);
    favMovies.position(leftXPos, favMoviesYPos);
    reviews.position(leftXPos, reviewsYPos);
    recentlyWatched.position(leftXPos, recentlyWatchedYPos);
    movieWatchList.position(leftXPos, movieWatchListYPos);
    ratings.position(leftXPos, ratingsYPos);
    ratings.style("color", "#CBB677");
    ratings.style("font-size", "24px");

    //Navigation Buttons
    let friendsButton = createButton("View Friends");
    friendsButton.position(windowWidth - 100, 100);
    friendsButton.mousePressed(goToSocialPage);
    let homeButton = createButton("Home");
    homeButton.position(windowWidth - 160, 100);
    homeButton.mousePressed(goToHomePage);
}

function display(arr, x, y) {
    if (arr.length <= 0) {
        emptyList = createP("Nothing has been added here yet");
        emptyList.position(x + 10, y + 100);
    } else {
        for (let i = 0; i < arr.length; i++) {
            let movie = new Movie(loadMovie(arr[i]));
            movie.getImage(10 + x + (i * 40), 10 + y);
            movie.name(10 + x, 125 + y);
        }
    }
}

function draw() {
}

function goToSocialPage() {
    socialPageURL = "../site/social.html"
}

function goToHomePage() {
    homePageURL = "../site/index.html"
}
