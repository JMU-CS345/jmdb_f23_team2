
let button;
let apiKey;
let keyval;
let input;

function setup() {
    createCanvas(800, 600);
    input = createInput();
    button = createButton("Fetch");
    button.mousePressed(fetchData);
    apiKey = new Keyval(TMDB_API_KEY);
    keyval = new Keyval(KEYVAL_API_KEY);
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