var currentPage = "Home";
function openPage(newPage, elmnt) {
  var i, page;
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(newPage).style.display = "block";

  for (var i = 0; i <) {
    document.getElementsByClassName(square).style.backgroundColor = "red";
  }



  currentPage = newPage;
  elmnt.style.backgroundColor = "#707eff";
}
document.getElementById("defaultOpen").click();