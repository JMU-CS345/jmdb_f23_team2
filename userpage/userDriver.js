function setup() {
    //user = localStorage.getItem(username);
    //temp = userProfileData.createAccount(user);
    //Create Temp User
    let temp = new User("Josh", "Derrow", "joshb12d@gmail.com", "password");
    temp.addMovieToFavorite("Lord of the Rings: Return of the King");
    temp.addMovieToRecentlyWatched("Lord of the Rings: Return of the King");
    temp.addRating("Hot Rod", 4);
    temp.addMovieToFavorite("The Dark Knight");
    temp.addMovieToRecentlyWatched("The Dark Knight Rises");
    temp.addRating("Joker", 5);

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

    let favMovies = createP("Favorite Movies: ");
    let favMoviesYPos = 180;
    //display(temp.getFavoriteMovies(), leftXPos, favMoviesYPos);
    
    let ratings = createP("Ratings: ");
    let ratingsYPos = 380;
    //display(temp.getRatings(), leftXPos, ratingsYPos);

    let recentlyWatched = createP("Recently Watched: ");
    let recentlyWatchedYPos = 580;
    //display(temp.getRecentlyWatched(), leftXPos, recentlyWatchedYPos);

    let movieWatchList = createP("Movie Watch List: ");
    let movieWatchListYPos = 780;
    display(temp.getMovieWatchList(), leftXPos, movieWatchListYPos);

    let reviews = createP("Reviews: ");
    let reviewsYPos = 980;
    //display(temp.getReviews(), leftXPos, reviewsYPos);


    name.position(leftXPos, nameYPos);
    email.position(leftXPos, emailYPos);
    favMovies.position(leftXPos, favMoviesYPos);
    reviews.position(leftXPos, reviewsYPos);
    recentlyWatched.position(leftXPos, recentlyWatchedYPos);
    movieWatchList.position(leftXPos, movieWatchListYPos);
    ratings.position(leftXPos, ratingsYPos);
    name.style("color", "#CBB677");
    email.style("color", "#CBB677");
    favMovies.style("color", "#CBB677");
    reviews.style("color", "#CBB677");
    recentlyWatched.style("color", "#CBB677");
    movieWatchList.style("color", "#CBB677");
    ratings.style("color", "#CBB677");
    name.style("font-size", "24px");
    email.style("font-size", "24px");
    favMovies.style("font-size", "24px");
    reviews.style("font-size", "24px");
    recentlyWatched.style("font-size", "24px");
    movieWatchList.style("font-size", "24px");
    ratings.style("font-size", "24px");

    //Navigation Buttons
    let friendsButton = createButton("View Friends");
    friendsButton.position(windowWidth - 100, 100);
    let homeButton = createButton("Home");
    homeButton.position(windowWidth - 160, 100);
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
