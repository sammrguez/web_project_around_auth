import React from "react";
import Card from "./Card";
function CardContainer({ cards, onCardClick }) {
  return (
    <section className="card-container">
      {cards.map((card) => {
        return (
          <Card
            likes={card.likes.length}
            name={card.name}
            key={card._id}
            link={card.link}
            onCardClick={() => onCardClick(card)}
          />
        );
      })}
    </section>
  );
}

export default CardContainer;
