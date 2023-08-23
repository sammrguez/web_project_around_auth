import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  React.useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick() {
    setIsCardPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsCardPopupOpen(false);
  }
  return (
    <>
      <Header />
      <Main
        onEditAvatarClick={() => handleEditAvatarClick()}
        onEditProfileClick={() => handleEditProfileClick()}
        onAddPlaceClick={() => handleAddPlaceClick()}
        onCardClick={() => handleCardClick()}
        isOpen={[
          isEditProfilePopupOpen,
          isAddPlacePopupOpen,
          isEditAvatarPopupOpen,
          isCardPopupOpen,
        ]}
        onClose={() => closeAllPopups()}
      ></Main>
      <Footer />
    </>
  );
}

export default App;
