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


// ----задание-1--------------------------------------------------------------------------------
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

const elements = document.querySelector('.elements');
// получаем содержимое
const templateCard = document.querySelector('#templateCard').content;
// берем каждый элемент массива и возвращаем
const itemCard = initialCards.map(function (item) {
	return {
		name: item.name,
		link: item.link
	};
});

function renderCard({ name, link }) {
	// клонируем содержимое тега template
	const elementClone = templateCard.querySelector('.element').cloneNode(true);
	// наполняем содержимым
	const elementCancheTitle = elementClone.querySelector('.element__title');
	elementCancheTitle.textContent = name;
	const elementChancheImage = elementClone.querySelector('.element__image');
	elementChancheImage.src = link;
	// в начало
	elements.prepend(elementClone);
}

function render() {
	itemCard.forEach(renderCard);
}
render();

// ----задание-2--------------------------------------------------------------------------------
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

// ----задание-3-----------------------------------------------------------------------
const popupCardName = document.querySelector('.popup__input-card-name');
const popupCardUrl = document.querySelector('.popup__input-card-url');
const popupFormCard = document.querySelector('.popup__form-card');
const buttonCreate = document.querySelector('.popup__button-create');
const popupTitleCard = document.querySelector('.popup__title-card');




// function handleFormSubmitCard(evt) {
// 	evt.preventDefault();
// 	popupCardName.textContent = popupName;
// 	popupCardUrl.textContent = popupJob;
// 	buttonClosePopupCard();
// };

// popupFormCard.addEventListener('submit', handleFormSubmitCard);



