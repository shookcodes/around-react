import React, { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";
import Input from "./Input.js";
import "../index.css";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false)
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
    <div className="page">
      <Header />
      <Main
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
        aria-label="Save profile picture"
      >
        <Input
          name="avatar"
          class="avatar-image"
          type="url"
          placeholder="Avatar URL"
          aria-label="Edit avatar URL"
          minLength="1"
        />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="profile"
        title="Edit Profile"
        aria-label="Save profile"
      >
        <Input
          name="user-name"
          class="user-name"
          type="text"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          aria-label="User name"
        />
        <Input
          name="about-me"
          class="about-me"
          type="text"
          placeholder="About Me"
          minLength="2"
          maxLength="200"
          aria-label="About me"
        />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="place"
        title="New Place"
        aria-label="Save new place"
      >
           <Input
          name="place-name"
          class="place-name"
          type="text"
          placeholder="Title"
          minLength="1"
          maxLength="30"
          aria-label="Place name"
        />
        <Input
          name="place-link"
          class="place-link"
          type="url"
          placeholder="Image link"
          aria-label="Place URL"
        />
      </PopupWithForm>
    </div>
  );
}

export default App;
