import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import {
  initialCards,
  validationConfig,
  popupEditProfile,
  popupAddContent,
  popupShowImage,
  nameProfile,
  jobProfile,
  buttonEditProfile,
  buttonAddContent,
  contentList,
  formEditProfile,
  formAddContent,
} from '../utils/constants.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
// Добавление карточек из массива
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      // Добавляем в DOM
      cardList.addItem(card);
    },
  },
  contentList
);
cardList.renderItems();
// создаем экземпляр класса
function createCard(data) {
  // Создадим экземпляр карточки
  const card = new Card(data, '#content__card-template', showPopupWithImage);
  // Создаём и возвращаем наружу
  const cardElement = card.generateCard();
  return cardElement;
}
//Открытие увеличенной картинки
function showPopupWithImage(name, link) {
  popupImage.open(name, link);
}
// Редактирование профиля
function handleSubmitFormEditProfile(data) {
  userInfo.setUserInfo(data);
}
// Форма добавления карточек
function handleSubmitFormAddContent(obj) {
  const card = createCard(obj);
  cardList.addItem(card);
  popupAdd.close();
}
const userInfo = new UserInfo({
  name: nameProfile,
  job: jobProfile,
});
const validatorFormEditProfile = new FormValidator(validationConfig, formEditProfile);
validatorFormEditProfile.enableValidation();
const validatorFormAddContent = new FormValidator(validationConfig, formAddContent);
validatorFormAddContent.enableValidation();
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm
const popupImage = new PopupWithImage(popupShowImage);
popupImage.setEventListeners();
const popupAdd = new PopupWithForm(popupAddContent, handleSubmitFormAddContent);
popupAdd.setEventListeners();
const popupEdit = new PopupWithForm(popupEditProfile, handleSubmitFormEditProfile);
popupEdit.setEventListeners();
// Попап редактирования профиля
buttonEditProfile.addEventListener('click', () => {
  popupEdit.open();
  popupEdit.setInputsValues(userInfo.getUserInfo());
  validatorFormEditProfile.hideInputErr();
}
);
// Попап добавления карточек
buttonAddContent.addEventListener('click', () => {
  popupAdd.open();
  validatorFormAddContent.disableSubmitButton();
  validatorFormAddContent.hideInputErr();
}
);
