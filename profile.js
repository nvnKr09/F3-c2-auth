// if the user tries to access the profile.html but user is not logged in
if (window.location.pathname == "/Profile.html" && !localStorage.getItem("userData")) {
  window.location.href = "./index.html";
}

// showing user details
const userDetails = document.querySelector(".details");
const warningMsg = document.querySelector(".warning");

userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);

userDetails.innerHTML = `
    <p>Full Name : ${userData.name}</p>
    <p>Email : ${userData.email}</p>
    <p>Token : ${userData.token}</p>
    <p>Password : ${userData.password}</p>
`;

// logout button Fn
const logoutBtn = document.querySelector(".logout-button");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("userData");
  warningMsg.innerText = "logging out...";

  setTimeout(function () {
    window.location.href = "./index.html";
  }, 1000);
});
