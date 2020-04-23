// Validate Form Function

// HTML Selectors
const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");
const userEmail = document.getElementById("userEmail");
const userPass = document.getElementById("userPass");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");
const redirectPage = document.getElementById("redirectPage");

// Get Local Storage
const lsEmail = localStorage.getItem("userEmail");
const lsPass = localStorage.getItem("userPass");

// Form Validation Function
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidInput();
});

// Check if user input is empty
function checkValidInput() {
  if (userEmail.value) {
    if (userEmail.value === "" || userEmail.value === null) {
      emailErr.innerText = "A valid email is required.";
    }
    if (userPass.value === "" || userPass.val === null) {
      passErr.innerText = "A valid password is required.";
    } else {
      console.log(
        "Email: " + userEmail.value + "\n Password: " + userPass.value
      );
      validateUserInfo();
    }
  }
}

// Check if login input matches local storage data
function validateUserInfo() {
  if (userEmail.value === lsEmail && userPass.value === lsPass) {
    alert("You're logged in!");
  } else {
    alert(
      "Sorry, either your email or password is incorrect. Please try again!"
    );
  }
}

redirectPage.addEventListener("click", () => {
  location.href = "/signup";
});
