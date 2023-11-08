function setup (){
    keyval = new Keyval(KEYVAL_API_KEY);
}

function draw (){
    user = localStorage.getItem(username);
    data = keyval.get(user, none, function(err){
    });
}
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