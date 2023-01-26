export class Card {
	template;
	element;
	elementTitle;
	elementImage;
	buttonTrash;
	buttonLike;


	constructor(name, link, template) {
		this._name = name;
		this._link = link;
		this._template = template;
		this.getTemplate() = template;
	}

	getTemplate() {
		this.template = document
			.querySelector('#elements')
			.content.querySelector('.element');
	}
	create() {
		this.element = this.template.cloneNode(true);
		this.elementTitle = this.element.querySelector('.element__title');
		this.elementImage = this.element.querySelector('.element__image');
		this.buttonTrash = this.element.querySelector('.element__button-trash');
		this.buttonLike = this.element.querySelector('.element__button-like');




		return this.element;
	}

	setListeners() {
		// корзина
		this.buttonTrash.addEventListener('click', () => {
			this.element.remove();
		});
		// кнопка лайк
		this.buttonLike.addEventListener('click', () => {
			this.buttonLike.classList.toggle('element__button-like_active');
		});

	}
}
