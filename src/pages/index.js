import './index.css';
import {
	initialCards,
	buttonEdit,
	popupProfile,
	profileName,
	profileJob,
	formProfileInputName,
	formProfileInputJob,
	popupFormProfileEdit,
	popups,
	popupCardName,
	popupCardUrl,
	popupFormCard,
	elements,
	buttonAdd,
	popupCard,
	popupFullImg,
	popupFullImgName,
	popupFullImgImage
} from '../utils/constants.js'

import { validationConfig } from '../utils/constants.js';
import { openPopup, closePopup, handleCardClick } from '../utils/utils.js';

import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js'


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
function renderCard(data) {
	// Создадим экземпляр карточки
	const card = new Card(data, '#elements', handleCardClick);
	// Создаём карточку и возвращаем наружу
	const cardElement = card.generateCard();
	return cardElement;
	// передаем данные для открытия картинки на полный экран

};

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