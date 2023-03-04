export class Card {
  constructor(data, templateSelector, handleCardClick, userId, like, dislike, deleteCard) {
    this._title = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._deleteCard = deleteCard;
    this._like = like;
    this._dislike = dislike;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.content__card')
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.content__like-button');
    this._likesQty = this._element.querySelector('.content__like-count');
    this._likesQty.textContent = this._likes.length;
    this._deleteBtn = this._element.querySelector('.content__delete-button');
    if (this._ownerId !== this._userId) {
      this._deleteBtn.remove();
    }
    this._imgElement = this._element.querySelector('.content__image');
    this._imgElement.src = this._image;
    this._imgElement.alt = 'Фотография ' + this._title;
    this._element.querySelector('.content__title').textContent = this._title;
    this._setEventListeners();
    this._isLiked();
    return this._element;
  }
  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      if (this._likeBtn.classList.contains('content__like-button_active')) {
        this._dislike();
      } else {
        this._like();
      }
    });
    this._deleteBtn.addEventListener('click', () => {
      this._deleteCard(this._id);
    });
    this._imgElement.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  }
  _isLiked() {
    this._likes.forEach((user) => {
      user._id === this._userId ? this.like() : this.dislike();
    });
  }
  like() {
    this._likeBtn.classList.add('content__like-button_active');
  }
  dislike() {
    this._likeBtn.classList.remove('content__like-button_active');
  }
  setLikesCount(res) {
    this._likesQty.textContent = `${res.likes.length}`;
  }
  remove() {
    this._element.remove();
    this._element = null;
  }
}
