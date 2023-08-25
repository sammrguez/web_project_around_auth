import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";
import PopupConfirmation from "./PopupConfirmation";
import Profile from "./Profile";
import CardContainer from "./CardContainer";
import ImagePopup from "./ImagePopup";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onClose,
  isOpen,
  onCardClick,
  selectedCard,
}) {
  const [userName, setUserName] = useState();
  const [userDescrprion, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .defaultProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });

    api
      .cardsAddedRequest()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  //visual//
  return (
    <main className="content">
      <Profile
        onEditAvatarClick={onEditAvatarClick}
        userAvatar={userAvatar}
        onEditProfileClick={onEditProfileClick}
        userName={userName}
        userDescrprion={userDescrprion}
        onAddPlaceClick={onAddPlaceClick}
      />

      <CardContainer cards={cards} onCardClick={onCardClick} />

      <PopupWithForm
        name="edit-profile"
        id="profile"
        header="Editar Perfil"
        submitButton="edit"
        buttonText="actualizar"
        isOpen={isOpen[0]}
        onClose={onClose}
      >
        <input
          type="text"
          className="form__input"
          placeholder="Nombre"
          id="name-input"
          name="name"
          required
          minLength="2"
          maxLength="30"
        />

        <span className="form__input-error name-input-error"></span>

        <input
          type="text"
          className="form__input"
          placeholder="Acerca de mi"
          id="about-me-input"
          name="about-me"
          required
          minLength="2"
          maxLength="20"
        />

        <span className="form__input-error about-me-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="new-place"
        id="place"
        header="Nuevo Lugar"
        submitButton="place"
        buttonText="crear"
        isOpen={isOpen[1]}
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
        isOpen={isOpen[2]}
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
    </main>
  );
}

export default Main;
