function openPage(newPage, elmnt) {
  var i, page;
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(newPage).style.display = "block";
  var squares = document.getElementsByClassName("square")
  /*
  if (newPage=='Shop') {
    document.getElementsByClassName("flexContainer")[0].style.display = "none";
  }
  */
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "#2e2eff";
  }
  elmnt.style.backgroundColor = "#707eff";
}

function buyBackground(background) {
console.log("Buy Background");
  equipBackground(background);
}

function equipBackground(background) {
switch(background) {
  case "swirl":
document.body.style.backgroundImage = "url('Backgrounds/swirl.jpg')";
    break;
  case "scales":
    document.body.style.backgroundImage = "url('Backgrounds/scales.jpg')";
    break;
  case "firefly":
    document.body.style.backgroundImage = "url('Backgrounds/firefly.jpg')";
    break;
  case "bubblegum":
    document.body.style.backgroundImage = "url('Backgrounds/bubblegum.jpg')";
    break;
}
}




document.getElementById("defaultOpen").click();