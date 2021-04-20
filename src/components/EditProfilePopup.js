import React, { useContext, useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="profile"
      title="Edit Profile"
      ariaLabel="Save profile"
      onSubmit={handleSubmit}
    >
      <label className="popup__field" htmlFor="user-name">
        <input
          className="popup__input popup__input_type_user-name"
          type="text"
          id="user-name"
          name="user-name"
          placeholder="Name"
          aria-label="User Name"
          required
          minLength="2"
          value={name}
          onChange={handleNameChange}
        ></input>
        <input
          className="popup__input popup__input_type_about-me"
          type="text"
          id="about-me"
          name="about-me"
          placeholder="About Me"
          aria-label="About me"
          required
          minLength="2"
          value={description}
          onChange={handleDescriptionChange}
        ></input>
      </label>
    </PopupWithForm>
  );
}
