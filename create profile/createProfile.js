 
let keyval = new Keyval(KEYVAL_API_KEY);

function setup() {
  createCanvas(0, 0);
  /*let input = createInput();
  /input.position(100, 275);
  /button = createButton("Fetch");
  /button.mousePressed(fetchData);
  /button.position(100, 300);
  */


  // textboxes
  onOffButton = createButton("Toggle On/Off");
  firstNameBox = createInput("");
  saveComment.attribute("placeholder", "First Name");
  firstNameBox.position(100, 100);
  lastNameBox = createInput("");
  saveComment.attribute("placeholder", "Last Name");
  lastNameBox.position(100, 200);
  emailbox = createInput("");
  saveComment.attribute("placeholder", "Email");
  emailbox.position(100, 300);
  passwordBox = createInput("");
  saveComment.attribute("placeholder", "Password");
  passwordBox.position(100, 350);
  onOffButton = createButton("Toggle On/Off");


  createJSONlayout() {
    userJSON = {
        "firstName": this.firstName,
        "lastName": this.lastName,
        "email": this.email,
        "password": this.password,
        "friends": [],
        "recentlyWatchedMovies": [],
        "movieWatchList": [],
        "favoriteMovies": [],
        "reviews": []
    }
  //movie bar

  //title
  let title = createP("Scroovie");
  title.position(windowWidth / 2 - 90, 20);
  title.style("color", "#CBB677");
  title.style("font-size", "36px")
}


  function draw() {
    background(69, 0, 132);

  }

  function fetchData() {
    keyval.set("test", input.value(), function (data) {
      keyval.get("test", function (data) {
        console.log(data);
      });
    });
  }