const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showError = (formElement, inputElement, errorMessage) => {
	input.classList.add('form__input_type_error');
	formError.textContent = errorMessage;
	formError.classList.add('form__input-error_active');
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
};

const hideError = (input) => {
	input.classList.remove('form__input_type_error');
	// 1. Удалите активный класс ошибки c formError.
	formError.classList.remove('form__input-error_active');
	// 2. Очистите свойство textContent элемента formError.
	formError.textContent = '';
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
};

const checkInputValidity = () => {
	if (!formInput.validity.valid) {
		showError(formInput, formInput.validationMessage);
	} else {
		hideError(formInput);
	}
};

formElement.addEventListener('submit', function (evt) {
	evt.preventDefault();
});

formInput.addEventListener('input', function () {
	checkInputValidity();
});
// 	console.log(evt.target.validity);
// });
// cardUrlInput.addEventListener('input', function (evt) {
// 	console.log(evt.target.validity);
// });

// Функция, которая добавляет класс с ошибкой
// const showInputError = (element) => {
// 	element.classList.add('form__input_type_error');
// };
// // Функция, которая удаляет класс с ошибкой
// const hideInputError = (element) => {
// 	element.classList.remove('form__input_type_error');
// };


// // Вызовем функцию isValid на каждый ввод символа
// cardNameInput.addEventListener('input', isValid(cardNameInput));
// cardUrlInput.addEventListener('input', isValid(cardUrlInput));


