var catalog = document.querySelector(".catalog a");
var menu = document.querySelector(".catalog-menu");

catalog.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("visually-hidden");
});
