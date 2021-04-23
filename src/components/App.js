import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import "../index.css";

function App(props) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  useEffect(() => {
    api
      .getCardList()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);


  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser.id);
    let updateLike = null;

    if (isLiked === false) {
      updateLike = api.addCardLike(card._id);
    } else {
      updateLike = api.removeCardLike(card._id);
    }
    updateLike.then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    })
    .catch((err) => console.log(err));;
  }

  function handleDeleteClick(card) {
    api.removeCard(card._id).then(() => {
      const persistedCards = cards.filter((item) => {
        return item._id !== card._id;
      });
      setCards(persistedCards);
    });
  }

  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
  });

  const [, setIsOpen] = useState(false);

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  useEffect(() => {
    api
      .getUserInfo()
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ name: null, link: null });
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleUpdateUser(user) {
    api
      .setUserInfo(user)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .then(closeAllPopups)
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatar) {
    api
      .setUserAvatar(avatar)
      .then((updatedAvatar) => {
        setCurrentUser(updatedAvatar);
      })
      .then(closeAllPopups)
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
    .then((newCard) => setCards([newCard, ...cards]))
    .then(closeAllPopups)
    .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main

          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
        />
        <Footer />
        <ImagePopup
          selectedCard={selectedCard}
          card={props.card}
          name={props.name}
          link={props.link}
          onClose={closeAllPopups}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
         <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
       
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
