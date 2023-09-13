import React, { useEffect, useState, useContext } from "react";

import PopupWithForm from "./PopupWithForm";

import api from "../utils/api";
import PopupConfirmation from "./PopupConfirmation";
import Profile from "./Profile";
import CardContainer from "./CardContainer";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onClose,
  onCardClick,
  selectedCard,
  isEditAvatarPopupOpen,
  isAddPlacePopupOpen,
  isEditProfilePopupOpen,
  children,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .cardsAddedRequest()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).then((res) => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  //visual//
  return (
    <main className="content">
      <Profile
        onEditAvatarClick={onEditAvatarClick}
        userAvatar={currentUser.avatar}
        onEditProfileClick={onEditProfileClick}
        userName={currentUser.name}
        userDescrprion={currentUser.about}
        onAddPlaceClick={onAddPlaceClick}
      />

      <CardContainer
        onCardLike={handleCardLike}
        cards={cards}
        onCardClick={onCardClick}
        onCardDelete={handleCardDelete}
      />

      <PopupWithForm
        name="new-place"
        id="place"
        header="Nuevo Lugar"
        submitButton="place"
        buttonText="crear"
        isOpen={isAddPlacePopupOpen}
        onClose={onClose}
      >
        <input
          type="text"
          className="form__input"
          placeholder="Título"
          id="place-name-input"
          name="placeName"
          minLength="4"
          maxLength="30"
          required
        />

        <span className="form__input-error place-name-input-error"></span>

        <input
          type="url"
          className="form__input"
          placeholder="Enlace a la Imagen"
          id="photo-link-input"
          name="link"
          required
          minLength="4"
        />

        <span className="form__input-error photo-link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="update-avatar"
        id="avatar"
        header="Editar foto de perfil"
        submitButton="avatar"
        buttonText="guardar"
        isOpen={isEditAvatarPopupOpen}
        onClose={onClose}
      >
        <input
          type="url"
          className="form__input"
          placeholder="Link de foto"
          id="avatar-input"
          name="updateAvatar"
          required
          minLength="4"
        />

        <span className="form__input-error avatar-input-error"></span>
      </PopupWithForm>

      <ImagePopup name="photo" onClose={onClose} selectedCard={selectedCard} />
      <PopupConfirmation />
      {children}
    </main>
  );
}

export default Main;
