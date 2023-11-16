function setup() {

  const button = createButton("Load Actor");
  button.position(0, 325);
  button.mousePressed(loadActor);

  inputActor = createInput();
  inputActor.size(85);
  inputActor.position(0, 300);
}

function loadActor() {
  data = loadJSON(`https://api.themoviedb.org/3/search/person?api_key=efa84f4c1b06a034b1928da13517c220&query=${inputActor.value()}`, function (data) {
    const myActor = new Actor(data);
    print(data);
    myActor.getImage(100, 100);
    text(myActor.getName(), 10, 10);
    text(myActor.getScore(), 10, 50);
  });
}