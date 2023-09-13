import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    if (currentUser.name !== undefined) {
      setName(currentUser.name);
    }
    if (currentUser.about !== undefined) {
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  function handleChange(evt) {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;

      case "about-me":
        setDescription(evt.target.value);

        break;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("aqui se debió enviar el formulario");
    onUpdateUser = {
      name: name,
      about: description,
    };
  }

  return (
    <PopupWithForm
      name="edit-profile"
      id="profile"
      header="Editar Perfil"
      submitButton="edit"
      buttonText="actualizar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        onChange={handleChange}
        value={name}
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
        onChange={handleChange}
        value={description}
      />

      <span className="form__input-error about-me-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
