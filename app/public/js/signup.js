// Input Formator
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passFormat = /^[A-Za-z]\w{7,16}$/;

// Document Selectors
const userEmail = document.getElementById("userEmail");
const userPass = document.getElementById("userPass");
const submitBtn = document.getElementById("submitBtn");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
const redirectPage = document.getElementById("redirectPage");

// Variables

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  validateUserData();
});

function validateUserData() {
  if (userEmail.value.match(emailFormat)) {
    console.log("Email is valid.");
  } else {
    alert("Please enter a valid email.");
  }
  if (userPass.value.match(passFormat)) {
    console.log("Password is valid.");
  } else {
    alert("Please enter a valid password.");
  }

  if (userEmail.value.match(emailFormat) && userPass.value.match(passFormat)) {
    console.log(userEmail.value, userPass.value);
    localStorage.setItem("userEmail", userEmail.value);
    localStorage.setItem("userPass", userPass.value);
    alert("Account created! \n Go to login page and enter your information.");
  }
}

redirectPage.addEventListener("click", () => {
  location.href = "/";
});
