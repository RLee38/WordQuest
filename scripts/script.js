console.log("running");
openIndex();
initialBackground();
loadBackground();
function loadBackground() {
  if (sessionStorage.getItem('background') != null) {
    console.log(sessionStorage.getItem('background'));

    document.addEventListener('DOMContentLoaded',function() {
    document.body.style.backgroundImage = "url('../Backgrounds/" + sessionStorage.getItem('background') + ".png')";
    });
    
  }
}
function initialBackground() {
  if (!sessionStorage.getItem('initializezBackground')) {
    sessionStorage.setItem('initializeBackground', 'true');

    document.addEventListener('DOMContentLoaded',function() {
    document.body.style.backgroundImage = "url('../Backgrounds/sun.png')";
    });
    
  }

}

function logout() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "../pages/index.html";
}
function openIndex() {
  if (!sessionStorage.getItem('redirected')) {
    sessionStorage.setItem('redirected', 'true');
    window.location.href = '../pages/index.html';
  }
}


function openPage(newPage) {
  window.open("../pages/" + newPage + ".html", "_self");
}

function buyBackground(background) {
  console.log("Buy Background");
  equipBackground(background);
}

function equipBackground(background) {
  document.body.style.backgroundImage = "url('../Backgrounds/" + background + ".png')";
  sessionStorage.setItem('background', background);
}











function validateLogin() {
  console.log("validating");
  let userAttempt = document.getElementById("username").value;
  console.log(userAttempt);
  let passAttempt = document.getElementById("password").value;
  console.log(passAttempt);
  //LOAD THE USERS AND PASSWORDS HERE
  console.log("before fetch");
  fetch("../user-pass.json")
      .then(response => response.json())
      .then(values => values.forEach(value => {
       if (userAttempt==value.username && passAttempt==value.password) {

         console.log("Login validated");
         openPage('Home');
       }
                    }))
  console.log('INVALID');
  //END LOADING THE USER AND PASSWORDS HERE
  
}




