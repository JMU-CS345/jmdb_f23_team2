function setup() {
    //let user = localStorage.getItem("username");
    //temp = new User(user);

    //Create Temp User
    let temp = new User("Josh", "Derrow", "joshb12d@gmail.com", "password");

    //title
    let title = createP(temp.getFirstName() + "'s Profile");
    title.position(windowWidth / 2 - 90, 20);
    title.style("color", "#f00000");
    title.style("font-size", "36px");

    //User Information
    let name = createP(temp.getFirstName() + " " + temp.getLastName());
    let email = createP(temp.getEmail());
    let favMovs = createP(temp.getFavoriteMovies());
    let reviews = createP(temp.getReviews());
    let movieWatchList = createP(temp.getMovieWatchList());
    let friends = createP(temp.getFriends());
    let ratings = createP(temp.getRatings());

}

function draw() {

}
