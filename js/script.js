const buttonEdit = document.querySelector('.profile__button-edit');
const buttonSave = document.querySelector('.popup__button-save');
const buttonClose = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupName = document.querySelector('.popup__input_text_name');
const popupJob = document.querySelector('.popup__input_text_job');
const popupForm = document.querySelector('.popup__form');

// кнопка EDIT -------------------------------------------------------------------
// открываем попап, добавляем новый класс
buttonEdit.addEventListener('click', openPopup);
function openPopup() {
	popup.classList.add('popup_opened');
	popupName.value = profileName.textContent;
	popupJob.value = profileJob.textContent;
}

// закрываем попап, забираем класс
buttonClose.addEventListener('click', closePopup);
function closePopup() {
	event.preventDefault();
	popup.classList.remove('popup_opened');
}
// закрываем попап на нажатие пространства вне попапа--------
// способ 1----------------
popup.addEventListener('click', function (event) {
	if (event.target === event.currentTarget) {
		closePopup();
	}
});
// способ 2-----------------
// popup.addEventListener('click', closePopup);
// document.querySelector('.popup__container').addEventListener('click', function (event) {
// 	event.stopPropagation();
// });
// способ 3----------------
// popup.addEventListener('click', function (event) {
// 	if (!event.defaultPrevented) {
// 		closePopup();
// 	};
// });
// document.querySelector('.popup__container').addEventListener('click', function (event) {
// 	event.preventDefault();
// })

// Перемещаем введенные данные в профиль ---------------------------------------------------
function handleFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = popupName.value;
	profileJob.textContent = popupJob.value;
	closePopup();
};

popupForm.addEventListener('submit', handleFormSubmit);



// кнопка ADD -------------------------------------------------------------------
const buttonAddCard = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup-card');

buttonAddCard.addEventListener('click', openPopupCard);
function openPopupCard() {
	popupCard.classList.add('popup_opened');
}












