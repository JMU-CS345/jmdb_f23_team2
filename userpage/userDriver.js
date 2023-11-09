function setup (){
//    user = localStorage.getItem(username);
//    temp = userProfileData.createAccount(user);
    //Create Temp User
    let temp = new User("Josh", "Derrow", "joshb12d@gmail.com", "password");

    //title
    let title = createP(temp.getFirstName() + "'s Profile");
    title.position(windowWidth / 2 - 90, 20);
    title.style("color", "#CBB677");
    title.style("font-size", "36px");

    //Creates and Displys User Information
    let name = createP(temp.getFirstName() + " " + temp.getLastName());
    let email = createP(temp.getEmail());
    let favMovies = createP(temp.getFavoriteMovies());
    let reviews = createP(temp.getReviews());
    let recentlyWatched = createP(temp.getRecentlyWatched());
    let movieWatchList = createP(temp.getMovieWatchList());
    let friends = createP(temp.getFriends());
    let ratings = createP(temp.getRatings());
    name.position(10, 40);
    email.position(10, 60);
    favMovies.position(10, 80);
    reviews.position(10, 100);
    recentlyWatched.position(10, 120);
    movieWatchList.position(10, 140);
    friends.position(10, 160);
    ratings.position(10, 180);
    name.style("color", "#CBB677");
    email.style("color", "#CBB677");
    favMovies.style("color", "#CBB677");
    reviews.style("color", "#CBB677");
    recentlyWatched.style("color", "#CBB677");
    movieWatchList.style("color", "#CBB677");
    friends.style("color", "#CBB677");
    ratings.style("color", "#CBB677");
    name.style("font-size", "12px");
    email.style("font-size", "12px");
    favMovies.style("font-size", "12px");
    reviews.style("font-size", "12px");
    recentlyWatched.style("font-size", "12px");
    movieWatchList.style("font-size", "12px");
    friends.style("font-size", "12px");
    ratings.style("font-size", "12px");
}

function draw (){
    
}
