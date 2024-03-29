import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../index.css';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import Login from './Login';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import * as auth from '../utils/auth';

function App() {
  const navigate = useNavigate();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState('');

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

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

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth
        .getToken(jwt)
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setEmail(data.data.email);

            navigate('/');
          } else {
            navigate('/signup');
            throw new Error('Token inválido');
          }
        })
        .catch((err) => {
          console.log(err);
          navigate('/signup');
        });
    }
  }, [loggedIn, navigate]);

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
    api.setUserInfo(profile).then((res) => {
      setCurrentUser(res);
    });
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
  function handleLogin() {
    setLoggedIn(true);
  }

  function signOut() {
    localStorage.removeItem('jwt');
    setEmail('');
    navigate('./signin');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route
            path='/'
            element={
              <>
                <Header>
                  <button onClick={signOut} className='header__sign'>
                    {' '}
                    Cerrar Sesión
                  </button>
                  <p className='header__sign'>{email} </p>
                </Header>
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
              </>
            }
          ></Route>
        </Route>

        <Route path='*' element={<Register />}></Route>
        <Route
          path='/signin'
          element={<Login handleLogin={handleLogin} />}
        ></Route>
      </Routes>

      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
