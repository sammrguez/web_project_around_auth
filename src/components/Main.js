import addIcon from "../images/add_button.svg";
import editIcon from "../images/edit_button.png";

function Main() {
  return (
    <main class="content">
      <section class="profile">
        <div class="profile__avatar-overlay"></div>
        <img
          class="profile__avatar"
          src=" "
          alt="aquí está tu foto de perfil"
        />

        <div class="profile__info">
          <div class="edit-button">
            <img
              class="edit-button__icon"
              src={editIcon}
              alt="ícono de editar"
            />
          </div>
          <h1 class="profile__user-name"></h1>
          <h2 class="profile__user-profession"></h2>
        </div>
        <div class="add-button">
          <img class="add-button__icon" src={addIcon} alt="ícono de agregar" />
        </div>
      </section>

      <section class="card-container"></section>

      <section class="popups">
        <div class="popup popup_type_edit-profile">
          <div class="overlay"></div>

          <form class="form" id="profile" novalidate name="profile">
            <button class="form__close-button"></button>

            <div class="form__container">
              <h3 class="form__header">Editar Perfil</h3>

              <fieldset class="form__input-container">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Nombre"
                  id="name-input"
                  name="name"
                  required
                  minlength="2"
                  maxlength="30"
                />

                <span class="form__input-error name-input-error"></span>

                <input
                  type="text"
                  class="form__input"
                  placeholder="Acerca de mi"
                  id="about-me-input"
                  name="about-me"
                  required
                  minlength="2"
                  maxlength="20"
                />

                <span class="form__input-error about-me-input-error"></span>

                <button
                  class="form__submit-button form__submit-button_edit"
                  type="submit"
                >
                  Crear
                </button>
              </fieldset>
            </div>
          </form>
        </div>

        <div class="popup popup_type_new-place">
          <div class="overlay"></div>
          <template id="card-template">
            <div class="place-card">
              <img class="place-card__photo" src=" " alt=" " />

              <button class="trash-button"></button>

              <div class="place-card__info-container">
                <h3 class="place-card__name"></h3>

                <button class="like-button">
                  <span class="like-button-counter"></span>
                </button>
              </div>
            </div>
          </template>
          <form class="form" id="place" novalidate name="place">
            <button class="form__close-button form__close-button_type_new-place"></button>

            <div class="form__container">
              <h3 class="form__header">Nuevo Lugar</h3>

              <fieldset class="form__input-container">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Título"
                  id="place-name-input"
                  name="placeName"
                  minlength="4"
                  maxlength="30"
                  required
                />

                <span class="form__input-error place-name-input-error"></span>

                <input
                  type="url"
                  class="form__input"
                  placeholder="Enlace a la Imagen"
                  id="photo-link-input"
                  name="link"
                  required
                  minlength="4"
                />

                <span class="form__input-error photo-link-input-error"></span>

                <button
                  type="submit"
                  class="form__submit-button form__submit-button_place"
                  id="new-place"
                >
                  Crear
                </button>
              </fieldset>
            </div>
          </form>
        </div>
        <div class="popup popup_type_delete">
          <div class="overlay"></div>

          <div class="form form_action_delete" id="deleteForm" name="delete">
            <button
              class="form__close-button form__close-button_type_delete"
              type="submit"
            ></button>

            <div class="form__container">
              <h3 class="form__header">¿Estás seguro?</h3>

              <button
                type="submit"
                class="form__submit-button form__submit-button_delete"
                id="delete"
              >
                Sí
              </button>
            </div>
          </div>
        </div>
        <div class="popup popup_type_update-avatar popup-opened">
          <div class="overlay"></div>

          <form
            class="form form_action_avatar"
            id="avatar"
            novalidate
            name="avatar"
          >
            <button class="form__close-button form__close-button_type_new-place"></button>

            <div class="form__container">
              <h3 class="form__header">Editar foto de perfil</h3>

              <fieldset class="form__input-container">
                <input
                  type="url"
                  class="form__input"
                  placeholder="Link de foto"
                  id="avatar-input"
                  name="updateAvatar"
                  required
                  minlength="4"
                />

                <span class="form__input-error avatar-input-error"></span>

                <button
                  type="submit"
                  class="form__submit-button form__submit-button_avatar"
                  id="updateAvatar"
                >
                  Guardar
                </button>
              </fieldset>
            </div>
          </form>
        </div>
        <div class="popup popup_type_photo">
          <div class="popup__photo-container">
            <button class="popup__close-button"></button>

            <img class="popup__photo" src=" " />

            <h4 class="popup__photo-caption"></h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
