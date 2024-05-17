function openPage(newPage, elmnt) {
  console.log(newPage)
  var i, page;
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  if (newPage=="Home") {
    console.log("Newpage equaled home");
  var login = document.getElementsByClassName("loginSquare");
  login[0].style.display = "none";
    document.getElementsByClassName("flexContainer")[0].style.display = "flex";
}
  document.getElementById(newPage).style.display = "block";
  console.log("blocking")
  if (newPage=="Shop") {
    document.getElementById(newPage).style.display = "flex";
  }
  var squares = document.getElementsByClassName("square")
  /*
  if (newPage=='Shop') {
    document.getElementsByClassName("flexContainer")[0].style.display = "none";
  }
  */
  if (newPage=='Login') {
    document.getElementsByClassName("flexContainer")[0].style.display = "none";
    
  }
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "#2e2eff";
  }
  elmnt.style.backgroundColor = "#707eff";
} /* end of openPage()*/ 

function buyBackground(background) {
console.log("Buy Background");
  equipBackground(background);
}

function equipBackground(background) {
  document.body.style.backgroundImage = "url('Backgrounds/"+background+".png')";
}

function validateLogin(a) {
  console.log("validating");
  openPage('Home',a);
}




document.getElementById("defaultOpen").click();