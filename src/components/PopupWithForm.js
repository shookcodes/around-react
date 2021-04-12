import React from 'react'
import "../index.css"

export default function PopupWithForm(props)  {
return (
 <div className={`popup popup_style_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} >
   <form className="popup__form" name={props.name} noValidate>
        <fieldset className="popup__fields">
          <button
            className="btn btn_style_close btn_style_close-popup"
            type="reset"
            aria-label={`Close ${props.name} modal`}
            onClick={props.onClose}
          ></button>
      
          <h2 className="popup__title">{props.title}</h2>
          <div className="popup__inputs">
         {props.isOpen ? props.children : ""}
         </div>
          <button
            className="btn btn_style_save"
            type="submit"
            aria-label={props.ariaLabel}>
            Save
          </button>
        </fieldset>
      </form>
    </div>

)

}