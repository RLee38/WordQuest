console.log("running");
openIndex();
initialBackground();
loadBackground();
function loadBackground() {
  if (sessionStorage.getItem('background') != null) {
    document.body.style.backgroundImage = "url('../Backgrounds/" + sessionStorage.getItem('background') + ".png')";
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
  let passAttempt = document.getElementById("password").value;
  //LOAD THE USERS AND PASSWORDS HERE
/*
  
  // let user_pass_file = new File("..user-pass.txt");
 // let user_pass_file = new File(['user-pass.txt'], "user-pass.txt", { type: "text/plain" });
  
  let fr = new FileReader();
  fr.readAsText(user_pass_file);
  fr.onload = function() {
    console.log(fr.result);
  }
  fr.onerror = function() {
    console.error(fr.error);
  }
*/
  //END LOADING THE USER AND PASSWORDS HERE
  openPage('Home');
}




