 
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
  textbox1 = createInput("");
  textbox1.position(0, 100);
  textbox2 = createInput("");
  textbox2.position(0, 200);
  textbox3 = createInput("");
  textbox3.position(0, 300);
  textbox4 = createInput("");
  textbox4.position(0, 350);
  textbox5 = createInput("");
  textbox5.position(0, 400); 
  onOffButton = createButton("Toggle On/Off");
  //movie bar

  //title
  let title = createP("Scroovie");
  title.position(windowWidth / 2 - 90, 20);
  title.style("color", "#CBB677");
  title.style("font-size", "36px")
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
    background(69, 0, 132);

  }

  function fetchData() {
    keyval.set("test", input.value(), function (data) {
      keyval.get("test", function (data) {
        console.log(data);
      });
    });
  }