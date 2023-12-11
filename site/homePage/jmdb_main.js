let keyval = new Keyval(KEYVAL_API_KEY);
let error;
let newMovies;

function setup() {
  createCanvas(0, 0);

  // Title
  // let title = createP("Scroovie Home");
  // title.position(windowWidth / 2 - 170, -35);
  // title.style("color", textColor);
  // title.style('font-family', Font);
  // title.style("font-size", "55px");

  // Navigation buttons
  let userPageButton = createButton("To User Page");
  userPageButton.position(10, 10);
  userPageButton.mousePressed(goToUserPage);

  // Input box/text fields
  const Mbutton = createButton("Load Scroovie");
  Mbutton.position(windowWidth / 2 - 450, windowHeight / 2 - 250);
  Mbutton.mousePressed(loadMovie);

  loadPerson = createInput();
  loadPerson.size(85);
  loadPerson.position(windowWidth / 2 - 345, windowHeight / 2 - 250);


  const group = createDiv();
  group.child(Mbutton);
  group.child(loadPerson);

  // "NEW MOVIES" text
  error = createP();
  newMovies = createP("NEW MOVIES");
  newMovies.position(windowWidth / 2 - 400, windowHeight / 2 + -220);
  newMovies.style("color", '#FFD700');
  newMovies.style('font-family', Font);
  newMovies.style("font-size", "36px");

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
  newMovies.html("Showing Results For: \"" +loadPerson.value().toUpperCase()+"\"" );
  newMovies.position(windowWidth / 2 - 400, windowHeight / 2 + -225);
  newMovies.style("color", '#FFFFFF');
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
    }else {
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
