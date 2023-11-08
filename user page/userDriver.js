function setup() {
    createCanvas(0, 0);

    //Create Temp User
    temp = createAccount("Josh", "Derrow", "joshb12d@gmail.com", "password");

    //title
    let title = createP(temp.getFirstName() + "'s Profile");
    title.position(windowWidth / 2 - 90, 20);
    title.style("color", "#CBB677");
    title.style("font-size", "36px")
}

function draw() {
    background(69, 0, 132);
}

function createAccount(firstName, lastName, email, password) {
    tempUser = new User(firstName, lastName, email, password);
    return tempUser;
}