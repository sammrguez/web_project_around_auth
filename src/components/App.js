import "../index.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleEditProfileClick() {
    document
      .querySelector(".popup_type_edit-profile")
      .classList.add("popup_opened");
  }
  function handleAddPlaceClick() {
    document
      .querySelector(".popup_type_new-place")
      .classList.add("popup_opened");
  }
  return (
    <body class="root">
      <div class="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </body>
  );
}

export default App;
