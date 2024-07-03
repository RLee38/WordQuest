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


function loadUserHTML() {
  
  document.getElementById("User_Username").innerHTML += sessionStorage.getItem("Current_User");
  console.log(sessionStorage.getItem("Current_Password"));
  document.getElementById("User_Password").innerHTML += sessionStorage.getItem("Current_Pass");
  document.getElementById("User_Age").innerHTML += sessionStorage.getItem("Current_User_Age");
  document.getElementById("User_QuestCoins").innerHTML += sessionStorage.getItem("Current_User_QuestCoin");
}



function validateLogin() {
  let userAttempt = document.getElementById("username").value;
  console.log(userAttempt);
  let passAttempt = document.getElementById("password").value;
  console.log(passAttempt);
  //LOAD THE USERS AND PASSWORDS HERE
  fetch("../user-pass.json")
      .then(response => response.json())
      .then(values => values.forEach(value => {
       if (userAttempt==value.username && passAttempt==value.password) {
         console.log("Login validated");
         sessionStorage.setItem('Current_User',userAttempt);
         sessionStorage.setItem('Current_Pass',passAttempt);
         sessionStorage.setItem('Current_User_Unlocked_Background',value.Current_User_Unlocked_Background);
         sessionStorage.setItem('Current_User_Age',value.age);
         sessionStorage.setItem('Current_User_QuestCoin',value.QuestCoin);
         openPage('Home');
       }
                    }))
  document.getElementById("InvalidLogin").style.display = "block";
  document.getElementById("InvalidLogin").style.margin = "auto";
  //END LOADING THE USER AND PASSWORDS HERE
  
}




