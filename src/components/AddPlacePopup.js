import React, { useState, useEffect, useContext, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function AddPlacePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [placeName, setPlaceName] = useState(null);
  const [placeLink, setPlaceLink] = useState(null);
  const placeNameInput = useRef(null);
  const placeLinkInput = useRef(null);

  useEffect(() => {
    setPlaceName(placeNameInput);
    setPlaceLink(placeLinkInput);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const nameInput = placeNameInput.current;
    const linkInput = placeLinkInput.current;

    const nameInputVal = nameInput.value;
    const linkInputVal = linkInput.value;

    props.onAddPlace({
      name: nameInputVal,
      link: linkInputVal,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="place"
      title="New Place"
      ariaLabel="Save new place"
      onSubmit={handleSubmit}
    >
      <label className="popup__field" htmlFor="place-name">
        <input
          className="popup__input popup__input_type_place-name"
          type="text"
          id="place-name"
          name="place-name"
          placeholder="Title"
          required
          minlength="2"
          maxlength="30"
          ref={placeNameInput}
        />
      </label>
      <label className="popup__field" htmlFor="place-link">
        <input
          className="popup__input popup__input_type_place-link"
          type="url"
          id="place-link"
          name="place-link"
          placeholder="Image link"
          required
          ref={placeLinkInput}
        />
      </label>
    </PopupWithForm>
  );
}
