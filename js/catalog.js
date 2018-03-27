var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var catalog = document.querySelector(".catalog a");
var menu = document.querySelector(".catalog-menu");

catalog.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("visually-hidden");
});
catalog.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    menu.classList.toggle("visually-hidden");
  }
});
menu.addEventListener("click", function() {
  if (!menu.classList.contains("visually-hidden")) {
    menu.classList.add("visually-hidden");
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (!menu.classList.contains("visually-hidden")) {
      menu.classList.add("visually-hidden");
    }
  }
});
