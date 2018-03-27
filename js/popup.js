
var writePopup = document.querySelector(".popup.write-us");
var mapPopup = document.querySelector(".popup.map-popup");
var writeUs = document.querySelector(".write");
var btnClose = writePopup.querySelector(".modal-close");
var mapClose = mapPopup.querySelector(".modal-close");
var map = document.querySelector(".map a");
var popupForm = writePopup.querySelector("form");
var name = writePopup.querySelector("#name");
var email = writePopup.querySelector("#email");
var message = writePopup.querySelector("#message");

function openPopup(popup, evt) {
  evt.preventDefault();
	popup.classList.add("popup-open");
}
function closePopup(popup, evt) {
  evt.preventDefault();
	popup.classList.remove("popup-open");
}

writeUs.addEventListener("click", function(evt) {
  openPopup(writePopup, evt);
});
btnClose.addEventListener("click", function(evt) {
  closePopup(writePopup, evt);
  writePopup.classList.remove("popup-error");
});
map.addEventListener("click", function(evt) {
  openPopup(mapPopup, evt);
});
mapClose.addEventListener("click", function(evt) {
  closePopup(mapPopup, evt);
});
popupForm.addEventListener("submit", function(evt) {
  if(!name.value || !email.value || !message.value) {
    evt.preventDefault();
    writePopup.classList.add("popup-error");
  }
});
