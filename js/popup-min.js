var ESC_KEYCODE=27,ENTER_KEYCODE=13,writePopup=document.querySelector(".popup.write-us"),mapPopup=document.querySelector(".popup.map-popup"),writeUs=document.querySelector(".write"),btnClose=writePopup.querySelector(".modal-close"),mapClose=mapPopup.querySelector(".modal-close"),map=document.querySelector(".map a"),popupForm=writePopup.querySelector("form"),username=writePopup.querySelector("[name=username]"),email=writePopup.querySelector("[name=email]"),message=writePopup.querySelector("[name=message]");function openPopup(e,p){p.preventDefault(),e.classList.add("popup-open")}function closePopup(e,p){p.preventDefault(),e.classList.remove("popup-open")}writeUs.addEventListener("click",function(e){openPopup(writePopup,e),username.focus()}),writeUs.addEventListener("keydown",function(e){e.keyCode===ENTER_KEYCODE&&(openPopup(writePopup,e),username.focus())}),btnClose.addEventListener("click",function(e){closePopup(writePopup,e),writePopup.classList.remove("popup-error")}),window.addEventListener("keydown",function(e){e.keyCode===ESC_KEYCODE&&(e.preventDefault(),writePopup.classList.contains("popup-open")&&(closePopup(writePopup,e),writePopup.classList.remove("popup-error")))}),map.addEventListener("click",function(e){openPopup(mapPopup,e)}),map.addEventListener("keydown",function(e){e.keyCode===ENTER_KEYCODE&&openPopup(mapPopup,e)}),mapClose.addEventListener("click",function(e){closePopup(mapPopup,e)}),window.addEventListener("keydown",function(e){e.keyCode===ESC_KEYCODE&&(e.preventDefault(),mapPopup.classList.contains("popup-open")&&closePopup(mapPopup,e))}),popupForm.addEventListener("submit",function(e){username.value&&email.value&&message.value?writePopup.classList.contains("popup-error")&&writePopup.classList.remove("popup-error"):(e.preventDefault(),writePopup.classList.remove("popup-error"),writePopup.offsetWidth=writePopup.offsetWidth,writePopup.classList.add("popup-error"))});
