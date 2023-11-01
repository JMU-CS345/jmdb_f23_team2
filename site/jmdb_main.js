
let button;
let apiKey = new Keyval(TMDB_API_KEY);
let keyval = new Keyval(KEYVAL_API_KEY);
let input;
let person;

function setup() {
    createCanvas(800, 600);
    input = createInput();
    button = createButton("Fetch");
    button.mousePressed(fetchData);
    loadPerson();

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

// Load Person
function loadPerson(){
    url = "https://api.themoviedb.org/3/person/10?api_key=" + apiKey;
    person = loadJSON(url, personData);
  }

// Person Data
function personData(data){
    if (person.profile_path != null){
      // Creates Picture
      picture = createElement("img");
      picture.attribute("src", "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + person.profile_path);
      picture.position(10, 10);
      picture.size(200, 300);
    } else {
      if (picture){
        picture.remove();
      }
    }
    }
  }