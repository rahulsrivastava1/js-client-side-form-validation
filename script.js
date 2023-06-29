const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("password2");

const setError = (element, message) => {
  const inputcontrol = element.parentElement;
  const errorDisplay = inputcontrol.querySelector(".error");

  errorDisplay.innerText = message;
  inputcontrol.classList.add("error");
  inputcontrol.classList.remove("success");
};

const setSuccess = (element) => {
  const inputcontrol = element.parentElement;
  const errorDisplay = inputcontrol.querySelector(".error");

  errorDisplay.innerText = "";
  inputcontrol.classList.add("success");
  inputcontrol.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validInput = () => {
  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const repasswordvalue = repassword.value.trim();

  if (usernamevalue === "") {
    setError(username, "username is required");
  } else if (usernamevalue.length < 3) {
    setError(username, "username can't be less than 3");
  } else {
    setSuccess(username);
  }

  if (emailvalue === "") {
    setError(email, "email is required");
  } else if (!isValidEmail(emailvalue)) {
    setError(email, "email is not valid");
  } else {
    setSuccess(email);
  }

  if (passwordvalue === "") {
    setError(password, "password is required");
  } else if (passwordvalue < 8) {
    setError(password, "password is required");
  } else {
    setSuccess(password);
  }

  if (repasswordvalue === "") {
    setError(repassword, "confirm password is required");
  } else if (repasswordvalue !== passwordvalue) {
    setError(repassword, "password must match");
  } else {
    setSuccess(repassword);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validInput();
});
