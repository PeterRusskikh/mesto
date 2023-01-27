import initialCards from './arrayCards.js'
import { FormValidator, validationConfig } from './FormValidator.js';
import { Card } from './Card.js'
export { openPopupImage };

const buttonEdit = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('#popupProfile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfileInputName = document.querySelector('.popup__input_text_name');
const formProfileInputJob = document.querySelector('.popup__input_text_job');
const popupFormProfileEdit = document.querySelector('#popupFormProfileEdit');
const popups = document.querySelectorAll('.popup');
const popupCardName = document.querySelector('.popup__input-card-name');
const popupCardUrl = document.querySelector('.popup__input-card-url');
const popupFormCard = document.querySelector('.popup__form-card');
const elements = document.querySelector('.elements');
const buttonAdd = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup-card');

// Закрытие, открытие попапов--------------------------------
function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', popupCloseEscKeybord);
}
function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', popupCloseEscKeybord);
}
function popupCloseEscKeybord(evt) {
	if (evt.key === 'Escape') {
		const popupOpened = document.querySelector('.popup_opened');
		closePopup(popupOpened);
	}
}
popups.forEach((popup) => {
	popup.addEventListener('mousedown', (evt) => {
		if (evt.target.classList.contains('popup_opened')) {
			closePopup(popup);
		}
		if (evt.target.classList.contains('popup__button-close')) {
			closePopup(popup);
		}
	});
});
// ----popupProfile---------------------------------------------
function renderEditProfile() {
	formProfileInputName.value = profileName.textContent;
	formProfileInputJob.value = profileJob.textContent;
}
buttonEdit.addEventListener('click', () => {
	openPopup(popupProfile);
	renderEditProfile();
});
// Перемещаем введенные данные в профиль
function handleFormSubmitProfile(evt) {
	evt.preventDefault();
	profileName.textContent = formProfileInputName.value;
	profileJob.textContent = formProfileInputJob.value;
	closePopup(popupProfile);
};
popupFormProfileEdit.addEventListener('submit', handleFormSubmitProfile);
// ----card---------------------------------------------
buttonAdd.addEventListener('click', () => {
	popupFormCard.reset();
	openPopup(popupCard);
});
// получаем содержимое
function renderCard(item) {
	// Создадим экземпляр карточки
	const card = new Card(item, '#elements');
	// Создаём карточку и возвращаем наружу
	const cardElement = card.generateCard();
	return cardElement;
}
// добавляем карточку
function handleFormSubmitCard(evt) {
	evt.preventDefault();
	const item = {};
	item.name = popupCardName.value;
	item.link = popupCardUrl.value;
	elements.prepend(renderCard(item));
	closePopup(popupCard);
};
// добавляем в DOM
initialCards.forEach((item) => {
	elements.prepend(renderCard(item));
});
popupFormCard.addEventListener('submit', handleFormSubmitCard);
// передаем данные для открытия картинки на полный экран
function openPopupImage(name, link) {
	const fullImg = document.querySelector('.full-img');
	document.querySelector('.full-img__name-image').textContent = name;
	document.querySelector('.full-img__image').src = link;
	openPopup(fullImg);
};
// ----validate---------------------------------------------
const validatorFormEditProfile = new FormValidator(validationConfig, popupFormProfileEdit);
validatorFormEditProfile.enableValidation();

const validatorFormAddContent = new FormValidator(validationConfig, popupFormCard);
validatorFormAddContent.enableValidation();

buttonEdit.addEventListener('click', function () {
	openPopup(popupProfile);
	renderEditProfile();
}, false);

buttonAdd.addEventListener('click', () => {
	validatorFormAddContent.buttonDefaultState();
	openPopup(popupCard);
}, false);