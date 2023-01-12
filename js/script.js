import initialCards from './ArrayCards.js'

const buttonEdit = document.querySelector('.profile__button-edit');
const buttonCloseProfileEdit = document.querySelector('#buttonCloseProfileEdit');
const popupProfile = document.querySelector('#popupProfile');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfileInputName = document.querySelector('.popup__input_text_name');
const formProfileInputJob = document.querySelector('.popup__input_text_job');
const popupFormProfileEdit = document.querySelector('#popupFormProfileEdit');

// Закрытие, открытие попапов--------------------------------
function openPopup(popup) {
	popup.classList.add('popup_opened');
}
function closePopup(popup) {
	popup.classList.remove('popup_opened');
}
function ClosePopupOutside(popup) {
	if (event.target === event.currentTarget) {
		closePopup(popup);
	}
}
// ----popupProfile---------------------------------------------
buttonEdit.addEventListener('click', () => {
	openPopup(popupProfile);
	formProfileInputName.value = profileName.textContent;
	formProfileInputJob.value = profileJob.textContent;
});
buttonCloseProfileEdit.addEventListener('click', () => {
	closePopup(popupProfile);
});
popupProfile.addEventListener('click', () => {
	ClosePopupOutside(popupProfile);
});
// Перемещаем введенные данные в профиль
function handleFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = formProfileInputName.value;
	profileJob.textContent = formProfileInputJob.value;
	closePopup(popupProfile);
};
popupFormProfileEdit.addEventListener('submit', handleFormSubmit);
// ----Sprint 5----------------------------------------------------------------
const popupCardName = document.querySelector('.popup__input-card-name');
const popupCardUrl = document.querySelector('.popup__input-card-url');
const popupFormCard = document.querySelector('.popup__form-card');
const elements = document.querySelector('.elements');
const fullImg = document.querySelector('.full-img');
// получаем содержимое
const templateCard = document.querySelector('#elements').content;

function renderCard({ name, link }) {
	// клонируем содержимое тега template
	const elementClone = templateCard.querySelector('.element').cloneNode(true);
	// наполняем содержимым
	const elementTitle = elementClone.querySelector('.element__title');
	elementTitle.textContent = name;
	const elementImage = elementClone.querySelector('.element__image');
	elementImage.src = link;
	// корзина
	const buttonTrash = elementClone.querySelector('.element__button-trash');
	buttonTrash.addEventListener('click', () => {
		elementClone.remove();
	});
	// кнопка лайк
	const buttonLike = elementClone.querySelector('.element__button-like');
	buttonLike.addEventListener('click', () => {
		buttonLike.classList.toggle('element__button-like_active');
	});
	// откываем картинку в полный экран
	elementImage.addEventListener('click', () => {
		openPopup(fullImg);
		fullImgAdd(link, name);
	});
	return elementClone;
}
elements.append(...initialCards.map(renderCard));

// кнопка добавить картинку
const buttonAdd = document.querySelector('.profile__button-add');
const buttonCloseCard = document.querySelector('.popup__button-close-card');
const popupCard = document.querySelector('.popup-card');
const fullImgClose = document.querySelector('.full-img__button-close');

buttonAdd.addEventListener('click', () => {
	openPopup(popupCard);
});
buttonCloseCard.addEventListener('click', () => {
	closePopup(popupCard);
});
popupCard.addEventListener('click', () => {
	ClosePopupOutside(popupCard);
});
// добавляем карточку
function handleFormSubmitCard(evt) {
	evt.preventDefault();
	elements.prepend(renderCard({ name: popupCardName.value, link: popupCardUrl.value }));
	// popupCardName.value = '';
	// popupCardUrl.value = '';
	closePopup(popupCard);
};
popupFormCard.addEventListener('submit', handleFormSubmitCard);

// передаем данные для открытия картинки на полный экран
function fullImgAdd(link, name) {
	const fullNameImage = document.querySelector('.full-img__name-image');
	const fullImage = document.querySelector('.full-img__image');
	fullImage.src = link;
	fullNameImage.textContent = name;
};

fullImgClose.addEventListener('click', () => {
	closePopup(fullImg);
});

fullImg.addEventListener('click', () => {
	ClosePopupOutside(fullImg);
});








