document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const pass = document.getElementById("user-password").value;

  if (email == "admin@admin.com" && pass == "bekar") {
    window.location.href = "banking.html";
    return false;
  }
});
