import React from "react";

function Card({ name, link, likes, onCardClick }) {
  const handleClick = () => {
    onCardClick({ name, link });
  };
  return (
    <>
      <div className="place-card">
        <img
          className="place-card__photo"
          src={link}
          alt={name}
          onClick={handleClick}
        />

        <button className="trash-button"></button>

        <div className="place-card__info-container">
          <h3 className="place-card__name">{name} </h3>

          <button className="like-button">
            <span className="like-button-counter">{likes}</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
