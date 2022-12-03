// кнопка EDIT -------------------------------------------------------------------
const buttonEdit = document.querySelector('.button_edit');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.button_close');

// открываем попап, добавляем новый класс
buttonEdit.addEventListener('click', openPopup);
function openPopup() {
	popup.classList.add('popup_opened');
}

// закрываем попап, забираем класс
buttonClose.addEventListener('click', closePopup);
function closePopup() {
	event.preventDefault();
	popup.classList.remove('popup_opened');
}

// закрываем попап на нажатие пространства вне попапа

// способ 1
// popup.addEventListener('click', function () {
// 	if (event.target === event.currentTarget) {
// 		closePopup();
// 	}
// });

// способ 2
// popup.addEventListener('click', closePopup);
// document.querySelector('.popup__container').addEventListener('click', function (event) {
// 	event.stopPropagation();
// });

// способ 3
popup.addEventListener('click', function (event) {
	if (!event.defaultPrevented) {
		closePopup();
	};
});
document.querySelector('.popup__container').addEventListener('click', function (event) {
	event.preventDefault();
})


// Перемещаем введенные данные в профиль ---------------------------------------------------
const popupName = document.querySelector('.popup__name');
const popupJob = document.querySelector('.popup__job');
const buttonSave = document.querySelector('.button_save');

function handleFormSubmit(evt) {

	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	// Так мы можем определить свою логику отправки.
	// О том, как это делать, расскажем позже.
	// Получите значение полей jobInput и nameInput из свойства value
	const nameInput = popupName.value;
	const jobInput = popupJob.value;
	// Выберите элементы, куда должны быть вставлены значения полей
	const name = document.querySelector('.profile__name');
	const job = document.querySelector('.profile__job');
	// Вставьте новые значения с помощью textContent
	name.textContent = nameInput;
	job.textContent = jobInput;
	// закрываем попап:
	closePopup();
};
// Прикрепляем обработчик к форме:
buttonSave.addEventListener('click', handleFormSubmit);
// он будет следить за событием “submit” - «отправка»
buttonSave.addEventListener('submit', handleFormSubmit);


// Лайк active ---------------------------------------------------

const buttonLikeActive = document.querySelectorAll('.button_like');















