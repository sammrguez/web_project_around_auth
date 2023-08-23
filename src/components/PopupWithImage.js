function PopupWithImage(props) {
  const className = `popup popup_type_${props.name} ${
    props.isOpen ? "popup_opened" : ""
  }`;
  return (
    <div className={className}>
      <div className="popup__photo-container">
        <button
          className="popup__close-button"
          onClick={props.onClose}
        ></button>

        <img className="popup__photo" src=" " />

        <h4 className="popup__photo-caption"></h4>
      </div>
    </div>
  );
}

export default PopupWithImage;
