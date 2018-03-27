var catalog = document.querySelector(".catalog a");
var menu = document.querySelector(".catalog-menu");

catalog.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("visually-hidden");
});
menu.addEventListener("click", function() {
  if (!menu.classList.contains("visually-hidden")) {
    menu.classList.add("visually-hidden");
  }
});
