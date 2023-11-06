
let keyval = new Keyval(KEYVAL_API_KEY);

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
  /*let input = createInput();
  /input.position(100, 275);
  /button = createButton("Fetch");
  /button.mousePressed(fetchData);
  /button.position(100, 300);
  */

  //movie bar
  const Mbutton = createButton("Load Scroovie");
  Mbutton.position(windowWidth / 2 - 250, windowHeight / 2 - 200);
  Mbutton.mousePressed(loadMovie);
  
  loadPerson = createInput();
  loadPerson.size(85);
  loadPerson.position(windowWidth / 2 - 145, windowHeight / 2 - 200);

  //actor bar
  const Abutton = createButton("Load Actor");
  Abutton.position(windowWidth / 2, windowHeight / 2 - 200);
  Abutton.mousePressed(loadActor);
    
    inputActor = createInput();
    inputActor.size(85);
    inputActor.position(windowWidth / 2 + 85, windowHeight / 2 - 200);
}

function loadMovie() {
  data = loadJSON(`https://api.themoviedb.org/3/search/movie?query=${loadPerson.value()}&api_key=`+ TMDB_API_KEY, function(data){
    const myMovie = new Movie(data);
    print(data);
    myMovie.getImage(windowWidth / 2 - 230, windowHeight / 2 - 150);
    text(myMovie.getName(), 10, 10);
    text(myMovie.getAbout(), 10, 20);
    text(myMovie.getScore(), 10, 50);
    text(myMovie.getDate(), 10, 60);
  } );

  
  
  
}

function loadActor() {
  data = loadJSON(`https://api.themoviedb.org/3/search/person?api_key=efa84f4c1b06a034b1928da13517c220&query=${inputActor.value()}`, function(data){
    const myActor = new Actor(data);
    print(data);
    myActor.getImage(windowWidth / 2 + 30, windowHeight / 2 - 150);
    text(myActor.getName(), windowWidth / 2, windowHeight / 2 - 100);
    text(myActor.getScore(), windowWidth / 2 + 85, windowHeight / 2 - 80);
  } );
}

  function draw() {
    background(128, 0, 128);

  }

  function fetchData() {
    keyval.set("test", input.value(), function (data) {
      keyval.get("test", function (data) {
        console.log(data);
      });
    });
  }