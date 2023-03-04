export class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _handleEscClose(e) {
    if (e.key === 'Escape') {
      const isNotCombinedKey = !(e.ctrlKey || e.altKey || e.shiftKey);
      if (isNotCombinedKey && this._popup.classList.contains('popup_opened')) {
        this.close();
      }
    }
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  setEventListeners() {
    this._popup.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('popup__close-button')) {
        this.close();
      }
      if (e.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
