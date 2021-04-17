import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";
import Input from "./Input.js";
import api from "../utils/Api";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import "../index.css";

function App(props) {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
    id: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(() => {
          return {
            name: user.name,
            about: user.about,
            avatar: user.avatar,
            id: user._id,
          };
        });
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          id={currentUser.id}
          name={currentUser.name}
          about={currentUser.about}
          avatar={currentUser.avatar}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup
          selectedCard={selectedCard}
          card={props.card}
          name={props.name}
          link={props.link}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          title="Change Profile Picture"
          ariaLabel="Save profile picture"
        >
          <Input
            name="avatar"
            class="avatar-image"
            type="url"
            placeholder="Avatar URL"
            ariaLabel="Edit avatar URL"
            minLength="1"
          />
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="profile"
          title="Edit Profile"
          ariaLabel="Save profile"
        >
          <Input
            name="user-name"
            class="user-name"
            type="text"
            placeholder="Name"
            minLength="2"
            maxLength="40"
            ariaLabel="User name"
          />
          <Input
            name="about-me"
            class="about-me"
            type="text"
            placeholder="About Me"
            minLength="2"
            maxLength="200"
            ariaLabel="About me"
          />
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="place"
          title="New Place"
          ariaLabel="Save new place"
        >
          <Input
            name="place-name"
            class="place-name"
            type="text"
            placeholder="Title"
            minLength="1"
            maxLength="30"
            ariaLabel="Place name"
          />
          <Input
            name="place-link"
            class="place-link"
            type="url"
            placeholder="Image link"
            ariaLabel="Place URL"
          />
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
