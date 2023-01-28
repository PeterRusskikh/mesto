export class Card {
	constructor(data, templateSelector, handleCardClick) {
		this._name = data.name;
		this._link = data.link;
		this._alt = `Изображение ${data.name}`;
		this._templateSelector = templateSelector;
		this._element = this._getTemplate();
		this._likeButton = this._element.querySelector('.element__button-like');
		this._trashButton = this._element.querySelector('.element__button-trash');
		this._elemImage = this._element.querySelector('.element__image');
		this.elemTitle = this._element.querySelector('.element__title');
		this._handleCardClick = handleCardClick;
	}
	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
			.content
			.querySelector('.element')
			.cloneNode(true);
		return cardElement;
	}
	generateCard() {
		this._setEventListeners();
		// Добавим данные
		this.elemTitle.textContent = this._name;
		this._elemImage.src = this._link;
		this._elemImage.alt = this._alt;
		// Вернём элемент
		return this._element;
	}
	_setEventListeners() {
		this._trashButton.addEventListener('click', () => {
			this._handleTrashButton();
		});
		this._likeButton.addEventListener('click', () => {
			this._handleLikeButton();
		});

		this._elemImage.addEventListener('click', () => {
			this._handleCardClick(this._name, this._link)
		});
	}
	_handleTrashButton() {
		this._element.remove();
	}
	_handleLikeButton() {
		this._likeButton.classList.toggle('element__button-like_active');
	}
};