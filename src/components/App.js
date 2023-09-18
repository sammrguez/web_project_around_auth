import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, [currentUser]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .cardsAddedRequest()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id).then((res) => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }
  function handleAddPlaceSubmit(card) {
    api.addCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
    });
  }
  function handleUpdateAvatar(url) {
    api.setUserAvatar(url);
  }
  function handleUpdateUser(profile) {
    api.setUserInfo(profile).then((res) => {});
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
        selectedCard={selectedCard}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      >
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
      </Main>
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
