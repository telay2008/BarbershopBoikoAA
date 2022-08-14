var button = document.querySelector(".contacts-button-map");
// var mapPopup = document.querySelector(".modal-map");
var close = mapPopup.querySelector(".modal-close");
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
		}
	}
})

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
		}
	}
})
