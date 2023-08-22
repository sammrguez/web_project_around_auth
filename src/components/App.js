import React, { useState } from "react";
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

  return (
    <>
      <Header />
      <Main
        onEditAvatarClick={() => handleEditAvatarClick()}
        isOpen={[
          isEditProfilePopupOpen,
          isAddPlacePopupOpen,
          isEditAvatarPopupOpen,
          isCardPopupOpen,
        ]}
        onEditProfileClick={() => handleEditProfileClick()}
        onAddPlaceClick={() => handleAddPlaceClick()}
        onCardClick={() => handleCardClick()}
      ></Main>
      <Footer />
    </>
  );
}

export default App;
