const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	activeButtonClass: 'popup__button-valid',
	inactiveButtonClass: 'popup__button-invalid',
	inputErrorClass: 'popup__input-error',
	errorClass: 'popup__input-error_visible'
};
const forms = document.querySelectorAll('.popup__form');

function showInputError(formElement, inputElement, config) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.classList.add(config.errorClass);
	errorElement.textContent = inputElement.validationMessage;
	inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	if (errorElement) {
		errorElement.classList.remove(config.errorClass);
		errorElement.textContent = '';
		inputElement.classList.remove(config.inputErrorClass);
	}
}
// проверяем значение validatityState
function checkInputValidity(formElement, inputElement, config) {
	if (inputElement.validity.valid) {
		hideInputError(formElement, inputElement, config);
	} else {
		showInputError(formElement, inputElement, config);
	}
}
// проходимся по инпутам, проверяем валидность
function hasInvalidInput(inputList) {
	return inputList.some((inputElement) => !inputElement.validity.valid);
}

function toggleButtonState(inputList, formButton, config) {
	if (hasInvalidInput(inputList)) {
		formButton.classList.remove(config.activeButtonClass)
		formButton.classList.add(config.inactiveButtonClass)
		formButton.disabled = true;
	} else {
		formButton.classList.add(config.activeButtonClass)
		formButton.classList.remove(config.inactiveButtonClass)
		formButton.disabled = false;
	}
}

// находим все инпуты каждой формы и навешиваем обработчики на события на них
function setEventListeners(formElement, config) {
	const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
	const buttonElement = formElement.querySelector(config.submitButtonSelector);

	toggleButtonState(inputList, buttonElement, config);

	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			checkInputValidity(formElement, inputElement, config);
			toggleButtonState(inputList, buttonElement, config)
		})
	})
}
// найдем все формы
function enableValidation(config) {
	const formList = Array.from(document.querySelectorAll(config.formSelector));
	formList.forEach((formElement) => {
		setEventListeners(formElement, config)
	})
}
enableValidation(validationConfig);




