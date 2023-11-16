function setup() {

    //title
    let title = createP("Scroovie Social");
    title.position(windowWidth / 2 - 90, 20);
    title.style("color", "#CBB677");
    title.style("font-size", "36px");

    //navigation buttons
    let homePageButton = createButton("To Home Page");
    homePageButton.position(10, 10);
    homePageButton.mousePressed(goToHomePage);
    let userPageButton = createButton("To User Page");
    userPageButton.position(10, 40);
    userPageButton.mousePressed(goToUserPage);
}

function draw() {
}
