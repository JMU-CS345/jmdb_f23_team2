 
let keyval = new Keyval(KEYVAL_API_KEY);
let fileInput;

function setup() {

  fileInput = createFileInput(handleFile);
  fileInput.position(windowWidth / 2, 700);

  // textboxes
  saveButton = createButton("Create Account");
  saveButton.position(windowWidth / 2, 800);
  saveButton.mousePressed(loader);
  firstNameBox = createInput("");
  firstNameBox.attribute("placeholder", "First Name");
  firstNameBox.position(windowWidth / 2, 300);
  lastNameBox = createInput("");
  lastNameBox.attribute("placeholder", "Last Name");
  lastNameBox.position(windowWidth / 2, 400);
  emailBox = createInput("");
  emailBox.attribute("placeholder", "Email");
  emailBox.position(windowWidth / 2, 500);
  passwordBox = createInput("");
  passwordBox.attribute("placeholder", "Password");
  passwordBox.position(windowWidth / 2, 600);


  
  let title = createP("Scroovie");
  title.position(windowWidth / 2 - 90, 20);
  title.style("color", "#CBB677");
  title.style("font-size", "36px")
}

function loader(){
  if(firstNameBox.value() == null || lastNameBox.value() == null || emailBox.value() == null || passwordBox.value() == null){
    console.error('Please fill out all input boxes');
  }
  user = new User(firstNameBox.value(), lastNameBox.value(), emailBox.value(), passwordBox.value());
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


