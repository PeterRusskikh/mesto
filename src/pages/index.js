import './index.css';
import { Api } from '../components/Api.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupConfirm } from '../components/PopupConfirm.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import {
  popupEditProfile,
  popupAddContent,
  popupShowImage,
  popupUpdateAvatar,
  popupDelContent,
  buttonEditProfile,
  buttonAddContent,
  buttonUpdateAvatar,
  nameProfile,
  aboutProfile,
  avatarProfile,
  formUpdateAvatar,
  validationConfig,
  contentListNode,
  formEditProfile,
  formAddContent,
} from '../utils/constants.js';
let userId;

function createCard(data) {
  const card = new Card(
    data,
    '#content__card-template',
    showPopupWithImage,
    userId,
    async () => {
      try {
        const res = await api.addLike(data._id);
        card.like();
        card.setLikesCount(res);
      } catch (e) {
        console.warn(e);
      }
    },
    async () => {
      try {
        const res = await api.removeLike(data._id);
        card.dislike();
        card.setLikesCount(res);
      } catch (e) {
        console.warn(e);
      }
    },
    () => {
      popupConfirm.open(card);
    }
  );
  return card.generateCard();
}
function showPopupWithImage(name, link) {
  popupImage.open(name, link);
}
async function handleSubmitFormEditProfile(data) {
  try {
    const userData = await api.editUserInfo(data);
    currentUser.setUserInfo(userData);
    popupEdit.close();
  } catch (err) {
    return console.log(err);
  }
}
async function handleSubmitFormUpdateAvatar(data) {
  try {
    const userData = await api.updateUserAvatar(data);
    currentUser.setUserInfo(userData);
    popupAvatar.close();
  } catch (err) {
    return console.log(err);
  }
}
async function handleSubmitFormAddContent(data) {
  try {
    const newCard = await api.addCard(data);
    cardList.addItem(createCard(newCard));
    popupAdd.close();
  } catch (err) {
    return console.log(err);
  }
}
buttonEditProfile.addEventListener(
  'click',
  () => {
    popupEdit.open();
    popupEdit.setInputsValues(currentUser.getUserInfo());
    validatorFormEditProfile.hideInputErros();
  },
  false
);
buttonUpdateAvatar.addEventListener(
  'click',
  () => {
    popupAvatar.open();
    validatorFormUpdateAvatar.hideInputErros();
  },
  false
);
buttonAddContent.addEventListener(
  'click',
  () => {
    popupAdd.open();
    validatorFormAddContent.hideInputErros();
  },
  false
);

const validatorFormEditProfile = new FormValidator(validationConfig, formEditProfile);
validatorFormEditProfile.enableValidation();
const validatorFormAddContent = new FormValidator(validationConfig, formAddContent);
validatorFormAddContent.enableValidation();
const validatorFormUpdateAvatar = new FormValidator(validationConfig, formUpdateAvatar);
validatorFormUpdateAvatar.enableValidation();

const popupImage = new PopupWithImage(popupShowImage);
const popupAdd = new PopupWithForm(popupAddContent, handleSubmitFormAddContent);
const popupEdit = new PopupWithForm(popupEditProfile, handleSubmitFormEditProfile);
const popupAvatar = new PopupWithForm(popupUpdateAvatar, handleSubmitFormUpdateAvatar);
const popupConfirm = new PopupConfirm(popupDelContent, async (card) => {
  api
    .deleteCard(card._id)
    .then(() => {
      card.remove();
      popupConfirm.close();
    })
    .catch((err) => console.log(err));
});

popupConfirm.setEventListeners();
popupImage.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupAvatar.setEventListeners();

const currentUser = new UserInfo({
  name: nameProfile,
  about: aboutProfile,
  avatar: avatarProfile,
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'e91c4804-c3aa-4575-a63a-f03f4cdae8b0',
    'Content-Type': 'application/json',
  },
});

const cardList = new Section(
  {
    renderer: (data) => {
      const card = createCard(data);
      cardList.addItem(card);
    },
  },
  contentListNode
);
Promise.all([api.getCurrentUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    currentUser.setUserInfo(userData);
    userId = userData._id;
    cardList.renderItems(cards.reverse());
  })
  .catch((err) => console.log(err));
