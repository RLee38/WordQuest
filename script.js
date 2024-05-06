function openPage(newPage) {
  var i, page;
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
document.getElementById(newPage).style.display = "block";
}
document.getElementById("defaultOpen").click();