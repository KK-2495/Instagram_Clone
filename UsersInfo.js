function register(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  // var iStory = [];
  // var iPost = [];

  if (email && name && password && confirmPassword) {
    if (password.length >= 8 && confirmPassword.length >= 8) {
      if (password === confirmPassword) {
        var usersInfo = { iEmail: email, iName: name, iPass: password, iConfirmPassword: confirmPassword };
        var iUsers = JSON.parse(localStorage.getItem("instaUsers")) || [];
        var flag = false;
        for (var i = 0; i < iUsers.length; i++) {
          if (iUsers[i].iEmail == email) {
            flag = true;
          }
        }
        if (!flag) {
          iUsers.push(usersInfo);
          localStorage.setItem("instaUsers", JSON.stringify(iUsers));
          alert("Registration Succesful.");
        } else {
          alert("You're Already registered.");
          window.location.href = `./Login.html`;
        }

      } else {
        alert("Passwords doesn't match");
      }
    } else {
      alert("Password length must be more than 8.");
    }
  } else {
    alert("All fields are Mandatory.");
  }
}

// ****Login func***//
function login(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var activeUser = JSON.parse(localStorage.getItem("instaUsers"));

  var flagForEmail = false;
  var currentUser;
  for (var i = 0; i < activeUser.length; i++) {
    if (activeUser[i].iEmail == email && activeUser[i].iPass == password) {
      flagForEmail = true;
      currentUser = activeUser[i];
    }
  }
  if (flagForEmail == true) {
    localStorage.setItem("instaCurrentUser", JSON.stringify(currentUser));
    alert("Logged IN ");
    window.location.href = `./HomePage.html`;
  } else {
    alert("Please Register to Login..");
    window.location.href = `./Register.html`;
  }
}

// // *****redirect****
// function home(){
//   window.location.href = `./HomePage.html`;
//   alert("hi");
// }
