var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var writePopup = document.querySelector(".popup.write-us");
var mapPopup = document.querySelector(".popup.map-popup");
var writeUs = document.querySelector(".write");
var btnClose = writePopup.querySelector(".modal-close");
var mapClose = mapPopup.querySelector(".modal-close");
var map = document.querySelector(".map a");
var popupForm = writePopup.querySelector("form");
var username = writePopup.querySelector("[name=username]");
var email = writePopup.querySelector("[name=email]");
var message = writePopup.querySelector("[name=message]");
var storage = "";
var supportStorage = true;

try {
  storage = localStorage.getItem("username");
} catch(e) {
  supportStorage = false;
}

function openMapPopup(evt) {
  evt.preventDefault();
	mapPopup.classList.add("popup-open");
}
function openPopup(evt) {
  evt.preventDefault();
	writePopup.classList.add("popup-open");
  if (storage) {
    username.value = localStorage.getItem("username");
    email.value = localStorage.getItem("email");
    message.focus();
  } else {
    username.focus();
  }
}
function closePopup(popup, evt) {
  evt.preventDefault();
	popup.classList.remove("popup-open");
}

writeUs.addEventListener("click", function(evt) {
  openPopup(evt);
});
writeUs.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup(evt);
  }
});
btnClose.addEventListener("click", function(evt) {
  closePopup(writePopup, evt);
  writePopup.classList.remove("popup-error");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    if (writePopup.classList.contains("popup-open")) {
      closePopup(writePopup, evt);
      writePopup.classList.remove("popup-error");
    }
  }
});
map.addEventListener("click", function(evt) {
  openMapPopup(evt);
});
map.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openMapPopup(evt);
  }
});
mapClose.addEventListener("click", function(evt) {
  closePopup(mapPopup, evt);
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    if (mapPopup.classList.contains("popup-open")) {
      closePopup(mapPopup, evt);
    }
  }
});
popupForm.addEventListener("submit", function(evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    writePopup.classList.remove("popup-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("popup-error");
  } else {
    if (supportStorage) {
      localStorage.setItem("email", email.value);
      localStorage.setItem("username", username.value);
    }
    if (writePopup.classList.contains("popup-error")) {
      writePopup.classList.remove("popup-error");
    }
  }
});
