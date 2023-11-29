
let keyval = new Keyval(KEYVAL_API_KEY);
//let errorT = createP("");

function setup() {

  errorT = createP();
  errorT.position(windowWidth / 2 - 190, 325);
  errorT.style("font-size", "36px");

  // textboxes
  saveButton = createButton("Create Account");
  saveButton.position(windowWidth / 2 - 190, 250);
  saveButton.mousePressed(loader);
  firstNameBox = createInput("");
  firstNameBox.attribute("placeholder", "First Name");
  firstNameBox.position(windowWidth / 2 - 190, 125);
  lastNameBox = createInput("");
  lastNameBox.attribute("placeholder", "Last Name");
  lastNameBox.position(windowWidth / 2 - 190, 150);
  emailBox = createInput("");
  emailBox.attribute("placeholder", "Email");
  emailBox.position(windowWidth / 2 - 190, 175);
  passwordBox = createInput("");
  passwordBox.attribute("placeholder", "Password");
  passwordBox.position(windowWidth / 2 - 190, 200);

  let title = createP("Scroovie Profile Creation");
  title.position(windowWidth / 2 - 190, 25);
  title.style("color", "#CBB677");
  title.style("font-size", "36px");
  let subtitle1 = createP("Already have an account?");
  let subtitle2 = createP("Login");
  subtitle1.position(windowWidth / 2 - 190, 275);
  subtitle1.style("color", "#CBB677");
  subtitle1.style("font-size", "24px");
  subtitle2.position(windowWidth / 2 - 190, 300);
  subtitle2.style("color", "#CBB677");
  subtitle2.style("font-size", "24px");
  subtitle2.mousePressed(goToLoginPage);

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

      if (checkUnique(emailBox.value())) {
        errorT.html("Email already in use!");
        errorT.style("color", "#FF0000");
        return;
      }
    new User(emailBox.value(), firstNameBox.value(), lastNameBox.value(), passwordBox.value());
    localStorage.setItem("user", emailBox.value());
    goToUserPage();
  }
}

function draw() {
  background(69, 0, 132);

}

function checkUnique(email) {
  keyval.get(email, (data) => {
    //User exists
    return true;
  }, (err) => {
    //User does not exist
    return false;
  });
}
