import { React, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ name, link, likes, onCardClick, owner }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;
  const cardDeleteButtonClassName = `trash-button ${
    isOwn ? "trash-button_visible" : "trash-button_hidden"
  }`;
  const handleClick = () => {
    onCardClick({ name, link });
  };
  return (
    <div className="place-card">
      <img
        className="place-card__photo"
        src={link}
        alt={name}
        onClick={handleClick}
      />

      <button className={cardDeleteButtonClassName}></button>

      <div className="place-card__info-container">
        <h3 className="place-card__name">{name} </h3>

        <button className="like-button">
          <span className="like-button-counter">{likes}</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
