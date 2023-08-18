function PopupWithImage(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__photo-container">
        <button className="popup__close-button"></button>

        <img className="popup__photo" src=" " />

        <h4 className="popup__photo-caption"></h4>
      </div>
    </div>
  );
}

export default PopupWithImage;
