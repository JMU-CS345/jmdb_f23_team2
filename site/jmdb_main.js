
let keyval = new Keyval(KEYVAL_API_KEY);

function setup() {
  createCanvas(windowWidth - 4, windowHeight - 4);
  let input = createInput();
  input.position(100, 275);
  button = createButton("Fetch");
  button.mousePressed(fetchData);
  button.position(100, 300);
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