import addIcon from "../images/add_button.svg";
import editIcon from "../images/edit_button.png";
import PopupWithForm from "./PopupWithForm";

function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_type_update-avatar")
      .classList.add("popup_opened");
  }
  function handleEditProfileClick() {
    document
      .querySelector(".popup_type_edit-profile")
      .classList.add("popup_opened");
  }
  function handleAddPlaceClick() {
    document
      .querySelector(".popup_type_new-place")
      .classList.add("popup_opened");
  }

  //visual//
  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-overlay"
          onClick={handleEditAvatarClick}
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
              onClick={handleEditProfileClick}
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
            onClick={handleAddPlaceClick}
          />
        </div>
      </section>

      <section className="card-container"></section>
      <template id="card-template">
        <div className="place-card">
          <img className="place-card__photo" src=" " alt=" " />

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

        {/* /* <div className="popup popup_type_edit-profile">
          <div className="overlay"></div>

          <form className="form" id="profile" noValidate name="profile">
            <button className="form__close-button"></button>

            <div className="form__container">
              <h3 className="form__header">Editar Perfil</h3>

              <fieldset className="form__input-container">
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

                <button
                  className="form__submit-button form__submit-button_edit"
                  type="submit"
                >
                  Crear
                </button>
              </fieldset>
            </div>
          </form>
        </div> 
         */}
        <PopupWithForm
          name="new-place"
          id="place"
          header="Nuevo Lugar"
          submitButton="place"
          buttonText="crear"
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
        {/* <div className="popup popup_type_new-place">
          <div className="overlay"></div>

          <form className="form" id="place" noValidate name="place">
            <button className="form__close-button form__close-button_type_new-place"></button>

            <div className="form__container">
              <h3 className="form__header">Nuevo Lugar</h3>

              <fieldset className="form__input-container">
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

                <button
                  type="submit"
                  className="form__submit-button form__submit-button_place"
                  id="new-place"
                >
                  Crear
                </button>
              </fieldset>
            </div>
          </form>
        </div> */}

        <div className="popup popup_type_delete">
          <div class="overlay"></div>

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
        {/* <div className="popup popup_type_update-avatar">
          <div className="overlay"></div>

          <form
            className="form form_action_avatar"
            id="avatar"
            noValidate
            name="avatar"
          >
            <button className="form__close-button form__close-button_type_new-place"></button>

            <div className="form__container">
              <h3 className="form__header">Editar foto de perfil</h3>

              <fieldset className="form__input-container">
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

                <button
                  type="submit"
                  className="form__submit-button form__submit-button_avatar"
                  id="updateAvatar"
                >
                  Guardar
                </button>
              </fieldset>
            </div>
          </form>
        </div> */}
        <div className="popup popup_type_photo">
          <div className="popup__photo-container">
            <button className="popup__close-button"></button>

            <img className="popup__photo" src=" " />

            <h4 className="popup__photo-caption"></h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
