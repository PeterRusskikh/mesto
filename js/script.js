const buttonEdit = document.querySelector('.profile__button-edit');
const buttonSave = document.querySelector('.popup__button-save');
const buttonClose = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupName = document.querySelector('.popup__input_text_name');
const popupJob = document.querySelector('.popup__input_text_job');
const popupForm = document.querySelector('.popup__form');

// кнопка EDIT --------------------------------------------------------
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


// ----Sprint 5----------------------------------------------------------------
const initialCards = [
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

const popupCardName = document.querySelector('.popup__input-card-name');
const popupCardUrl = document.querySelector('.popup__input-card-url');
const popupFormCard = document.querySelector('.popup__form-card');
const buttonCreate = document.querySelector('.popup__button-create');
const popupTitleCard = document.querySelector('.popup__title-card');
const elements = document.querySelector('.elements');
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

	// ----задание-5--треш-----------------------------------------
	const buttonTrash = elementClone.querySelector('.element__button-trash');
	buttonTrash.addEventListener('click', function () {
		elementClone.remove();
	});

	// ----задание-4-лайк-----------------------------------------
	const buttonLike = elementClone.querySelector('.element__button-like');
	buttonLike.addEventListener('click', function () {
		buttonLike.classList.toggle('element__button-like_active');
	});
	// ----задание-6-----------------------------------------
	const fullImg = document.querySelector('.full-img');
	elementImage.addEventListener('click', function () {
		fullImg.classList.add('popup_opened');
		fullImgAdd();

	});

	const fullImgClose = document.querySelector('.full-img__button-close');
	fullImgClose.addEventListener('click', fullImgCloseRemove);
	function fullImgCloseRemove() {
		event.preventDefault();
		fullImg.classList.remove('popup_opened');
	};

	fullImg.addEventListener('click', function (event) {
		if (event.target === event.currentTarget) {
			fullImgCloseRemove();
		}
	});

	function fullImgAdd(link, name) {

		const FullNameImage = document.querySelector('.full-img__name-image');
		const FullImage = document.querySelector('.full-img__image');

		popupCardName.textContent = name;
		popupCardUrl.src = link;

	}

	return elementClone;
}
elements.append(...initialCards.map(renderCard));

// ----добавляем карточку--------------------------------------------------
function handleFormSubmitCard(evt) {
	evt.preventDefault();
	elements.prepend(renderCard({ name: popupCardName.value, link: popupCardUrl.value }));
	popupCardName.value = '';
	popupCardUrl.value = '';
	buttonClosePopupCard();
};
popupFormCard.addEventListener('submit', handleFormSubmitCard);
// ----функция открытия картинки--------------------------------------------------


// ----закрываем попап--------------------------------------------------
const buttonAdd = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup-card');
const buttonCloseCard = document.querySelector('.popup__button-close-card');


buttonAdd.addEventListener('click', openPopupAdd);
function openPopupAdd() {
	popupCard.classList.add('popup_opened');
}

buttonCloseCard.addEventListener('click', buttonClosePopupCard);
function buttonClosePopupCard() {
	event.preventDefault();
	popupCard.classList.remove('popup_opened');
}

popupCard.addEventListener('click', function (event) {
	if (event.target === event.currentTarget) {
		buttonClosePopupCard();
	}
});



