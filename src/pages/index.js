import './index.css';
import initialCards from '../components/arrayCards.js'
import { FormValidator, validationConfig } from '../components/FormValidator.js';
import { Card } from '../components/card.js'


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
const popupFullImg = document.querySelector('.full-img');
const popupFullImgName = document.querySelector('.full-img__name-image');
const popupFullImgImage = document.querySelector('.full-img__image');

// Закрытие, открытие попапов--------------------------------
function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEscKeybord);
}
function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEscKeybord);
}
function closePopupEscKeybord(evt) {
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
// Перемещаем введенные данные в профиль
function handleFormSubmitProfile(evt) {
	evt.preventDefault();
	profileName.textContent = formProfileInputName.value;
	profileJob.textContent = formProfileInputJob.value;
	closePopup(popupProfile);
};
// ----card---------------------------------------------
// получаем содержимое
function renderCard(item) {
	// Создадим экземпляр карточки
	const card = new Card(item, '#elements', handleCardClick);
	// Создаём карточку и возвращаем наружу
	const cardElement = card.generateCard();
	return cardElement;
	// передаем данные для открытия картинки на полный экран
	function handleCardClick(name, link) {
		popupFullImgName.textContent = name;
		popupFullImgImage.src = link;
		popupFullImgImage.alt = name;
		openPopup(popupFullImg);
	};
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

popupFormProfileEdit.addEventListener('submit', handleFormSubmitProfile);
popupFormCard.addEventListener('submit', handleFormSubmitCard);

// ----validate---------------------------------------------
const validatorFormEditProfile = new FormValidator(validationConfig, popupFormProfileEdit);
validatorFormEditProfile.enableValidation();

const validatorFormAddCard = new FormValidator(validationConfig, popupFormCard);
validatorFormAddCard.enableValidation();

buttonEdit.addEventListener('click', () => {
	openPopup(popupProfile);
	validatorFormEditProfile.resetValidation();
	validatorFormEditProfile.buttonDefaultState();
	renderEditProfile();
});
buttonAdd.addEventListener('click', () => {
	openPopup(popupCard);
	validatorFormAddCard.resetValidation();
	popupFormCard.reset();
});