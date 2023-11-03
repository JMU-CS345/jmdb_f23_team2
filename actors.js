let loadButton;
let textbox1;
let personId;
let profilePath;
let personName;
//let apiKey = 1;
let apiKey = "Nqljl58Nyo"

function setup() {
  createCanvas(1600, 800);
  loadButton = createButton("Load Person");
  loadButton.position(0, 420);
  loadButton.mousePressed(loadPerson);

  textbox1 = createInput("");
  textbox1.position(0, 400);

  saveButton = createButton("Save");
  saveButton.position(175, 420);
  saveButton.mousePressed(saveComment);

  textbox2 = createInput("comment");
  textbox2.position(175, 400);

  textbox1.changed(storePersonId);

  let storedId = getItem("personId");
  if (storedId) {
    textbox1.value(storedId);
    loadPerson();
  }
  noLoop();
}

function saveComment() {
  let k = str(personId);
  let newComment = textbox2.value();

  // Overwrite the existing comment (if any) associated with the personId
  //localStorage.setItem(key, newComment);

  let keyValUrl = `https://keyval.learnscrum.xyz/keystore/${k}?apikey=${TMDB_API_KEY}`;

  httpDo(keyValUrl, "PUT", k, newComment);
}

function storePersonId() {
  storeItem("personId", textbox1.value());
}

function draw() {
  background(220);
}
function loadPerson() {
  personId = int(textbox1.value());
  textbox2.value("");

  let profileUrl = 'https://api.themoviedb.org/3/person/${personId}?api_key=TMDB_API_KEY';

  httpGet(profileUrl, "jsonp", false, function (response) {
    person = response;

    profilePath = response.profile_path;

    personName = response.name;

    let imageUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${profilePath}`;

    background(220);

    let keyValUrl = `https://keyval.learnscrum.xyz/keystore/${personId}?apikey=${TMDB_API_KEY}`;

    httpGet(keyValUrl, function (response) {
      comment = response;
      console.log(comment);
      if (comment) {
        textbox2.value(comment);
      }
    });

    loadImage(
      imageUrl,
      (img) => {
        image(img, 0, 0, 100, 150); // Display the loaded image

        text(personName, 0, 250);
      },
      (err) => {
        console.error("Error loading image:", err);
      }
    );
  });
}