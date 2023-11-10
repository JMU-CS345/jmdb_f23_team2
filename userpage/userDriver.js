function setup (){
//    user = localStorage.getItem(username);
//    temp = userProfileData.createAccount(user);
    //Create Temp User
    let temp = new User("Josh", "Derrow", "joshb12d@gmail.com", "password");
    temp.addMovieToFavorite("The Dark Knight");
    temp.addMovieToRecentlyWatched("The Dark Knight Rises");
    temp.addRating("Joker", "great movie!");



    //title
    let title = createP(temp.getFirstName() + "'s Profile");
    title.position(windowWidth / 2 - 90, 20);
    title.style("color", "#CBB677");
    title.style("font-size", "36px");

    //Creates and Displys User Information
    let name = createP("Name: " + temp.getFirstName() + " " + temp.getLastName());
    let email = createP("Email: " + temp.getEmail());
    let favMovies = createP("Favorite Movies: " + temp.getFavoriteMovies());
    let reviews = createP("Reviews: " + temp.getReviews());
    let recentlyWatched = createP("Recently Watched: " + temp.getRecentlyWatched());
    let movieWatchList = createP("Movie Watch List: " + temp.getMovieWatchList());
    let friends = createP("Friends: " + temp.getFriends());
    let ratings = createP("Ratings: " + temp.getRatings());
    name.position(10, 100);
    email.position(10, 125);
    favMovies.position(10, 150);
    reviews.position(10, 175);
    recentlyWatched.position(10, 200);
    movieWatchList.position(10, 225);
    friends.position(10, 250);
    ratings.position(10, 275);
    name.style("color", "#CBB677");
    email.style("color", "#CBB677");
    favMovies.style("color", "#CBB677");
    reviews.style("color", "#CBB677");
    recentlyWatched.style("color", "#CBB677");
    movieWatchList.style("color", "#CBB677");
    friends.style("color", "#CBB677");
    ratings.style("color", "#CBB677");
    name.style("font-size", "24px");
    email.style("font-size", "24px");
    favMovies.style("font-size", "24px");
    reviews.style("font-size", "24px");
    recentlyWatched.style("font-size", "24px");
    movieWatchList.style("font-size", "24px");
    friends.style("font-size", "24px");
    ratings.style("font-size", "24px");

    //Navigation Buttons
    let friendsButton = createButton("View Friends");
    friendsButton.position(windowWidth - 100, 100);
    let homeButton = createButton("Home");
    homeButton.position(windowWidth - 160, 100);
}

function draw (){
    
}
