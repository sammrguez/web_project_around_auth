import React, { useContext } from "react";

import PopupConfirmation from "./PopupConfirmation";
import Profile from "./Profile";
import CardContainer from "./CardContainer";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onClose,
  onCardClick,
  selectedCard,
  children,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  //visual//
  return (
    <main className="content">
      <Profile
        onEditAvatarClick={onEditAvatarClick}
        userAvatar={currentUser.avatar}
        onEditProfileClick={onEditProfileClick}
        userName={currentUser.name}
        userDescrprion={currentUser.about}
        onAddPlaceClick={onAddPlaceClick}
      />

      <CardContainer
        onCardLike={onCardLike}
        cards={cards}
        onCardClick={onCardClick}
        onCardDelete={onCardDelete}
      />

      <ImagePopup name="photo" onClose={onClose} selectedCard={selectedCard} />
      <PopupConfirmation />
      {children}
    </main>
  );
}

export default Main;
