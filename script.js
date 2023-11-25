const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!name || !email || !password || !confirmPassword) {
    document.querySelector(".warning").innerText =
      "Error: All fields are mandatory!";
    return;
  }
  if (password !== confirmPassword) {
    console.log("password not matched");
    document.querySelector(".warning").innerText = "*Password should match!";
    document.querySelector(".warning").style.color = "red";
    return;
  } else console.log("password matched");

  const token = generateAccessToken();
  console.log('token no: ' + token);

  // Store user details in local storage
  let userData = {
    name: name,
    email: email,
    password: password,
    token: token,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  console.log(`user Data : ${userData}`);

//   redirect to page after few seconds
  setTimeout(function () {
    window.location.href = './Profile.html';
  }, 1000);
});

// token generation fn
function generateAccessToken(){
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const tokenArray = [];

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    tokenArray.push(charset[randomIndex]);
  }

  return tokenArray.join("");
}
    window.onload = function () {
        // This function will be executed after the page has loaded
        // alert("on signUp page")
        if (localStorage.getItem("userData")) {
          window.location.href = "./Profile.html";
          alert("Already Loggedin");
        }
    };