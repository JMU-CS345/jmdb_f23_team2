let keyval = new Keyval(KEYVAL_API_KEY);
let emailField, passwordField;
let isError = false;

function setup() {

  // title and subtitle
  let title = createP("Scroovie Profile Login");
  title.position(windowWidth / 2 - 190, 25);
  title.style("color", "#CBB677");
  title.style("font-size", "36px")
  let subtitle1 = createP("Don't have an account already?");
  let subtitle2 = createP("Click <b>HERE</b> to get started");
  subtitle1.position(windowWidth / 2 - 190, 225);
  subtitle1.style("color", "#CBB677");
  subtitle1.style("font-size", "24px")
  subtitle2.position(windowWidth / 2 - 190, 250);
  subtitle2.style("color", "#CBB677");
  subtitle2.style("font-size", "24px")
  subtitle2.mousePressed(goToCreateProfile);

  // input fields
  emailField = createInput("");
  passwordField = createInput("");
  emailField.attribute("placeholder", "Email");
  emailField.position(windowWidth / 2 - 190, 125);
  passwordField.attribute("placeholder", "Password");
  passwordField.position(windowWidth / 2 - 190, 150);

  // login button
  let loginButton = createButton("Login");
  loginButton.position(windowWidth / 2 - 190, 200);
  loginButton.mousePressed(login);
}

function draw() {

}

function login() {
  let email = emailField.value();
  let password = passwordField.value();
  let keyval = new Keyval(KEYVAL_API_KEY);
  keyval.get(email, (data) => {
    if (data) {
      data = JSON.parse(data);
      if (password == data.password) {
        localStorage.setItem("user", email);
        goToHomePage();
      } else if (!isError) {
        displayError;
      }
    } else {
      if (!isError) {
        displayError;
      }
    }
  }, (err) => {
    displayError;
  });
}

function displayError() {
  emailField.value("");
  passwordField.value("");
  error = createP("Incorrect Email/Password");
  error.position(windowWidth / 2 - 190, 325);
  error.style("font-size", "36px");
  error.style("color", "#FF0000");
  isError = true;
}
