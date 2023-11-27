// if user is trying to acces the signup page but the user is logged in
if (window.location.pathname == "/index.html" && localStorage.getItem("userData")) {
  window.location.href = "./Profile.html";
}

// const submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("signUpForm");
const warningMsg = document.querySelector(".warning");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    warningMsg.style.color = "#564FF2";
    warningMsg.innerText = "Error: All fields are mandatory!";
    return;
  }
  if (password !== confirmPassword) {
    console.log("password not matched");
    warningMsg.innerText = "*Password should match!";
    warningMsg.style.color = "red";
    return;
  } else console.log("password matched");

  const token = generateAccessToken();
  console.log("token no: " + token);

  // Store user details in local storage
  let userData = {
    name: name,
    email: email,
    password: password,
    token: token,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  console.log(`user Data : ${userData}`);

  // redirect to page after few seconds
  warningMsg.innerText = "Redirecting to login page...";
  warningMsg.style.color = "lightgreen";

  setTimeout(function () {
    window.location.href = "./Profile.html";
  }, 1000);
});

// token generation fn
function generateAccessToken() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const tokenArray = [];

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    tokenArray.push(charset[randomIndex]);
  }

  return tokenArray.join("");
}
