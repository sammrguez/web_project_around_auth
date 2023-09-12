import { React, useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function CardContainer({ cards, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="card-container">
      {cards.map((card) => {
        return (
          <Card
            key={card._id}
            card={card}
            onCardClick={() => onCardClick(card)}
            onCardLike={() => onCardLike(card)}
            onCardDelete={() => onCardDelete(card)}
          />
        );
      })}
    </section>
  );
}

export default CardContainer;
