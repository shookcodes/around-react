import React, { useRef, useEffect, useContext, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditAvatarPopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [avatar, setAvatar] = useState(currentUser.avatar);

  const avatarInput = useRef(null);

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    const input = avatarInput.current;
    const inputVal = input.value;

    props.onUpdateAvatar({
      avatar: inputVal,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="avatar"
      title="Change Profile Picture"
      ariaLabel="Save profile picture"
      onSubmit={handleSubmit}
    >
      <label className="popup__field" htmlFor="avatar-url">
        <input
          className="popup__input popup__input_type_avatar-image"
          type="url"
          id="avatar-url"
          name="avatar-url"
          placeholder="Avatar URL"
          aria-label="Avatar URL"
          required
          minLength="2"
          ref={avatarInput}
        />
      </label>
    </PopupWithForm>
  );
}
