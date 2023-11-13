
let keyval = new Keyval(KEYVAL_API_KEY);
let fileInput;
//let errorT = createP("");

function setup() {


  errorT = createP();
  errorT.position(windowWidth / 2 - 90, 65);
  errorT.style("font-size", "36px");

  fileInput = createFileInput(handleFile);
  fileInput.position(windowWidth / 2 - 90, 400);

  // textboxes
  saveButton = createButton("Create Account");
  saveButton.position(windowWidth / 2 - 90, 450);
  saveButton.mousePressed(loader);
  firstNameBox = createInput("");
  firstNameBox.attribute("placeholder", "First Name");
  firstNameBox.position(windowWidth / 2 - 90, 200);
  lastNameBox = createInput("");
  lastNameBox.attribute("placeholder", "Last Name");
  lastNameBox.position(windowWidth / 2 - 90, 250);
  emailBox = createInput("");
  emailBox.attribute("placeholder", "Email");
  emailBox.position(windowWidth / 2 - 90, 300);
  passwordBox = createInput("");
  passwordBox.attribute("placeholder", "Password");
  passwordBox.position(windowWidth / 2 - 90, 350);



  let title = createP("Scroovie Profile Creation");
  title.position(windowWidth / 2 - 90, 20);
  title.style("color", "#CBB677");
  title.style("font-size", "36px")
}

function loader() {
  errorT.html("");
  errorT.style("color", ""); 

  errorT.style("font-size", "36px")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (firstNameBox.value() == "" || lastNameBox.value() == "" || emailBox.value() == "" || passwordBox.value() == "" ||
  !(/^[^@]+@[^@]+\.[^@.]+$/i.test(emailBox.value()))) {
    errorT.html("You must fill out all fields!");

    errorT.style("color", "#FF0000");

  } else {

    errorT.html("Creation Success!");

    errorT.style("color", "#00FF00");

    new User(firstNameBox.value(), lastNameBox.value(), emailBox.value(), passwordBox.value());

  }
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





function handleFile(file) {
  if (file.type === 'image') {
    var reader = new FileReader();

    reader.onload = function (e) {
      var imageData = e.target.result;

      console.log('Image Data:', imageData);

    };

    reader.readAsDataURL(file);
  } else {
    console.error('Invalid file type. Please select an image.');
  }
}


