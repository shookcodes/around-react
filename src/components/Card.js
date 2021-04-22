import React, {useContext} from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  const isOwn = currentUser === props.card.owner._id;

  const cardDeleteButtonClassName = (
    `btn btn_style_delete ${isOwn ? 'btn_style_delete-active' : ''}`
  ); 

  const isLiked = props.card.likes.some(i => i._id === currentUser);
  

// Create a variable which you then set in `className` for the like button
const cardLikeButtonClassName = (`btn btn_style_like ${isLiked ? 'btn_style_like-active' : ''}`); 


  return (
    <div className="card">
      
      <button
        className={cardDeleteButtonClassName}
        aria-label="Delete place"
        onClick={handleDeleteClick}
      ></button> 
      <div
        className="card__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <div className="card__content">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Like location"
            onClick={handleLikeClick}
          ></button>
          <span className="card__like-text">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
