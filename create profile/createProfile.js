 
let keyval = new Keyval(KEYVAL_API_KEY);

function setup() {



  // textboxes
  saveButton = createButton("Create Account");
  saveButton.position(windowWidth / 2, 700);
  firstNameBox = createInput("");
  firstNameBox.attribute("placeholder", "First Name");
  firstNameBox.position(windowWidth / 2, 300);
  lastNameBox = createInput("");
  lastNameBox.attribute("placeholder", "Last Name");
  lastNameBox.position(windowWidth / 2, 400);
  emailbox = createInput("");
  emailbox.attribute("placeholder", "Email");
  emailbox.position(windowWidth / 2, 500);
  passwordBox = createInput("");
  passwordBox.attribute("placeholder", "Password");
  passwordBox.position(windowWidth / 2, 600);


  
  let title = createP("Scroovie");
  title.position(windowWidth / 2 - 90, 20);
  title.style("color", "#CBB677");
  title.style("font-size", "36px")
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
