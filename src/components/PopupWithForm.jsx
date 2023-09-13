import React from "react";
function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="overlay"></div>
      <form
        className="form"
        id={props.id}
        noValidate
        name={props.name}
        onSubmit={props.onSubmit}
      >
        <button
          className="form__close-button"
          onClick={props.onClose}
          type="button"
        ></button>

        <div className="form__container">
          <h3 className="form__header">{props.header}</h3>

          <fieldset className="form__input-container">
            {props.children}
            <button
              className={`form__submit-button form__submit-button_${props.submitButton}`}
              type="submit"
            >
              {props.buttonText}
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
export default PopupWithForm;
