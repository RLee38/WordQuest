console.log("Attached");
function openPage(newPage) {
window.open("../pages/"+newPage + ".html", "_self");
}

function buyBackground(background) {
console.log("Buy Background");
  equipBackground(background);
}

function equipBackground(background) {
  document.body.style.backgroundImage = "url('../Backgrounds/"+background+".png')";
}