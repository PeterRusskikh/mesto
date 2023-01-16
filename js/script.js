import initialCards from './arrayCards.js'
import buttonDefaultState from './validate.js'

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
const fullImg = document.querySelector('.full-img');
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
buttonEdit.addEventListener('click', () => {
	openPopup(popupProfile);
	formProfileInputName.value = profileName.textContent;
	formProfileInputJob.value = profileJob.textContent;
});

// Перемещаем введенные данные в профиль
function handleFormSubmitProfile(evt) {
	evt.preventDefault();
	profileName.textContent = formProfileInputName.value;
	profileJob.textContent = formProfileInputJob.value;
	buttonDefaultState(evt.submitter);
	closePopup(popupProfile);
};

popupFormProfileEdit.addEventListener('submit', handleFormSubmitProfile);
// ----Sprint 5----------------------------------------------------------------
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

buttonAdd.addEventListener('click', () => {
	popupFormCard.reset();
	openPopup(popupCard);
});

// добавляем карточку
function handleFormSubmitCard(evt) {
	evt.preventDefault();
	elements.prepend(renderCard({ name: popupCardName.value, link: popupCardUrl.value }));
	buttonDefaultState(evt.submitter);
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

