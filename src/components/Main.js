import React from "react";
import addIcon from "../images/add_button.svg";
import editIcon from "../images/edit_button.png";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

function Main(props) {
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
          src=" "
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
          <h1 className="profile__user-name"></h1>
          <h2 className="profile__user-profession"></h2>
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

      <section className="card-container"></section>
      <template id="card-template">
        <div className="place-card">
          <img
            className="place-card__photo"
            src=" "
            alt=" "
            onClick={props.onCardClick}
          />

          <button className="trash-button"></button>

          <div className="place-card__info-container">
            <h3 className="place-card__name"></h3>

            <button className="like-button">
              <span className="like-button-counter"></span>
            </button>
          </div>
        </div>
      </template>

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
