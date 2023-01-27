import { openPopupImage } from './script.js'

export class Card {
	constructor(data, templateSelector) {
		this._name = data.name;
		this._link = data.link;
		this._templateSelector = templateSelector;
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
		// Запишем разметку в приватное поле _element. 
		// Так у других элементов появится доступ к ней.
		this._element = this._getTemplate();
		this._setEventListeners();
		// Добавим данные
		this._element.querySelector('.element__title').textContent = this._name;
		this._element.querySelector('.element__image').src = this._link;
		// Вернём элемент наружу
		return this._element;
	}
	_setEventListeners() {
		this._element
			.querySelector('.element__button-trash')
			.addEventListener("click", () => {
				this._TrashButton();
			});
		this._element
			.querySelector('.element__button-like')
			.addEventListener('click', () => {
				this._LikeButton();
			});
		this._element
			.querySelector('.element__image')
			.addEventListener('click', () => {
				this._FullScreenImage();
			})
	}
	_TrashButton() {
		this._element.remove();
	}
	_LikeButton() {
		this._element
			.querySelector('.element__button-like')
			.classList.toggle('element__button-like_active');
	}
	_FullScreenImage() {
		openPopupImage(this._name, this._link);
	}
};