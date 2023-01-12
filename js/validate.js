
function showInputError(formElement, inputElement, config) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.classList.add(config.errorClass);
	errorElement.textContent = inputElement.validationMessage;
	inputElement.classList.add(config.inputErrorClass);
}

function hideInputError(formElement, inputElement, config) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.classList.remove(config.errorClass);
	errorElement.textContent = '';
	inputElement.classList.remove(config.inputErrorClass);
}


// проверяем значение validationState
function checkInputValidity(formElement, inputElement, config) {
	if (inputElement.validity.valid) {
		hideInputError(formElement, inputElement, config);
	} else {
		showInputError(formElement, inputElement, config);
	}
}

// находим все инпуты каждой формы и навешиваем обработчики на события на них
function setEventListeners(formElement, config) {
	const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			checkInputValidity(formElement, inputElement, config);
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

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	activeButtonClass: 'popup__button_valid',
	inactiveButtonClass: 'popup__button_invalid',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible'
};

const form = document.querySelector('.popup__form');
const userNameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');

function handleSubmit1(evt) {
	evt.preventDefault();
	console.log({
		username: userNameInput.value,
		email: emailInput.value,
	})
}
form.addEventListener('submit', handleSubmit1);

enableValidation(validationConfig);




