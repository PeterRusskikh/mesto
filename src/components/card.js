
export class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._title = name;
    this._image = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.content__like-button');
    this._trashButton = this._element.querySelector('.content__delete-button');
    this._contentImage = this._element.querySelector('.content__image');
    this._contentTitle = this._element.querySelector('.content__title');
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.content__card')
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    // Добавим данные
    this._contentTitle.textContent = this._title;
    this._contentImage.src = this._image;
    this._contentImage.alt = 'Изображение: ' + this._title;
    // Установим обработчики
    this._setEventListeners();
    // Вернём наружу
    return this._element;
  }
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
    this._trashButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });
    this._contentImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  }
  _handleLikeButton() {
    this._likeButton.classList.toggle('content__like-button_active');
  }
  _handleDeleteButton() {
    this._element.remove();
    this._element = null;
  }
};