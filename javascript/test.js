// var link = document.querySelector(".login-link");
// link.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	console.log("Клик по ссылке вход");
// });

// var popup = document.querySelector(".modal-login");
// Element.classList.add("modal-show");
// popup.classList.add("modal-show");



var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=passwoed]");

// var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

// form.addEventListener("submit", function (evt) {
// 	evt.preventDefault();
// 	// console.log("Отправляем форму");
// 	console.log(login.value);
// 	console.log(password.value);
// });

form.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth - popup.offsetWidth;
		popup.classList.add("modal-error");
		console.log("Нужно ввести логин и пароль");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});

// localStorage.setItem("name", "keks");

window.addEventListener("keydown", function (evt){
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			// evt.preventDefault();
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
})