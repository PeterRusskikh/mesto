const buttonAdd = document.querySelector('.button_add');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.button_close');
const body = document.querySelector('.body');

function openPopup() {
	popup.classList.add('popup_opened');
}
function closePopup() {
	event.preventDefault();
	popup.classList.remove('popup_opened');
}


buttonAdd.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);

popup.addEventListener('click', function (event) {
	if (event.defaultPrevented) {
		closePopup();
	}
});
document.querySelector('.body').addEventListener('click', function (event) {
	event.preventDefault();
})


