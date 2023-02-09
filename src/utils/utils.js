// Закрытие, открытие попапов--------------------------------
import { popups, popupFullImgName, popupFullImgImage, popupFullImg } from './constants';
export function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEscKeybord);
};
export function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEscKeybord);
};
export function handleCardClick(name, link) {
	popupFullImgName.textContent = name;
	popupFullImgImage.src = link;
	popupFullImgImage.alt = 'Изображение:' + name;
	openPopup(popupFullImg);
};
function closePopupEscKeybord(evt) {
	if (evt.key === 'Escape') {
		const popupOpened = document.querySelector('.popup_opened');
		closePopup(popupOpened);
	};
	popups.forEach((popup) => {
		popup.addEventListener('mousedown', (evt) => {
			if (evt.target.classList.contains('popup_opened')) {
				closePopup(popup);
			}
			if (evt.target.classList.contains('popup__button-close')) {
				closePopup(popup);
			}
		});
	});
};
