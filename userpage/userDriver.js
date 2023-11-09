function setup (){
    user = localStorage.getItem(username);
    temp = userProfileData.createAccount(user);
    createCanvas(0, 0);

    //Create Temp User
    temp = new User("Josh", "Derrow", "joshb12d@gmail.com", "password");

    //title
    let title = createP(temp.getFirstName() + "'s Profile");
    title.position(windowWidth / 2 - 90, 20);
    title.style("color", "#f00000");
    title.style("font-size", "36px");
}

function draw (){
    
}
