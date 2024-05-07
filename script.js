function openPage(newPage, elmnt) {
  var i, page;
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(newPage).style.display = "block";
  var squares = document.getElementsByClassName("square")
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "#2e2eff";
  }
  elmnt.style.backgroundColor = "#707eff";
}
document.getElementById("defaultOpen").click();