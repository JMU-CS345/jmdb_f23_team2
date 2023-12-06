let keyval = new Keyval(KEYVAL_API_KEY);
let error;
let newMovies;

function setup() {
  createCanvas(0, 0);

  // Title
  let title = createP("Scroovie Home");
  title.position(windowWidth / 2 - 170, -35);
  title.style("color", textColor);
  title.style('font-family', Font);
  title.style("font-size", "55px");

  // Navigation buttons
  let userPageButton = createButton("To User Page");
  userPageButton.position(10, 10);
  userPageButton.mousePressed(goToUserPage);

  // Input box/text fields
  const Mbutton = createButton("Load Scroovie");
  Mbutton.position(windowWidth / 2 - 250, windowHeight / 2 - 350);
  Mbutton.mousePressed(loadMovie);

  loadPerson = createInput();
  loadPerson.size(85);
  loadPerson.position(windowWidth / 2 - 145, windowHeight / 2 - 350);

  const Abutton = createButton("Load Actor");
  Abutton.position(windowWidth / 2, windowHeight / 2 - 350);
  Abutton.mousePressed(loadActor);

  inputActor = createInput();
  inputActor.size(85);
  inputActor.position(windowWidth / 2 + 85, windowHeight / 2 - 350);

  const group = createDiv();
  group.child(Mbutton);
  group.child(loadPerson);
  group.child(Abutton);
  group.child(inputActor);

  // "NEW MOVIES" text
  newMovies = createDiv("NEW MOVIES");
  newMovies.position(windowWidth / 2 - 650, windowHeight / 2 - 160);
  newMovies.style("color", textColor);
  newMovies.style('font-family', Font);
  newMovies.style("font-size", "36px");

  let username = localStorage.getItem("user");
  User.loadUser(username, (user) => {
    updateUI(user);
  });

  data = loadJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=" + TMDB_API_KEY, (data) => {
    const myMovie = new Movie(data);
    arraySize = myMovie.getMovieCount();
    myMovie.clearMovieList();
    let depth = -100;
    let xPos = 400;
    for (let i = 0; i < arraySize; i++) {
      if (i % 8 == 0 && i != 0) {
        depth = depth + 150;
        xPos = 400;
      }
      myMovie.getAllImages(windowWidth / 2 - xPos, windowHeight / 2 + depth - 50, i);
      xPos -= 100;
    }
  });
}

function loadMovie() {
  newMovies = createP("NEW MOVIES");
  error = createP();
  data = loadJSON(`https://api.themoviedb.org/3/search/movie?query=${loadPerson.value()}&api_key=` + TMDB_API_KEY, (data) => {
    const myMovie = new Movie(data);
    arraySize = myMovie.getMovieCount();
    myMovie.clearMovieList();
    let depth = - 100;
    let xPos = 400;
    if (arraySize == 0) {
      error = createP("No movies found matching that name");
      error.position(windowWidth / 2 - 250, 150);
      error.style("color", errorColor);
      error.style('font-family', Font);
      error.style("font-size", "36px")
    }
    if (arraySize > 0) {
      error.html("");
    }
    for (let i = 0; i < arraySize; i++) {
      if (i % 8 == 0 && i != 0) {
        depth = depth + 150;
        xPos = 400;
      }
      myMovie.getAllImages(windowWidth / 2 - xPos, windowHeight / 2 + depth - 50, i);
      xPos -= 100;
    }
    myMovie.checkLen();

  });

}

function loadActor() {
  data = loadJSON(`https://api.themoviedb.org/3/search/person?api_key=efa84f4c1b06a034b1928da13517c220&query=${inputActor.value()}`, function (data) {
    const myActor = new Actor(data);
    print(data);
    myActor.getImage(windowWidth / 2 + 200, windowHeight / 2 - 300);
    text(myActor.getName(), windowWidth / 2, windowHeight / 2 - 100);
    text(myActor.getScore(), windowWidth / 2 + 85, windowHeight / 2 - 80);
  });
}

function draw() {
  background(255);
  background(69, 0, 132);
}

function fetchData() {
  keyval.set("test", input.value(), function (data) {
    keyval.get("test", function (data) {
      console.log(data);
    });
  });
}

function updateUI(user) {
  let name = createP("Hello, " + user.getFirstName());
  name.position(windowWidth - 100, 0);
  name.style('font-family', Font);
  name.style("color", textColor);
  name.style("font-size", "20px")
}