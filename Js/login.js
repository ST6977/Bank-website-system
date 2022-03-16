// document.getElementById("login-submit").addEventListener("click", function () {
//   // get user email
//   const emailField = document.getElementById("user-email");
//   const userEmail = emailField.value;
//   console.log(userEmail);

//   // get user password

//   const passwordField = document.getElementById("user-password");
//   const userPassword = passwordField.value;

//   // check email and password
//   if (userEmail == "absd610@gmail.com" && userPassword == "bekar") {
//     window.location.href = "banking.html";
//   }
// });
document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const pass = document.getElementById("user-password").value;

  if (email == "admin@admin.com" && pass == "bekar") {
    window.location.href = "banking.html";
    return false;
  }
});
