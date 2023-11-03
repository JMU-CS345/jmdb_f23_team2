let button;
let apiKey = new Keyval(TMDB_API_KEY);
let keyval = new Keyval(KEYVAL_API_KEY);
let input;

function setup() {
  createCanvas(800, 600);
  input = createInput();
  input.position(100, 275);
  button = createButton("Fetch");
  button.mousePressed(fetchData);
  button.position(100, 300);

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
}