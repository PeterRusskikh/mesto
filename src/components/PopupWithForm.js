import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, handleSubmitForm) {
    super(selector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputsList = this._popupForm.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    this._inputValues = {};
    this._inputsList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }
  setInputsValues(data) {
    this._inputsList.forEach((input) => {
      input.value = data[input.name];
    });
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const initialText = evt.submitter.textContent;
      evt.submitter.textContent = 'Сохранение...';
      this._handleSubmitForm(this._getInputValues())
        .then(() => this.close())
        .finally(() => {
          evt.submitter.textContent = initialText;
        });
    });
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
}
