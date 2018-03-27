
var writePopup = document.querySelector(".popup.write-us");
var mapPopup = document.querySelector(".popup.map-popup");
var writeus = document.querySelector(".write");
var btnClose = writePopup.querySelector(".modal-close");
var mapClose = mapPopup.querySelector(".modal-close");
var map = document.querySelector(".map a");
var catalog = document.querySelector(".catalog a");
var menu = document.querySelector(".catalog-menu");

function openPopup(popup, evt) {
  evt.preventDefault();
	popup.classList.add("popup-open");
}
function closePopup(popup, evt) {
  evt.preventDefault();
	popup.classList.remove("popup-open");
}

writeus.addEventListener("click", function(evt) {
  openPopup(writePopup, evt);
});
btnClose.addEventListener("click", function(evt) {
  closePopup(writePopup, evt)
});
map.addEventListener("click", function(evt) {
  openPopup(mapPopup, evt);
});
mapClose.addEventListener("click", function(evt) {
  closePopup(mapPopup, evt);
});
catalog.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("visually-hidden");
});
