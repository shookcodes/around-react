import React, { useState, useEffect, useContext, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

/*
Hi again, Gennadiy! I hope you are doing well! I've fixed all errors except the ones on this page.  If you want me to resubmit after this next review, of course I will; however, I chose to use useRef on this component because I have a better understanding of useState/setState, and the instructoions for AddPlacePopup implicitly state that we are allowed to use either useState/setState OR useRef (see below for the verbiage on my Assignment for AddPlacePopup): 
Don't forget about the handleSubmit() and onAddPlace() for the new AddPlacePopup component. This time you can use both managed components or refs to get input values.
If everything is working correctly, new cards should appear at the end of the list. Perfect!

---

I do recognize your note that useRef is not usually used; however, I really wanted to make sure I understand how it worked, and using it in the AddPlaceComponent helped me solidify my knowledge. 

Again, if you need me to redo, that's fine, but please know that our instructions allow either managed components or refs. 

Thank you!
Sarah
*/

export default function AddPlacePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [placeName, setPlaceName] = useState(null);
  const [placeLink, setPlaceLink] = useState(null);
  const placeNameInput = useRef(null);
  const placeLinkInput = useRef(null);


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
          minLength="2"
          maxLength="30"
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
