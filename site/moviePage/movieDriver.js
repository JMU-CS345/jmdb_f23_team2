let movie;
let myPos = 50; //adjust height of all text
let myColor = "#CBB677"; // adjust color
let myFont = Font;
let data;
let cast;
let rating;
let review;

function preload() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const dataValue = urlParams.get('data');

    data = loadJSON('https://api.themoviedb.org/3/movie/' + dataValue + '?api_key=' + TMDB_API_KEY);
    cast = loadJSON('https://api.themoviedb.org/3/movie/' + dataValue + '/credits?api_key=' + TMDB_API_KEY);
}

function setup() {
    Title = createP();
    rect(200, 1500, 1500);

    const Watchlist = createButton("Add To Watch List");
    Watchlist.position(30, 600);
    Watchlist.mousePressed(addToWatchlist);
    const removeW = createButton("Remove From Watch List");
    removeW.position(windowWidth - 180, 600);
    removeW.mousePressed(removeFromWatchlist);


    const seen = createButton("Add To Seen");
    seen.position(30, 630);
    seen.mousePressed(addToSeen);
    const removeS = createButton("Remove From Seen");
    removeS.position(windowWidth - 180, 645);
    removeS.mousePressed(removeFromSeen);

    const favorites = createButton("Add To Favorite");
    favorites.position(30, 660);
    favorites.mousePressed(addToFavorites);
    const removeF = createButton("Remove From Favorite");
    removeF.position(windowWidth - 180, 675);
    removeF.mousePressed(removeFromFavorites);

    ratingText = createP("Rate this movie 0 - 5 stars!");
    ratingText.position(30, 450);
    ratingText.style("font-size", "24px");
    ratingText.style("color", myColor);
    const ratingB = createButton("Add Rating");
    rating = createInput();
    rating.position(30, 500);
    rating.style("width", "160px");
    rating.attribute("type", "number");
    rating.attribute("step", "0.1");
    rating.attribute("min", "0");
    rating.attribute("max", "5");
    rating.attribute("placeholder", "0");
    ratingB.position(200, 500);
    ratingB.mousePressed(addRating);

    reviewText = createP("Write a review!");
    reviewText.position(30, 150);
    reviewText.style("font-size", "24px");
    reviewText.style("color", myColor);
    review = createInput();
    review.position(30, 200);
    review.style("width", "300px");
    review.style("height", "100px");
    const reviewB = createButton("Add Review");
    reviewB.position(30, 307);
    reviewB.mousePressed(addReview);

    //navigation buttons
    let userPageButton = createButton("To User Page");
    userPageButton.position(10, 10);
    userPageButton.mousePressed(goToUserPage);
    let homePageButton = createButton("To Home Page");
    homePageButton.position(10, 40);
    homePageButton.mousePressed(goToHomePage);


    let img = createElement("img");
    if (data.poster_path != null) {
        img.attribute("src", imgUrl + data.poster_path);
    } else {
        img.attribute("src", "../Black_image.jpg");// change to bad jpeg
    }
    //img.attribute("src", imgUrl + data.poster_path);
    img.style("width", "250px");
    img.position((windowWidth / 2) - width * 3, 105);

    
    
    myTitle = data.original_title;
    if(myTitle.length > 40){
        myTitle = myTitle.substring(0, 35) + "...";
    }
    Title = createP(myTitle);
    Title.position((windowWidth / 2) - width * 3, 5);
    Title.style('font-family', Font);
    Title.style("font-size", "50px");
    Title.style('color', textColor);

    Release = createP("Date: " + data.release_date);
    Release.position(windowWidth / 2, myPos + 10);
    Release.style('font-family', Font);
    Release.style("font-size", "46px");
    Release.style('color', textColor);

    AboutTitle = createP("About: ")
    AboutTitle.position(windowWidth / 2, myPos + 60);
    AboutTitle.style('font-family', Font);
    AboutTitle.style("font-size", "46px");
    AboutTitle.style('color', textColor);

    About = createP(data.overview);
    myAbout = data.overview;
    if(myAbout.length > 410){
        myAbout = myAbout.substring(0, 410) + "...";
    }
    About.position(windowWidth / 2, myPos + 130);
    About.style('font-family', Font);
    About.style('max-width', '600px');
    About.style("font-size", "30px");
    About.style('color', textColor);

    displayCast(300, 600);
}

function addToWatchlist() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.addMovie(data.original_title, "Watchlist");
        console.log(user);
    });
}

function removeFromWatchlist() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.removeMovie(data.original_title, "Watchlist");
        console.log(user);
    });
}

function addToSeen() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.addMovie(data.original_title, "seen");
        console.log(user);
    });
}

function removeFromSeen() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.removeMovie(data.original_title, "seen");
        console.log(user);
    });
}

function addToFavorites() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.addMovie(data.original_title, "favorite");
        console.log(user);
    });
}

function removeFromFavorites() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.removeMovie(data.original_title, "favorite");
        console.log(user);
    });
}

function addRating() {
    if (rating.value() > 5 || rating.value() < 0) {
        error = createP("Please enter a rating between 0 and 5");
    }

    User.loadUser(localStorage.getItem('user'), (user) => {
        user.addRating(new Rating(data.original_title, rating.value()));
        console.log(user);
    });
}

function addReview() {
    User.loadUser(localStorage.getItem('user'), (user) => {
        user.addReview(new Review(data.original_title, review.value()));
        console.log(user);
    });
}

function displayCast(x, y) {
    let movieCast = cast.cast;
    let actorName;
    console.log(movieCast);
    for (let i = 0; i < 9; i++) {
        let temp = new Actor(movieCast[i]);
        actorName = temp.getName();
        temp.getImage(x + 15 + (i * 110), y);
    }

}