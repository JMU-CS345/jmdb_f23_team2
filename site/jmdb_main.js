
let keyval = new Keyval(KEYVAL_API_KEY);

function setup() {
  createCanvas(800, 600);
  let input = createInput();
  input.position(100, 275);
  button = createButton("Fetch");
  button.mousePressed(fetchData);
  button.position(100, 300);

  //movie bar
  const Mbutton = createButton("Load Person");
  Mbutton.position(0, 0);
  Mbutton.mousePressed(load);
  
  loadPerson = createInput();
  loadPerson.size(85);
  loadPerson.position(100, 0);
}

function load() {
  data = loadJSON(`https://api.themoviedb.org/3/search/movie?query=${loadPerson.value()}&api_key=`+ TMDB_API_KEY, function(data){
    const myMovie = new Movie(data);
    print(data);
    myMovie.getImage(200, 100);
    //text(myMovie.getName(), 10, 10);
    //text(myMovie.getAbout(), 10, 20);
    //text(myMovie.getScore(), 10, 50);
    //text(myMovie.getDate(), 10, 60);
  } );
  
  
}

  function draw() {
    background(0);
  }

  function fetchData() {
    keyval.set("test", input.value(), function (data) {
      keyval.get("test", function (data) {
        console.log(data);
      });
    });
  }