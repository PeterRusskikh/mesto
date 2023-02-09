export const buttonEdit = document.querySelector('.profile__button-edit');
export const popupProfile = document.querySelector('#popupProfile');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const formProfileInputName = document.querySelector('.popup__input_text_name');
export const formProfileInputJob = document.querySelector('.popup__input_text_job');
export const popupFormProfileEdit = document.querySelector('#popupFormProfileEdit');
export const popupCardName = document.querySelector('.popup__input-card-name');
export const popupCardUrl = document.querySelector('.popup__input-card-url');
export const popupFormCard = document.querySelector('.popup__form-card');
export const elements = document.querySelector('.elements');
export const buttonAdd = document.querySelector('.profile__button-add');
export const popupCard = document.querySelector('.popup-card');

export const popups = document.querySelectorAll('.popup');
export const popupFullImg = document.querySelector('.full-img');
export const popupFullImgName = document.querySelector('.full-img__name-image');
export const popupFullImgImage = document.querySelector('.full-img__image');

export const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];

export const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	activeButtonClass: 'popup__button-valid',
	inactiveButtonClass: 'popup__button-invalid',
	inputErrorClass: 'popup__input-error',
	errorClass: 'popup__input-error_visible'
};
