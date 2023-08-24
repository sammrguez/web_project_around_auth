import React, { useEffect, useState } from "react";
import addIcon from "../images/add_button.svg";
import editIcon from "../images/edit_button.png";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import api from "../utils/api";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescrprion, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.defaultProfile().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  });

  useEffect(() => {
    api.cardsAddedRequest().then((res) => {
      setCards(res);
    });
  }, []);
  console.log(cards);
  //test

  //visual//
  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-overlay"
          onClick={props.onEditAvatarClick}
        ></div>
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="aquí está tu foto de perfil"
        />

        <div className="profile__info">
          <div className="edit-button">
            <img
              className="edit-button__icon"
              src={editIcon}
              alt="ícono de editar"
              onClick={props.onEditProfileClick}
            />
          </div>
          <h1 className="profile__user-name">{userName}</h1>
          <h2 className="profile__user-profession">{userDescrprion} </h2>
        </div>
        <div className="add-button">
          <img
            className="add-button__icon"
            src={addIcon}
            alt="ícono de agregar"
            onClick={props.onAddPlaceClick}
          />
        </div>
      </section>

      <section className="cards">
        <ul class="card-container">
          <Card
            card={cards.map((card, i) => (
              <li className="place-card" key={i}>
                <img
                  className="place-card__photo"
                  src={card.link}
                  alt={card.name}
                  onClick={props.onCardClick}
                />

                <button className="trash-button"></button>

                <div className="place-card__info-container">
                  <h3 className="place-card__name">{card.name} </h3>

                  <button className="like-button">
                    <span className="like-button-counter">
                      {card.likes.length}{" "}
                    </span>
                  </button>
                </div>
              </li>
            ))}
          ></Card>
          {/* {cards.map((card, i) => (
            <li className="place-card" key={i}>
              <img
                className="place-card__photo"
                src={card.link}
                alt=" "
                onClick={props.onCardClick}
              />

              <button className="trash-button"></button>

              <div className="place-card__info-container">
                <h3 className="place-card__name">{card.name} </h3>

                <button className="like-button">
                  <span className="like-button-counter">
                    {card.likes.lengt}
                  </span>
                </button>
              </div>
            </li>
          ))} */}
        </ul>
      </section>

      <section className="popups">
        <PopupWithForm
          name="edit-profile"
          id="profile"
          header="Editar Perfil"
          submitButton="edit"
          buttonText="actualizar"
          isOpen={props.isOpen[0]}
          onClose={props.onClose}
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
          isOpen={props.isOpen[1]}
          onClose={props.onClose}
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

        <div className="popup popup_type_delete">
          <div className="overlay"></div>

          <div
            className="form form_action_delete"
            id="deleteForm"
            name="delete"
          >
            <button
              className="form__close-button form__close-button_type_delete"
              type="submit"
            ></button>

            <div className="form__container">
              <h3 className="form__header">¿Estás seguro?</h3>

              <button
                type="submit"
                className="form__submit-button form__submit-button_delete"
                id="delete"
              >
                Sí
              </button>
            </div>
          </div>
        </div>
        <PopupWithForm
          name="update-avatar"
          id="avatar"
          header="Editar foto de perfil"
          submitButton="avatar"
          buttonText="guardar"
          isOpen={props.isOpen[2]}
          onClose={props.onClose}
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

        <PopupWithImage
          name="photo"
          isOpen={props.isOpen[3]}
          onClose={props.onClose}
        />
      </section>
    </main>
  );
}

export default Main;
