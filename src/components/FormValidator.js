export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  }
  _hideInputError(_formElement, inputElement, _config) {
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
    inputElement.classList.remove(this._config.inputErrorClass);
  }
  _showInputError(_formElement, inputElement, _config) {
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
    errorElement.classList.add(this._config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.errorClass);
  }
  _checkInputValidity(_formElement, inputElement, _config) {
    if (inputElement.validity.valid) {
      this._hideInputError(_formElement, inputElement, _config);
    } else {
      this._showInputError(_formElement, inputElement, _config);
    }
  }
  _toggleButtonState(_inputList, _buttonElement, _config) {
    if (this._hasInvalidInput(_inputList)) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }
  _hasInvalidInput(_inputList) {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _setEventListeners(_formElement, _config) {
    this._toggleButtonState(this._inputList, this._buttonElement, _config);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(_formElement, inputElement, _config);
        this._toggleButtonState(this._inputList, this._buttonElement, _config);
      });
    });
  }
  enableValidation(_config, _formElement) {
    this._setEventListeners(_formElement, _config);
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
  buttonDefaultState(_buttonElement) {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(this._formElement, inputElement, this._validationConfig);
    });
  }
};