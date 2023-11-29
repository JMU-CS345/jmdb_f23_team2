let keyval = new Keyval(KEYVAL_API_KEY);

function setup() {

  // title and subtitle
  let title = createP("Scroovie Profile Login");
  title.position(windowWidth / 2 - 190, 25);
  title.style("color", "#CBB677");
  title.style("font-size", "36px")
  let subtitle1 = createP("Don't have an account already?");
  let subtitle2 = createP("Click here to get started");
  subtitle1.position(windowWidth / 2 - 190, 200);
  subtitle1.style("color", "#CBB677");
  subtitle1.style("font-size", "24px")
  subtitle2.position(windowWidth / 2 - 190, 225);
  subtitle2.style("color", "#CBB677");
  subtitle2.style("font-size", "24px")
  subtitle2.mousePressed(goToCreateProfile);

  // input fields
  let emailField = createInput("");
  let passwordField = createInput("");
  emailField.attribute("placeholder", "Email");
  emailField.position(windowWidth / 2 - 190, 125);
  passwordField.attribute("placeholder", "Password");
  passwordField.position(windowWidth / 2 - 190, 150);

  // login button
  let loginButton = createButton("Login");
  loginButton.position(windowWidth / 2 - 190, 175);
  loginButton.mousePressed(login);
}

function draw() {

}

function login() {

}
