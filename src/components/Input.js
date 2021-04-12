import React from "react";
import "../index.css";

export default function Input(props) {
  return (
    <>
      <label className="popup__field" htmlFor={props.name}>
        <input
          className={`popup__input popup__input_type_${props.class}`}
          type={props.type}
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          aria-label={props.ariaLabel}
          required
          minLength={props.minLength}
        />
      </label>
    </>
  );
}
